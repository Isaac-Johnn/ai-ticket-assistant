import express from 'express'
import {getUsers, login, signup, updateUser, logout} from '../controllers/user.js'
import {authenticate, requireRole} from '../middlewares/auth.js';

const router = express.Router();

// Authenticated user route
router.post('/update-user', authenticate, updateUser);
router.get('/users', authenticate, getUsers);

//Public routes
router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)

// Admin-only: fetch all users
router.get('/users', authenticate, requireRole(['admin']), getUsers);

// Admin-only: promote a user
router.post('/promote', authenticate, requireRole(['admin']), async (req, res) => {
  try {
    const { userId, newRole } = req.body;
    const validRoles = ['user', 'moderator', 'admin'];

    if (!validRoles.includes(newRole)) {
      return res.status(400).json({ error: 'Invalid role specified' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { role: newRole },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: `User promoted to ${newRole}`, user: updatedUser });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;