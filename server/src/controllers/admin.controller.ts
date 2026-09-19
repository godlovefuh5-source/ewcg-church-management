import { Request, Response } from 'express';
import adminService from '../services/admin.service';

export const createAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
        const adminData = req.body;
        const admin = await adminService.createAdmin(adminData);
        res.status(201).json({
            success: true,
            message: 'Admin created successfully',
            data: admin,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Unable to create admin',
            errors: [error.message],
        });
    }
};

export const getAdmins = async (req: Request, res: Response): Promise<void> => {
    try {
        const admins = await adminService.getAllAdmins();
        res.status(200).json({
            success: true,
            data: admins,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Unable to retrieve admins',
            errors: [error.message],
        });
    }
};

export const getAdminById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const admin = await adminService.getAdminById(id);
        if (!admin) {
            res.status(404).json({
                success: false,
                message: 'Admin not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: admin,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Unable to retrieve admin',
            errors: [error.message],
        });
    }
};

export const updateAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const adminData = req.body;
        const admin = await adminService.updateAdmin(id, adminData);
        res.status(200).json({
            success: true,
            message: 'Admin updated successfully',
            data: admin,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Unable to update admin',
            errors: [error.message],
        });
    }
};

export const deleteAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        await adminService.deleteAdmin(id);
        res.status(200).json({
            success: true,
            message: 'Admin deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Unable to delete admin',
            errors: [error.message],
        });
    }
};
