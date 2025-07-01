import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter, LinkProps } from 'expo-router';
import styles from '@/styles/styles';

interface Props {
  question: string;
  linkText: string;
  route: LinkProps['href'];
}

const AuthRedirectLink = ({ question, linkText, route }: Props) => {
  const router = useRouter();
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Text style={styles.logInText}>{question} </Text>
      <TouchableOpacity onPress={() => router.push(route)}>
        <Text style={styles.linkText}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthRedirectLink;
