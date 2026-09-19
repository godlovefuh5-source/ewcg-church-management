import { prisma } from '../prisma';

export class AuthRepository {
    async findUserByEmail(email: string) {
        return await prisma.user.findUnique({
            where: { email },
        });
    }

    async createUser(data: { email: string; password: string; role: string }) {
        return await prisma.user.create({
            data,
        });
    }

    async updateUser(id: string, data: Partial<{ email: string; password: string; role: string }>) {
        return await prisma.user.update({
            where: { id },
            data,
        });
    }

    async deleteUser(id: string) {
        return await prisma.user.delete({
            where: { id },
        });
    }
}