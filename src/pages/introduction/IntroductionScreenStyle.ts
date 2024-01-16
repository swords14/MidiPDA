import { StyleSheet } from 'react-native'

const IntroductionScreenStyles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  image: {
    width: '80%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  skipButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  skipButtonText: {
    fontSize: 16,
    color: '#3498db',
    fontWeight: 'bold',
  },
  proceedButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  proceedButtonText: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: 'bold',
  },
});

export default IntroductionScreenStyles;
