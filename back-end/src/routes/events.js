import { Router } from 'express';
import {
  getAllEvents,
  getEventById,
  createEvent,
} from '../controllers/eventsController.js';

const router = Router();

router.get('/', getAllEvents);
router.post('/', createEvent);
router.get('/:id', getEventById);

export default router;
