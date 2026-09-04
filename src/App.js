import { StatusBar } from 'expo-status-bar';
import AppNavigation from './navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/auth/AuthProvider';


export default function App() {
  return (
    <NavigationContainer >
      <StatusBar style="auto" />
      <AuthProvider>
        <AppNavigation />

      </AuthProvider>

    </NavigationContainer>
  );
}
