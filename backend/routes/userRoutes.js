import express from 'express';
import {
  authUsers,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/login', authUsers);
router.get('/profile', protect, getUserProfile);
router.post('/', registerUser);
router.put('/profile', protect, updateUserProfile);
export default router;
