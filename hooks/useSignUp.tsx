import { useRouter } from 'expo-router';
import { Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const useSignUp = () => {
  const router = useRouter();

  const signUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      Alert.alert('Success', `Welcome, ${user.email}`);
      router.push('/ChatScreen');
    } catch (error: any) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };
  return { signUp };
};
