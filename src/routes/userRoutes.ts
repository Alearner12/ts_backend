import { Router } from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/userController';

const router = Router();

/**
 * User Routes
 * Base path: /api/users
 * 
 * NOTE: For production use, these routes should include:
 * - Rate limiting middleware to prevent abuse
 * - Authentication middleware for protected routes
 * - Input validation middleware
 */

// GET all users
router.get('/', getAllUsers);

// GET user by ID
router.get('/:id', getUserById);

// POST create new user
router.post('/', createUser);

// PUT update user
router.put('/:id', updateUser);

// DELETE user
router.delete('/:id', deleteUser);

export default router;
