import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/places/HomeScreen";
import { CreatePlaceScreen } from "../screens/places/CreatePlaceScreen";
import ListPlaceScreen from "../screens/places/ListPlaceScreen";


export default function PlaceNavigator() {
    const Stack = createNativeStackNavigator();
    
    
    return (
        <Stack.Navigator>
            
            <Stack.Screen name="Home" component={HomeScreen}  options={{title: 'Home'}}/>
            <Stack.Screen name="CreatePlace" component={CreatePlaceScreen} options={{title: 'Create Place'}} />
             <Stack.Screen name="ListPlaces" component={ListPlaceScreen} options={{title: 'List Places'}} />
            
        </Stack.Navigator>
    );
}
