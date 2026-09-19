import { Request, Response } from 'express';
import { Service } from '../services/service.service';
import { Service as ServiceModel } from '../types/api';

const serviceService = new Service();

// Get all services
export const getAllServices = async (req: Request, res: Response) => {
    try {
        const services: ServiceModel[] = await serviceService.getAll();
        res.status(200).json({ success: true, data: services });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Unable to retrieve services', errors: [error.message] });
    }
};

// Get a single service by ID
export const getServiceById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const service: ServiceModel | null = await serviceService.getById(id);
        if (!service) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }
        res.status(200).json({ success: true, data: service });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Unable to retrieve service', errors: [error.message] });
    }
};

// Create a new service
export const createService = async (req: Request, res: Response) => {
    const newService = req.body;
    try {
        const createdService: ServiceModel = await serviceService.create(newService);
        res.status(201).json({ success: true, data: createdService });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Unable to create service', errors: [error.message] });
    }
};

// Update an existing service
export const updateService = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedService = req.body;
    try {
        const service: ServiceModel | null = await serviceService.update(id, updatedService);
        if (!service) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }
        res.status(200).json({ success: true, data: service });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Unable to update service', errors: [error.message] });
    }
};

// Delete a service
export const deleteService = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedService: ServiceModel | null = await serviceService.delete(id);
        if (!deletedService) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }
        res.status(200).json({ success: true, message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Unable to delete service', errors: [error.message] });
    }
};