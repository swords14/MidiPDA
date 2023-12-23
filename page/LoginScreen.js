// LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import LoginScreenStyles, {styles} from '../layout/LoginScreenStyles'

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Adicione a lógica de autenticação aqui
    // Por exemplo, verificar usuário/senha

    // Se a autenticação for bem-sucedida, navegue para a tela inicial (Home)
    navigation.navigate('MidiPDAHome');
  };

  return (
    <View style={LoginScreenStyles.container}>
      <View style={LoginScreenStyles.logoContainer}>
        <Image
          source={{ uri: 'https://i.imgur.com/E74FID9.png' }}
          style={LoginScreenStyles.logo}
          resizeMode="contain"
        />
        <Text style={LoginScreenStyles.appName}>Midi PDA</Text>
      </View>
      <View style={LoginScreenStyles.formContainer}>
        <Text style={LoginScreenStyles.title}>Login</Text>
        <TextInput
          style={LoginScreenStyles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={LoginScreenStyles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={LoginScreenStyles.button} onPress={handleLogin}>
          <Text style={LoginScreenStyles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
