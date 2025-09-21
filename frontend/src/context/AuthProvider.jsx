import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const isAuthenticated = user?.id || false

    return (
        <AuthContext.Provider value={{ user, setUser, loading, isAuthenticated, setLoading }}>
            {children}
        </AuthContext.Provider>
    );
};