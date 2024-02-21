import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ScreenHeader from '../../components/ScreenHeader'
import CheckoutDetail from './CheckoutDetail';

export default function CheckoutPage({ route, navigation }) {
  const { product } = route.params;
  return (
    <View>
      <ScreenHeader navigation={navigation} category={'Order'} />
      <CheckoutDetail product={product} navigation={navigation} />
    </View>
  )
}