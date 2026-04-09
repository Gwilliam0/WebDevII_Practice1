import express from 'express';
import * as userController from '../controllers/userController.js';
import { validate } from '../middleware/validate.js';
import authMiddleware from '../middleware/session.js';
import checkRol from '../middleware/role.js';
import { validatorRegister, validatorLogin } from '../validators/validator.js';

const router = express.Router();

router.post('/register', validate(validatorRegister), userController.register);
router.post('/login', validate(validatorLogin), userController.login);
router.put('/validation', authMiddleware, userController.validateEmail);
router.put('/register', authMiddleware, userController.updateProfile);
router.patch('/company', authMiddleware, userController.updateCompany);
router.patch('/logo', authMiddleware, userController.updateLogo);
router.get('/', authMiddleware, userController.getUser);
router.post('/refresh', userController.refreshToken);
router.post('/logout', authMiddleware, userController.logout);
router.delete('/', authMiddleware, userController.deleteAccount);
router.put('/password', authMiddleware, userController.updatePassword);
router.post('/invite', authMiddleware, checkRol(['admin']), userController.sendInvite);

export default router;