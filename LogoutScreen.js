import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  useColorScheme,
  ImageBackground,
} from 'react-native';

export default function LogoutScreen({ navigation, route }) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const logoutUser = () => {
    const logoutFn = route?.params?.setUserLoggedIn;
    if (typeof logoutFn === 'function') {
      logoutFn(false);
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  useEffect(() => {
    Alert.alert(
      'Logout',
      'Do you really want to logout?',
      [
        { text: 'No', style: 'cancel', onPress: () => navigation.goBack() },
        { text: 'Yes', style: 'destructive', onPress: logoutUser },
      ],
      { cancelable: false }
    );
  }, []);

  return (
    <ImageBackground
      source={require('../assets/schoolimage.png')}
      style={styles.background}
      resizeMode="cover"
      blurRadius={5}
    >
      <View style={[styles.container, { backgroundColor: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)' }]}>
        <Text style={[styles.text, { color: isDark ? '#eee' : '#111' }]}>
          Logging out...
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});
