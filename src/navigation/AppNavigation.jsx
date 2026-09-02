
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../screens/auth/LoginScreen";

export default function AppNavigation() {

    const Stack = createNativeStackNavigator();
    return (

        

            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        


    )
}