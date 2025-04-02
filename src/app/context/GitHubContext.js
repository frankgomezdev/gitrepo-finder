'use client'

import { createContext, useContext, useState } from "react";

const GitHubContext = createContext();

export function GitHubProvider({ children }) {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    return (
        <GitHubContext.Provider value={{
            userData,
            setUserData,
            loading,
            setLoading,
            error,
            setError
        }}>
            {children}
        </GitHubContext.Provider>
    );
}

export function useGitHub() {
    const context = useContext(GitHubContext);
    if(context === undefined) {
        throw new Error('useGitHub must be used within a GitHubProvider')
    }
    return context;
}