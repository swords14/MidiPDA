import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import styles from './IntroductionScreenStyle'

const IntroductionScreen: React.FC = () => {
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean>(false);
  const navigation = useNavigation();

  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('hasSeenOnboarding');
      if (value !== null) {
        setHasSeenOnboarding(true);
      }
    } catch (error) {
      console.error('Erro ao verificar status do onboarding:', error);
    }
  };

  const markOnboardingAsSeen = async () => {
    try {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      setHasSeenOnboarding(true);
    } catch (error) {
      console.error('Erro ao marcar onboarding como visto:', error);
    }
  };

  const skipIntroduction = () => {
    markOnboardingAsSeen();
    navigation.navigate('Login');
  };

  const proceedToMidiPDA = () => {
    markOnboardingAsSeen();
    navigation.navigate('MidiPDAHome');
  };

  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      loop={false}
      onIndexChanged={(index) => {
        if (index === 2) {
          proceedToMidiPDA();
        }
      }}
    >
      {/* Primeira Tela */}
      <View style={[styles.slide, { backgroundColor: '#3498db' }]}>
        <Image
          source={{ uri: 'https://i.imgur.com/E74FID9.png' }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Bem-vindo ao MidiPDA!</Text>
        <Text style={styles.subtitle}>Sua solução de vendas moderna e eficiente.</Text>
        <TouchableOpacity style={styles.skipButton} onPress={skipIntroduction}>
          <Text style={styles.skipButtonText}>Pular</Text>
        </TouchableOpacity>
      </View>

      {/* Segunda Tela */}
      <View style={[styles.slide, { backgroundColor: '#2ecc71' }]}>
        <Image
          source={{ uri: 'https://i.imgur.com/E74FID9.png' }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Descubra Recursos Incríveis</Text>
        <Text style={styles.subtitle}>Explore todas as funcionalidades que facilitarão suas vendas.</Text>
      </View>

      {/* Terceira Tela */}
      <View style={[styles.slide, { backgroundColor: '#e74c3c' }]}>
        <Image
          source={{ uri: 'https://i.imgur.com/E74FID9.png' }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Faça Seu Login e Aproveite!</Text>
        <TouchableOpacity style={styles.proceedButton} onPress={proceedToMidiPDA}>
          <Text style={styles.proceedButtonText}>Seguir para MidiPDA</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

export default IntroductionScreen;
