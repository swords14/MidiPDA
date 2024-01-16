import { StyleSheet } from 'react-native'

const MidiPDAHomeStyle = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'white',
  },
  logo: {
    width: '80%',
    height: 80,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 8,
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MidiPDAHomeStyle
