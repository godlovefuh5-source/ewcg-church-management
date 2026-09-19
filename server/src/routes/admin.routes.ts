import { Router } from 'express';
import { 
    createAdmin,
    getAdmins,
    updateAdmin,
    deleteAdmin,
    getAdminById
} from '../controllers/admin.controller';
import { authorize } from '../middleware/authorize';

const router = Router();

// Admin routes
router.post('/', authorize('SUPER_ADMIN'), createAdmin);
router.get('/', authorize('SUPER_ADMIN'), getAdmins);
router.get('/:id', authorize('SUPER_ADMIN'), getAdminById);
router.put('/:id', authorize('SUPER_ADMIN'), updateAdmin);
router.delete('/:id', authorize('SUPER_ADMIN'), deleteAdmin);

export default router;