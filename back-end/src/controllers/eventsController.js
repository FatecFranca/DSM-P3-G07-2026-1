import { prisma } from '../database/client.js';
import { normalizeMongoResponse } from '../services/mongoAggregationService.js';

function validateObjectId(fieldName, value) {
  if (typeof value !== 'string' || !/^[a-fA-F0-9]{24}$/.test(value)) {
    const error = new Error(`ID inválido em ${fieldName}.`);
    error.statusCode = 400;
    throw error;
  }
}

async function isAdminUser(userId) {
  if (!userId) return false;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { role: true },
  });

  return user?.role === 'ADMIN';
}

function parseEventDate(fieldName, value) {
  if (value === undefined || value === null) {
    return value;
  }

  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [year, month, day] = value.split('-').map(Number);
    const parsedDate = new Date(Date.UTC(year, month - 1, day, 0, 0, 0));

    if (Number.isNaN(parsedDate.getTime())) {
      const error = new Error(`Data inválida em ${fieldName}.`);
      error.statusCode = 400;
      throw error;
    }

    return parsedDate;
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    const error = new Error(`Data inválida em ${fieldName}.`);
    error.statusCode = 400;
    throw error;
  }

  return parsed;
}

function normalizeEventDates(data) {
  const normalized = { ...data };

  if (Object.prototype.hasOwnProperty.call(normalized, 'startDate')) {
    normalized.startDate = parseEventDate('startDate', normalized.startDate);
  }

  if (Object.prototype.hasOwnProperty.call(normalized, 'endDate')) {
    normalized.endDate = parseEventDate('endDate', normalized.endDate);
  }

  return normalized;
}

export async function getAllEvents(req, res) {
  try {
    const events = await prisma.event.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return res.json(normalizeMongoResponse(events));
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao listar eventos.' });
  }
}

export async function getEventById(req, res) {
  try {
    const event = await prisma.event.findUnique({
      where: { id: req.params.id },
    });

    if (!event) {
      return res.status(404).json({ error: 'Evento não encontrado.' });
    }

    return res.json(normalizeMongoResponse(event));
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar evento.' });
  }
}

export async function createEvent(req, res) {
  try {
    const creatorId = req.body.createdByAdminId;
    validateObjectId('createdByAdminId', creatorId);

    if (!(await isAdminUser(creatorId))) {
      return res
        .status(403)
        .json({ error: 'Apenas ADMIN pode criar eventos.' });
    }

    const data = normalizeEventDates(req.body);
    const created = await prisma.event.create({ data });
    return res.status(201).json(normalizeMongoResponse(created));
  } catch (error) {
    const statusCode = error.statusCode || 400;
    return res.status(statusCode).json({
      error: error.message || 'Erro ao criar evento.',
    });
  }
}

export default {
  getAllEvents,
  getEventById,
  createEvent,
};
