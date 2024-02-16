import { View, Text } from 'react-native'
import React from 'react'
import ScreenHeader from '../../components/ScreenHeader'
import Product from './Product';

export default function ProductDetail({ route, navigation }) {
  const { product } = route.params;
  return (
    <View>
      <ScreenHeader category={product?.category?.name} />
      <Product product={product} />
    </View>
  )
}