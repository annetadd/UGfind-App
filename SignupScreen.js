import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  Alert,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [name, setName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!name || !studentID || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // TODO: Send data to backend here
    console.log({ name, studentID, email, password });

    Alert.alert('Success', 'Account created successfully!');
    navigation.navigate('Login');
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
          <View style={styles.card}>
            <Text style={[styles.title, { color: isDark ? '#fff' : '#111' }]}>
              Create an Account
            </Text>

            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: isDark ? '#333' : '#f0f0f0',
                  color: isDark ? '#fff' : '#000',
                },
              ]}
              placeholder="Full Name"
              placeholderTextColor={isDark ? '#888' : '#666'}
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: isDark ? '#333' : '#f0f0f0',
                  color: isDark ? '#fff' : '#000',
                },
              ]}
              placeholder="Student ID"
              placeholderTextColor={isDark ? '#888' : '#666'}
              value={studentID}
              onChangeText={setStudentID}
            />
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: isDark ? '#333' : '#f0f0f0',
                  color: isDark ? '#fff' : '#000',
                },
              ]}
              placeholder="School Email"
              placeholderTextColor={isDark ? '#888' : '#666'}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: isDark ? '#333' : '#f0f0f0',
                  color: isDark ? '#fff' : '#000',
                },
              ]}
              placeholder="Password"
              placeholderTextColor={isDark ? '#888' : '#666'}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleSignup}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={[
                  styles.link,
                  {
                    color: isDark ? '#ccc' : '#00274D',
                    fontWeight: '600',
                  },
                ]}
              >
                Already have an account? Login
              </Text>
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
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#E8E8E8',
    padding: 30,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#DAA520',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  link: {
    textAlign: 'center',
    fontSize: 14,
  },
});
