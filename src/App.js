import { StatusBar } from 'expo-status-bar';
import AppNavigation from './navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
import 'dotenv/config';

export default function App() {
  return (
    <NavigationContainer >
      <StatusBar style="auto" />
      <AppNavigation />
    </NavigationContainer>
  );
}
