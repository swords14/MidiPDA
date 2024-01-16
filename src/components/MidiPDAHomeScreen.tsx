import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './MidiPDAHomeStyle'

interface MidiPDAHomeProps {
  navigation: any;
};

const MidiPDAHomeScreen: React.FC<MidiPDAHomeProps> = ({ navigation }) => {
  const navigateToFazerPedido = () => {
    const itemNome = 'Exemplo de Item';
    const itemDescricao = 'Descrição do Item';
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

export default MidiPDAHomeScreen;
