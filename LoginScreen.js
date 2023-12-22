// LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Adicione a lógica de autenticação aqui
    // Por exemplo, verificar usuário/senha

    // Se a autenticação for bem-sucedida, navegue para a tela inicial (Home)
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://i.imgur.com/E74FID9.png' }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>Midi PDA</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

    
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFFFFF', // Certifique-se de que esta linha está presente
        },
        logoContainer: {
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -150,
        },
        logo: {
          width: 320,
          height: 220,
        },
        appName: {
          fontSize: 24,
          fontWeight: 'bold',
          color: '#fff', // Cor do texto preservada
          marginTop: 10,
        },
        formContainer: {
          width: '80%',
          backgroundColor: '#fff', // Cor de fundo preservada
          padding: 20,
          borderRadius: 10,
          elevation: 5, // Sombra para efeito tridimensional (Android)
          alignItems: 'center', // Centralizar o conteúdo
          marginTop: -100, // Ajuste para centralizar o formulário sem mudar a altura
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
          color: '#3498db', // Cor do título preservada
        },
        input: {
          height: 40,
          borderColor: '#3498db', // Cor da borda preservada
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
          borderRadius: 15,
          width: '100%', // Ocupar a largura total do container
        },
        button: {
          backgroundColor: '#3498db',
          padding: 15,
          borderRadius: 15,
          marginTop: 10,
          width: '100%', // Ocupar a largura total do container
          alignItems: 'center',
        },
        buttonText: {
          color: '#fff',
          fontSize: 16,
          textAlign: 'center',
        },
      });

export default LoginScreen;
