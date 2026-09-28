import { createContext, useEffect, useState } from "react";
import { authService } from "../../services";
import { onAuthStateChanged , signOut } from 'firebase/auth';
import { auth } from '../../../src/firebaseConfig.js';


export const AuthContext = createContext({
    isAutenticated: false,
    isLoading: false,
    error: null,
    user: null,
    authState: null,
    login: async (email,password) => {},
    register: async (email,password,name) => {},
    logout: () => {}
});


export function AuthProvider({ children }) {
    
    const [authState,setAuthState] = useState({
        
        user: null,
    });
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
       
        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {

                setAuthState({
                    user: {
                        id: user.uid,
                        email: user.email,
                    }

                });
            } else {
                setAuthState({ user: null });
            }

            setIsLoading(false)

        })
        return () => unsubscribe;

    },[]);

    


    const login = async (email,password) => {

        try {
            setIsLoading(true);

        const user = await authService.login(email,password);
        
        setAuthState({

            user: {
                id: user.uid,
                email: user.email,
            }
          

         });

        } catch (err) {
            setError(err.message || 'An error ocure during loading!')

        }finally {
            setIsLoading(false);
        }

        
    }

    const register = async (email, password, name) => {
        try {
            setIsLoading(true);
            const user = await authService.register(email, password, name);
            setAuthState({

            user: {
                id: user.uid,
                email: user.email,
            }
          

         });
        } catch (err) {
            setError(err.message || 'An error occurred during registration');
        }
        finally {
            setIsLoading(false);
        }
    }

    const contextValue = {
        isAutenticated: !! authState.user,
        user: authState.user,
        isLoading,
        error,
        authState,
        login,
        register,
        logout: async () => {

            try {

                await signOut(auth);

                setAuthState({

                    user: null,

                });

            } catch (err) {
                setError(err.message || 'An error occurred during logout')

            }
           

            
        },
        
        clearError: () => setError(null),
    };

    return (

        <AuthContext.Provider value={contextValue} >

             {children}

        </AuthContext.Provider>
       
    );
};