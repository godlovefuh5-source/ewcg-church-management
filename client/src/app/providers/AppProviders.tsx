import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import { AppContextProvider } from '../context/AppContext';

const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <AuthProvider>
            <AppContextProvider>
                {children}
            </AppContextProvider>
        </AuthProvider>
    );
};

export default AppProviders;