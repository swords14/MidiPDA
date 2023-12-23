import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroductionScreen from './page/IntroductionScreen';
import LoginScreen from './page/LoginScreen';
import WishScreen from './page/WishScreen';
import AppStyles, { styles } from './layout/AppStyles'


// Tela Inicial
const MidiPDAHomeComponent = ({ navigation }) => {
  // Função para navegar para a tela de fazer pedido
  const navigateToFazerPedido = () => {
    // Exemplo de informações passadas como parâmetros
    const itemNome = 'Exemplo de Item';
    const itemDescricao = 'Descrição do Item';

    // Navegar para a tela de fazer pedido com informações
    navigation.navigate('FazerPedido', { itemNome, itemDescricao });
  };

  return (
    <View style={AppStyles.container}>
      <Image
        source={{ uri: 'https://i.imgur.com/N7Tbx3m.png' }}
        style={AppStyles.logo}
        resizeMode="contain"
      />
      <Text style={AppStyles.title}>Midi PDA</Text>
      <Text style={AppStyles.subtitle}>Seu parceiro de vendas</Text>

      <TouchableOpacity
        style={AppStyles.button}
        onPress={navigateToFazerPedido}
      >
        <Text style={AppStyles.buttonText}>Fazer Pedido</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={AppStyles.button}
        onPress={() => navigation.navigate('HistoricoPedidos')}
      >
        <Text style={AppStyles.buttonText}>Histórico de Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={AppStyles.button}
        onPress={() => navigation.navigate('Configuracoes')}
      >
        <Text style={AppStyles.buttonText}>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
};

// Configuração do React Navigation Stack
const Stack = createStackNavigator();

// Componente principal
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Introduction" headerMode="none">
        <Stack.Screen name="Introduction" component={IntroductionScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MidiPDAHome" component={MidiPDAHomeComponent} />
        <Stack.Screen name="FazerPedido" component={WishScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
