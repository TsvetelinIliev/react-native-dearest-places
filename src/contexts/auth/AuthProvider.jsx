import { createContext, useState } from "react";
import { authService } from "../../services";

export const AuthContext = createContext();


export function AuthProvider({ children }) {
    const [user,setUser] = useState(null);
    const [auth,setAuth] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);


    const login = async (email,password) => {

        try {
            setIsLoading(true);

        const {user, accesToken} = await authService.login(email,password);
        setUser(user);
        setAuth({ accesToken });

        } catch (err) {
            setError(err.message || 'An error ocure during loading!')

        }finally {
            setIsLoading(false);
        }

        
    }

    const contextValue = {
        user,
        isLoading,
        error,
        auth,
        login: (userData) => setUser(userData),
        logout: () => setUser(null),
        clearError: () => setError(null),
    };

    return (

        <AuthContext.Provider value={contextValue} >

             {children}

        </AuthContext.Provider>
       
    );
};