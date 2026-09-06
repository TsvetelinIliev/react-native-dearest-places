
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import PlaceNavigator from "./PlaceNavigator";
import { useAuth } from "../contexts/auth/useAuth";

export default function AppNavigation() {

    const Stack = createNativeStackNavigator();
    const {isAutenticated} = useAuth();
    return (

        

            <Stack.Navigator screenOptions={{ headerShown: false}} >

                {isAutenticated
                ? <Stack.Screen name="Places" component={PlaceNavigator} />
                : <Stack.Screen name="Auth" component={AuthNavigator} />
                }
               
                
            </Stack.Navigator>
        


    )
}