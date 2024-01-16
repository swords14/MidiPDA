// App.tsx

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
//import IntroductionScreen from './page/IntroductionScreen';
//import FazerPedidoScreen from './page/FazerPedidoScreen';
import AppRoutes from './AppRoutes'

// Importando o arquivo CSS externo
import './components/layout/App.css';

// Configuração do React Navigation Stack
const Stack = createStackNavigator();

const App: React.FC = () => {
  return <AppRoutes />;
}

export default App;
