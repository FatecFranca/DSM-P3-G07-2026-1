import test from 'node:test';
import assert from 'assert';
import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../src/app.js';
import { prisma } from '../src/database/client.js';

test('GET /events returns 200', async () => {
  const res = await request(app).get('/events');
  assert.equal(res.status, 200);
});

test('Create, update and delete user lifecycle', async () => {
  const email = `user-${Date.now()}@example.com`;
  const plainPassword = 'integration-user-password';
  const createRes = await request(app).post('/users').send({
    name: 'Integration User',
    email,
    passwordHash: plainPassword,
    role: 'ADMIN',
  });
  assert.equal(createRes.status, 201);
  const user = createRes.body;
  assert.ok(user.id, 'user id present');
  assert.equal(user.passwordHash, undefined);

  const storedUser = await prisma.user.findUnique({ where: { id: user.id } });
  assert.ok(storedUser, 'stored user present');
  assert.notEqual(storedUser.passwordHash, plainPassword);
  assert.equal(
    await bcrypt.compare(plainPassword, storedUser.passwordHash),
    true,
  );

  const updateRes = await request(app)
    .put(`/users/${user.id}`)
    .send({ phone: '(11) 98888-7777' });
  assert.equal(updateRes.status, 200);

  const delRes = await request(app).delete(`/users/${user.id}`);
  assert.equal(delRes.status, 200);
});

test('Create and delete participant lifecycle through users', async () => {
  const email = `test-${Date.now()}@example.com`;
  const createRes = await request(app).post('/users').send({
    name: 'Integration Test',
    email,
    passwordHash: 'integration-test-password',
    role: 'PARTICIPANTE',
  });
  assert.equal(createRes.status, 201);
  const participant = createRes.body;
  assert.ok(participant.id, 'participant id present');

  const delRes = await request(app).delete(`/users/${participant.id}`);
  assert.equal(delRes.status, 200);
});

test('POST /auth/login issues cookies and /auth/me returns the authenticated user', async () => {
  const email = `auth-${Date.now()}@example.com`;
  const password = 'auth-test-password';

  try {
    const createRes = await request(app).post('/users').send({
      name: 'Auth Integration User',
      email,
      passwordHash: password,
      role: 'PARTICIPANTE',
    });
    assert.equal(createRes.status, 201);

    const agent = request.agent(app);

    const loginRes = await agent.post('/auth/login').send({ email, password });
    assert.equal(loginRes.status, 200);
    assert.equal(loginRes.body.user.email, email);
    assert.equal(loginRes.body.user.role, 'PARTICIPANTE');

    const meRes = await agent.get('/auth/me');
    assert.equal(meRes.status, 200);
    assert.equal(meRes.body.user.email, email);

    const logoutRes = await agent.post('/auth/logout');
    assert.equal(logoutRes.status, 200);

    const afterLogoutRes = await agent.get('/auth/me');
    assert.equal(afterLogoutRes.status, 401);
  } finally {
    await prisma.user.deleteMany({ where: { email } }).catch(() => {});
  }
});

test('POST /events creates an event and GET /events/:id returns it', async () => {
  const adminUser = await prisma.user.create({
    data: {
      name: 'Event Admin Test',
      email: `event-admin-${Date.now()}@example.com`,
      passwordHash: '',
      role: 'ADMIN',
    },
  });

  const title = `Fatec TechWeek ${Date.now()}`;
  let eventId;

  try {
    const res = await request(app).post('/events').send({
      title,
      description: 'Evento Acadêmico',
      startDate: '2026-05-22T00:00:00.000Z',
      endDate: '2026-05-25T00:00:00.000Z',
      location: 'Auditório',
      type: 'Palestra',
      capacity: 100,
      certificateRequiredPercent: 75,
      createdByAdminId: adminUser.id,
      status: 'CRIANDO',
    });

    assert.equal(res.status, 201);
    assert.equal(res.body.title, title);

    eventId = res.body.id;

    const getRes = await request(app).get(`/events/${eventId}`);

    assert.equal(getRes.status, 200);
    assert.equal(getRes.body.title, title);
  } finally {
    await prisma.event.deleteMany({ where: { title } }).catch(() => {});
    await prisma.user
      .deleteMany({ where: { id: adminUser.id } })
      .catch(() => {});
  }
});

test('POST /events rejects invalid date strings', async () => {
  const adminUser = await prisma.user.create({
    data: {
      name: 'Event Admin Invalid Date Test',
      email: `event-admin-invalid-${Date.now()}@example.com`,
      passwordHash: '',
      role: 'ADMIN',
    },
  });

  const title = `Invalid Event ${Date.now()}`;

  try {
    const res = await request(app).post('/events').send({
      title,
      description: 'Evento Acadêmico',
      startDate: '2026-05-22',
      endDate: 'not-a-date',
      location: 'Auditório',
      type: 'Palestra',
      capacity: 100,
      certificateRequiredPercent: 75,
      createdByAdminId: adminUser.id,
      status: 'CRIANDO',
    });

    assert.equal(res.status, 400);
    assert.equal(res.body.error, 'Data inválida em endDate.');
  } finally {
    await prisma.event.deleteMany({ where: { title } }).catch(() => {});
    await prisma.user
      .deleteMany({ where: { id: adminUser.id } })
      .catch(() => {});
  }
});

test('POST /events rejects participant users', async () => {
  const participant = await prisma.user.create({
    data: {
      name: 'Event Participant Test',
      email: `event-participant-${Date.now()}@example.com`,
      passwordHash: '',
      role: 'PARTICIPANTE',
    },
  });

  const title = `Participant Event ${Date.now()}`;

  try {
    const res = await request(app).post('/events').send({
      title,
      description: 'Evento criado por participante',
      startDate: '2026-05-22',
      endDate: '2026-05-25',
      location: 'Auditório',
      type: 'Palestra',
      capacity: 100,
      certificateRequiredPercent: 75,
      createdByAdminId: participant.id,
      status: 'CRIANDO',
    });

    assert.equal(res.status, 403);
    assert.equal(res.body.error, 'Apenas ADMIN pode criar eventos.');
  } finally {
    await prisma.event.deleteMany({ where: { title } }).catch(() => {});
    await prisma.user
      .deleteMany({ where: { id: participant.id } })
      .catch(() => {});
  }
});

test('GET /speakers returns 200', async () => {
  const res = await request(app).get('/speakers');
  assert.equal(res.status, 200);
});

test('GET /speakers/:id rejects malformed ids', async () => {
  const res = await request(app).get('/speakers/6a0ce88f6c5a6baecc42755');
  assert.equal(res.status, 400);
  assert.equal(res.body.error, 'ID inválido em speakerId.');
});

test('GET /speakers/:id returns 404 for a valid but missing id', async () => {
  const res = await request(app).get('/speakers/6a0ce88f6c5a6baecc427551');
  assert.equal(res.status, 404);
  assert.equal(res.body.error, 'Palestrante não encontrado.');
});

test('Create, update and delete speaker lifecycle', async () => {
  const email = `speaker-${Date.now()}@example.com`;

  try {
    const createRes = await request(app).post('/speakers').send({
      name: 'Integration Speaker',
      email,
      bio: 'Speaker integration test bio',
      institution: 'Fatec',
      phone: '(11) 97777-6666',
    });

    assert.equal(createRes.status, 201);
    assert.ok(createRes.body.id, 'speaker id present');
    assert.equal(createRes.body.email, email);

    const updateRes = await request(app)
      .put(`/speakers/${createRes.body.id}`)
      .send({ bio: 'Updated speaker integration bio' });

    assert.equal(updateRes.status, 200);
    assert.equal(updateRes.body.bio, 'Updated speaker integration bio');

    const delRes = await request(app).delete(`/speakers/${createRes.body.id}`);
    assert.equal(delRes.status, 200);
    assert.equal(delRes.body.message, 'Palestrante deletado com sucesso.');
  } finally {
    await prisma.speaker.deleteMany({ where: { email } }).catch(() => {});
  }
});

test('PUT /speakers/:id rejects malformed ids', async () => {
  const res = await request(app).put('/speakers/6a0ce88f6c5a6baecc42755');
  assert.equal(res.status, 400);
  assert.equal(res.body.error, 'ID inválido em speakerId.');
});

test('DELETE /speakers/:id rejects malformed ids', async () => {
  const res = await request(app).delete('/speakers/6a0ce88f6c5a6baecc42755');
  assert.equal(res.status, 400);
  assert.equal(res.body.error, 'ID inválido em speakerId.');
});
