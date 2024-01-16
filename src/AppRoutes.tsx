import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import IntroductionScreen from './page/IntroductionScreen';
import LoginScreen from './pages/login/LoginScreen';
//import FazerPedidoScreen from './page/FazerPedidoScreen';
import MidiPDAHomeScreen from './components/MidiPDAHomeScreen';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Introduction" headerMode="none">
        <Stack.Screen name="Introduction" component={IntroductionScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MidiPDAHome" component={MidiPDAHomeScreen} />
        <Stack.Screen name="FazerPedido" component={FazerPedidoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
