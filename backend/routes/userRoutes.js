import express from 'express';
import {
  authUsers,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
} from '../controllers/userController.js';
import { admin, protect } from '../middleware/authMiddleware.js';
const router = express.Router();

// router.post('/login', authUsers);
// router.get('/profile', protect, getUserProfile);
// router.post('/', registerUser).get(protect, getUsers);
// router.put('/profile', protect, updateUserProfile);
router.route('/').post(registerUser).get(protect, admin, getUsers);

router.post('/login', authUsers);

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route('/:id').delete(protect, admin, deleteUser);

export default router;
