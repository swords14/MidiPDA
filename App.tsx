import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppRoutes from './src/AppRoutes'

// Configuração do React Navigation Stack
const Stack = createStackNavigator();

const App: React.FC = () => {
  return <AppRoutes />;
}

export default App;
