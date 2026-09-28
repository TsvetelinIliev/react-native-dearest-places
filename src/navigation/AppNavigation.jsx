
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import PlaceNavigator from "./PlaceNavigator";
import { useAuth } from "../contexts/auth/useAuth";
import { ActivityIndicator } from "react-native";

export default function AppNavigation() {

    const Stack = createNativeStackNavigator();
    const {isAutenticated,isLoading} = useAuth();

    if (isLoading) {

        return (
            <ActivityIndicator size={"large"} style={{ flex: 1, justifyContent: "center", alignItems: "center"}} /> 
        )
    }



    return (

        

            <Stack.Navigator screenOptions={{ headerShown: false}} >

                {isAutenticated
                ? <Stack.Screen name="Places" component={PlaceNavigator} />
                : <Stack.Screen name="Auth" component={AuthNavigator} />
                }
               
                
            </Stack.Navigator>
        


    )
}