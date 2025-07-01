import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Slot } from 'expo-router';

StatusBar.setBarStyle('dark-content', true);

const RootLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Slot />
    </SafeAreaView>
  );
};

export default RootLayout;
