import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import Verification from './src/screens/Verification';
import CreatePassword from './src/screens/CreatePassword';
import Home from './src/screens/Home';

export default function App() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>

      <StatusBar
        barStyle="dark-content"
        translucent
      // backgroundColor="black"
      />
      <Navigator
        // headerMode="none"
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}
      >
        <Screen name="Login" component={Login} />
        <Screen name="Verification" component={Verification} />
        <Screen name="CreatePassword" component={CreatePassword} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
