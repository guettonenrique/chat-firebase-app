import { useRouter } from 'expo-router';
import { Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const useLogIn = () => {
  const router = useRouter();

  const logIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      Alert.alert('Success', `Welcome back, ${user.email}`);
      router.push('/ChatScreen');
    } catch (error: any) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };
  return { logIn };
};
