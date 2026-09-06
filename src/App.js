import { StatusBar } from 'expo-status-bar';
import AppNavigation from './navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/auth/AuthProvider';
import { PlaceProvider } from './contexts/places/PlaceProvider';



export default function App() {
  return (
    <NavigationContainer >
      <StatusBar style="auto" />

      <AuthProvider>
        <PlaceProvider>
           <AppNavigation />

        </PlaceProvider>

        
         

        


      </AuthProvider>

    </NavigationContainer>
  );
}
