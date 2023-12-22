import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import FazerPedidoScreen from './FazerPedidoScreen';

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
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.imgur.com/N7Tbx3m.png' }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Midi PDA</Text>
      <Text style={styles.subtitle}>Seu parceiro de vendas</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={navigateToFazerPedido}
      >
        <Text style={styles.buttonText}>Fazer Pedido</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HistoricoPedidos')}
      >
        <Text style={styles.buttonText}>Histórico de Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Configuracoes')}
      >
        <Text style={styles.buttonText}>Configurações</Text>
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
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={MidiPDAHomeComponent} />
        <Stack.Screen name="FazerPedido" component={FazerPedidoScreen} />
        {/* Adicione outras telas aqui, se necessário */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: '80%',
    height: 80,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 15,
    width: '80%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
