import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../services/auth';
import { useAuth } from '../../hooks/useAuth';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import ErrorMessage from '../../components/common/ErrorMessage';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setAuth } = useAuth();
    const history = useHistory();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const user = await login(email, password);
            setAuth(user);
            history.push('/');
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-deep-navy">Login</h2>
                {error && <ErrorMessage message={error} />}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button type="submit" className="w-full bg-gold text-white">
                        Login
                    </Button>
                </form>
                <p className="text-center">
                    Don't have an account? <a href="/register" className="text-gold">Register</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;