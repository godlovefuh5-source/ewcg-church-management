import React, { useEffect, useState } from 'react';
import { User } from '../../../types';
import { fetchUsers, deleteUser } from '../../../services/api';
import UserCard from '../../../components/common/Card';
import LoadingSpinner from '../../../components/common/LoadingSpinner';
import ErrorMessage from '../../../components/common/ErrorMessage';

const UsersModule: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const fetchedUsers = await fetchUsers();
                setUsers(fetchedUsers);
            } catch (err) {
                setError('Failed to load users.');
            } finally {
                setLoading(false);
            }
        };

        loadUsers();
    }, []);

    const handleDeleteUser = async (userId: string) => {
        try {
            await deleteUser(userId);
            setUsers(users.filter(user => user.id !== userId));
        } catch (err) {
            setError('Failed to delete user.');
        }
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <div className="users-module">
            <h2 className="text-2xl font-bold mb-4">User Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map(user => (
                    <UserCard key={user.id} user={user} onDelete={handleDeleteUser} />
                ))}
            </div>
        </div>
    );
};

export default UsersModule;