// IntroductionScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import IntroductionScreenStyles, {styles} from '../layout/IntroductionScreenStyles'

const IntroductionScreen = () => {
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);
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
    navigation.navigate('Login');
  };

  return (
    <Swiper
      style={IntroductionScreenStyles.wrapper}
      showsButtons={false}
      loop={false}
      onIndexChanged={(index) => {
        if (index === 2) {
          proceedToMidiPDA();
        }
      }}
    >
      {/* Primeira Tela */}
      <View style={[IntroductionScreenStyles.slide, { backgroundColor: '#3498db' }]}>
        <Image
          source={{ uri: 'https://i.imgur.com/E74FID9.png' }}
          style={IntroductionScreenStyles.image}
          resizeMode="contain"
        />
        <Text style={IntroductionScreenStyles.title}>Bem-vindo ao MidiPDA!</Text>
        <Text style={IntroductionScreenStyles.subtitle}>Sua solução de vendas moderna e eficiente.</Text>
        <TouchableOpacity style={IntroductionScreenStyles.skipButton} onPress={skipIntroduction}>
          <Text style={IntroductionScreenStyles.skipButtonText}>Pular</Text>
        </TouchableOpacity>
      </View>

      {/* Segunda Tela */}
      <View style={[IntroductionScreenStyles.slide, { backgroundColor: '#2ecc71' }]}>
        <Image
          source={{ uri: 'https://i.imgur.com/E74FID9.png' }}
          style={IntroductionScreenStyles.image}
          resizeMode="contain"
        />
        <Text style={IntroductionScreenStyles.title}>Descubra Recursos Incríveis</Text>
        <Text style={IntroductionScreenStyles.subtitle}>Explore todas as funcionalidades que facilitarão suas vendas.</Text>
      </View>

      {/* Terceira Tela */}
      <View style={[IntroductionScreenStyles.slide, { backgroundColor: '#e74c3c' }]}>
        <Image
          source={{ uri: 'https://i.imgur.com/E74FID9.png' }}
          style={IntroductionScreenStyles.image}
          resizeMode="contain"
        />
        <Text style={IntroductionScreenStyles.title}>Faça Seu Login e Aproveite!</Text>
        <TouchableOpacity style={IntroductionScreenStyles.proceedButton} onPress={proceedToMidiPDA}>
          <Text style={IntroductionScreenStyles.proceedButtonText}>Seguir para MidiPDA</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

export default IntroductionScreen;
