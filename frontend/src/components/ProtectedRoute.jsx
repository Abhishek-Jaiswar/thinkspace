import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const ProtectedRoute = ({ children }) => {
    const { user, loading, isAuthenticated} = useContext(AuthContext)

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }
    if (!isAuthenticated || !user) {
        return <Navigate to={'/login'} replace />
    }
    return children
}

export default ProtectedRoute