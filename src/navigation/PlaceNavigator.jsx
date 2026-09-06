import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/places/HomeScreen";


export default function PlaceNavigator() {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator>
            
            <Stack.Screen name="Home" component={HomeScreen}  options={{title: 'Home'}}/>
            
        </Stack.Navigator>
    );
}
