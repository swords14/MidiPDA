// App.tsx

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
//import IntroductionScreen from './page/IntroductionScreen';
//import FazerPedidoScreen from './page/FazerPedidoScreen';
import AppRoutes from './AppRoutes'

// Importando o arquivo CSS externo
import './components/layout/App.css';

// Tela Inicial
interface MidiPDAHomeProps {
  navigation: any; // Você pode ajustar o tipo de 'navigation' conforme necessário
}

const MidiPDAHomeComponent: React.FC<MidiPDAHomeProps> = ({ navigation }) => {
  // Função para navegar para a tela de fazer pedido
  const navigateToFazerPedido = () => {
    // Exemplo de informações passadas como parâmetros
    const itemNome = 'Exemplo de Item';
    const itemDescricao = 'Descrição do Item';

    // Navegar para a tela de fazer pedido com informações
    navigation.navigate('FazerPedido', { itemNome, itemDescricao });
  };

  return (
    <View className="container p-5 bg-white">
      <Image
        source={{ uri: 'https://i.imgur.com/N7Tbx3m.png' }}
        style={{ width: '80%', height: 80, alignSelf: 'center', marginBottom: 20 }}
        resizeMode="contain"
      />
      <Text className="text-2xl font-bold mb-2">Midi PDA</Text>
      <Text className="text-base text-gray-500 mb-5">Seu parceiro de vendas</Text>

      <TouchableOpacity
        style="bg-blue-500 p-5 rounded-lg mb-5"
        onPress={navigateToFazerPedido}
      >
        <Text className="text-white text-base text-center">Fazer Pedido</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style="bg-blue-500 p-5 rounded-lg mb-5"
        onPress={() => navigation.navigate('HistoricoPedidos')}
      >
        <Text className="text-white text-base text-center">Histórico de Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style="bg-blue-500 p-5 rounded-lg"
        onPress={() => navigation.navigate('Configuracoes')}
      >
        <Text className="text-white text-base text-center">Configurações</Text>
      </TouchableOpacity>
    </View>
  );
};

// Configuração do React Navigation Stack
const Stack = createStackNavigator();

const App: React.FC = () => {
  return <AppRoutes />;
}

export default App;
