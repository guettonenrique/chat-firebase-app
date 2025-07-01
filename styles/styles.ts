import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'center',
  },
  subTitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
    alignSelf: 'center',
  },
  logInText: {
    fontSize: 16,
    color: '#333',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  linkText: {
    fontSize: 16,
    color: '#0A84FF',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#0A84FF',
    padding: 14,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  googleButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'gray',
    padding: 14,
    borderRadius: 20,
    marginBottom: 16,
    alignItems: 'center',
  },
  googleButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});

export default styles;
