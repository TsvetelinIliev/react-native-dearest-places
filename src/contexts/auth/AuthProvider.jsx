import { createContext, useState } from "react";
import { authService } from "../../services";
import usePersistedState from "../../hooks/usePersistedState";


export const AuthContext = createContext({
    isAutenticated: false,
    isLoading: false,
    error: null,
    user: null,
    auth: null,
    login: async (email,password) => {},
    register: async (email,password,name) => {},
    logout: () => {}
});


export function AuthProvider({ children }) {
    
    const [auth,setAuth] = usePersistedState("auth",{
        accessToken: null,
        user: null,
    });
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    


    const login = async (email,password) => {

        try {
            setIsLoading(true);

        const {user, accesToken} = await authService.login(email,password);
        
        setAuth({ user,accesToken });

        } catch (err) {
            setError(err.message || 'An error ocure during loading!')

        }finally {
            setIsLoading(false);
        }

        
    }

    const register = async (email, password, name) => {
        try {
            setIsLoading(true);
            const { user, accessToken } = await authService.register(email, password, name);
            setAuth({ user, accessToken });
        } catch (err) {
            setError(err.message || 'An error occurred during registration');
        }
        finally {
            setIsLoading(false);
        }
    }

    const contextValue = {
        isAutenticated: !! auth.user,
        user: auth.user,
        isLoading,
        error,
        auth,
        login,
        register,
        logout: () => {

            setAuth({
            accessToken: null,
            user: null,


            });

            
        },
        
        clearError: () => setError(null),
    };

    return (

        <AuthContext.Provider value={contextValue} >

             {children}

        </AuthContext.Provider>
       
    );
};