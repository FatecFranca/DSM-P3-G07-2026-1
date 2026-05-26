import { prisma } from '../database/client.js';
import { normalizeMongoResponse } from '../services/mongoAggregationService.js';

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
    const data = { ...req.body };
    const created = await prisma.event.create({ data });
    return res.status(201).json(normalizeMongoResponse(created));
  } catch (error) {
    return res
      .status(400)
      .json({ error: error.message || 'Erro ao criar evento.' });
  }
}

export default {
  getAllEvents,
  getEventById,
  createEvent,
};
