import { Alert } from 'react-native';

import { useRouter } from 'expo-router';

import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const useSignOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      Alert.alert('Signed out successfully');
      router.push('/LogInScreen');
    } catch (error: any) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };
  return { handleSignOut };
};
