import { User } from '../types/auth';
import { AuthRepository } from '../repositories/auth.repository';
import { generateToken } from '../utils/jwt';
import { hashPassword, comparePassword } from '../utils/password';

class AuthService {
    private authRepository: AuthRepository;

    constructor() {
        this.authRepository = new AuthRepository();
    }

    async register(userData: User) {
        const hashedPassword = await hashPassword(userData.password);
        const newUser = await this.authRepository.createUser({ ...userData, password: hashedPassword });
        return newUser;
    }

    async login(email: string, password: string) {
        const user = await this.authRepository.findUserByEmail(email);
        if (!user || !(await comparePassword(password, user.password))) {
            throw new Error('Invalid email or password');
        }
        const token = generateToken(user.id);
        return { user, token };
    }

    async getUserById(userId: string) {
        return await this.authRepository.findUserById(userId);
    }
}

export default new AuthService();