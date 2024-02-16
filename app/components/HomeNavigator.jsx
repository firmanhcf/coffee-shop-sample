import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Homepage from '../screens/home/Homepage'
import ProductDetail from '../screens/product/ProductDetail'


const Stack = createNativeStackNavigator()

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Homepage" component={Homepage} options={{headerShown: false}}/>
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}