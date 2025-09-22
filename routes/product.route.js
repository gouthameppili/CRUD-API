
import express from 'express';
const router = express.Router();
import { createUser, showUsers, showUserById, updateUser, deleteUser } from '../controllers/product.controller.js';


router.post('/', createUser);


router.get('/', showUsers);


router.get('/:id', showUserById);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;