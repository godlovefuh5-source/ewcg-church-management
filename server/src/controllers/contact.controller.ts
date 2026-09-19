import { Request, Response } from 'express';
import { ContactService } from '../services/contact.service';

export class ContactController {
    private contactService: ContactService;

    constructor() {
        this.contactService = new ContactService();
    }

    public async submitContactForm(req: Request, res: Response): Promise<Response> {
        try {
            const { name, email, phone, subject, message } = req.body;
            const contactMessage = await this.contactService.createContactMessage({ name, email, phone, subject, message });
            return res.status(201).json({
                success: true,
                message: 'Contact message submitted successfully',
                data: contactMessage,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Unable to submit contact message',
                errors: [error.message],
            });
        }
    }

    public async getContactMessages(req: Request, res: Response): Promise<Response> {
        try {
            const messages = await this.contactService.getAllContactMessages();
            return res.status(200).json({
                success: true,
                data: messages,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Unable to retrieve contact messages',
                errors: [error.message],
            });
        }
    }
}