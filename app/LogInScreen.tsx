import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import styles from '@/styles/styles';

import { useLogIn } from '@/hooks/useLogIn';
import AuthRedirectLink from '@/components/AuthRedirectLink';

const LogInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = useLogIn();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subTitle}>Log in to continue</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => logIn(email, password)}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <AuthRedirectLink
          question="Don't have an account?"
          linkText="Create it here"
          route="/"
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LogInScreen;
