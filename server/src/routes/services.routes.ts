import { Router } from 'express';
import { 
    createService, 
    getAllServices, 
    getServiceById, 
    updateService, 
    deleteService 
} from '../controllers/services.controller';
import { validateService } from '../validators/service.validator';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

// Public routes
router.get('/', getAllServices);
router.get('/:id', getServiceById);

// Protected routes
router.use(authenticate);
router.post('/', authorize('ADMIN', 'SUPER_ADMIN'), validateService, createService);
router.put('/:id', authorize('ADMIN', 'SUPER_ADMIN'), validateService, updateService);
router.delete('/:id', authorize('ADMIN', 'SUPER_ADMIN'), deleteService);

export default router;