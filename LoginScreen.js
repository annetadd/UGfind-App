import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  ImageBackground,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen({ setUserLoggedIn }) {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() && password.trim()) {
      setUserLoggedIn(true);
    } else {
      Alert.alert('Error', 'Please enter both email and password');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/schoolimage.png')}
      style={styles.background}
      resizeMode="cover"
      blurRadius={3}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.brand}>
            <Text style={styles.brandUG}>UG</Text>
            <Text style={styles.brandFind}>find 🔍</Text>
          </Text>

          <Text style={[styles.subtitle, { color: isDark ? '#aaa' : '#444' }]}>
            Helping students find their lost items quickly on campus.
          </Text>

          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: isDark ? '#333' : '#eee',
                color: isDark ? '#fff' : '#000',
              },
            ]}
            placeholder="School Email"
            placeholderTextColor={isDark ? '#aaa' : '#666'}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: isDark ? '#333' : '#eee',
                color: isDark ? '#fff' : '#000',
              },
            ]}
            placeholder="Password"
            placeholderTextColor={isDark ? '#aaa' : '#666'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={{ color: isDark ? '#ccc' : '#333' }}>
              Don’t have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={{ color: '#00274D', fontWeight: '600' }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)', 
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: '#D7D7D7',
    padding: 25,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  brand: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  brandUG: {
    color: '#00274D',
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
  },
  brandFind: {
    color: '#DAA520',
    fontWeight: 'normal',
    fontFamily: 'Times New Roman',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  input: {
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#DAA520',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});
