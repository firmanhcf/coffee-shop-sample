import React from 'react'
import { View, StyleSheet} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo"
import AppStyle from './app/utils/AppStyle'
import Login from './app/screens/login/Login'
import * as SecureStore from "expo-secure-store"
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './app/components/TabNavigator'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ProductDetail from './app/screens/product/ProductDetail'

const Stack = createNativeStackNavigator()
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },

};

export default function App() {
  const [fontsLoaded] = useFonts({
    'sora': require('./assets/fonts/Sora-Regular.ttf'),
    'soraBold': require('./assets/fonts/Sora-Bold.ttf'),
    'soraSemiBold': require('./assets/fonts/Sora-SemiBold.ttf'),
  });

  if(!fontsLoaded){
    return null
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={'pk_test_dmFzdC1idWctMTkuY2xlcmsuYWNjb3VudHMuZGV2JA'}>
      <SignedIn>
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Homepage" component={TabNavigator} options={{headerShown: false}}/>
                <Stack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown: false}} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </SignedIn>
      <SignedOut>
        <View style={AppStyle.container}>
            <Login />
            <StatusBar style="light" />
        </View>
      </SignedOut>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
});