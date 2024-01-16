import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroductionScreen from './pages/introduction/IntroductionScreen';
import LoginScreen from './pages/login/LoginScreen';
import WishOrderScreen from './pages/order/WishOrderScreen';
import MidiPDAHomeScreen from './components/MidiPDAHomeScreen';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Introduction" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Introduction" component={IntroductionScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MidiPDAHome" component={MidiPDAHomeScreen} />
        <Stack.Screen name="FazerPedido" component={WishOrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
