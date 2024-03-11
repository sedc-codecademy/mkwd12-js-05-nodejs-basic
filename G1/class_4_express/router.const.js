import { Router } from 'express';
import studentsRoutes from './routes/student.route.js';

// This is the main router of this application

const router = Router();

// List all the routes
router.use('/students', studentsRoutes);

export default router;
