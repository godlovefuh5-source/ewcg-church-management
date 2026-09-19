import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../services/auth';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import ErrorMessage from '../../components/common/ErrorMessage';

const AdminLoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const history = useHistory();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            await login(email, password);
            history.push('/admin/dashboard');
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
                {error && <ErrorMessage message={error} />}
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
                <Button type="submit" className="w-full mt-4">Login</Button>
            </form>
        </div>
    );
};

export default AdminLoginPage;