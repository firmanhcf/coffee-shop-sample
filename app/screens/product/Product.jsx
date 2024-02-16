import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../utils/Colors'
import Svg, { Path } from 'react-native-svg'
import Api from '../../utils/Api'

const {width} = Dimensions.get('window')

export default function Product({product, navigation}) {
  const [ item, setItem ] = useState()
  const [ size, setSize ] = useState()

  const getProductDetail = (productId)=>{
        Api.getProductDetail(productId).then(resp=>{
            setItem(resp?.product)
        })
  }

  useEffect(()=>{
    setSize('M')
  },[])

  useEffect(()=>{
    getProductDetail(product?.id)
  },[item])

  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={{uri: product?.photo?.url}} />
      <View style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', paddingBottom: 20, borderBottomColor: Colors.GRAYNITE, borderBottomWidth: 1, marginBottom: 15}}>
        <View>
            <Text style={styles.title}>{product?.category?.name}</Text>
            <Text style={styles.subtitle}>with {product?.name}</Text>
            <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                <Svg style width="25" height="25" viewBox="0 -3 13 14" fill={Colors.YELLOW}>
                    <Path d="M5.72083 1.96251L6.45416 3.42917C6.55416 3.63334 6.82083 3.82917 7.04583 3.86667L8.37499 4.08751C9.22499 4.22917 9.42499 4.84584 8.81249 5.45417L7.77916 6.48751C7.60416 6.66251 7.50833 7.00001 7.56249 7.24167L7.85833 8.52084C8.09166 9.53334 7.55416 9.92501 6.65833 9.39584L5.41249 8.65834C5.18749 8.52501 4.81666 8.52501 4.58749 8.65834L3.34166 9.39584C2.44999 9.92501 1.90833 9.52917 2.14166 8.52084L2.43749 7.24167C2.49166 7.00001 2.39583 6.66251 2.22083 6.48751L1.18749 5.45417C0.579159 4.84584 0.774993 4.22917 1.62499 4.08751L2.95416 3.86667C3.17499 3.82917 3.44166 3.63334 3.54166 3.42917L4.27499 1.96251C4.67499 1.16667 5.32499 1.16667 5.72083 1.96251Z" fill={Colors.YELLOW}/>
                </Svg>
                <Text style={{fontFamily: 'soraSemiBold', fontSize: 16, marginTop: 2}}>{product.rating}</Text>
                <Text style={{fontFamily: 'sora', fontSize: 12, marginTop: 6, marginLeft: 3, color: Colors.GRAY}}>({item?.totalOrder})</Text>
            </View>
        </View>

        <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity style={styles.toggle}>
              <Image source={require('../../../assets/images/bean.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toggle}>
              <Image source={require('../../../assets/images/milk.png')}></Image>
            </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.heading}>Description</Text>
        <Text style={styles.description}>{item?.description}</Text>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={styles.heading}>Size</Text>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginTop: 10}}>
          <View style={{width: '31%'}}>
              <TouchableOpacity style={(size=='S')?styles.buttonActive:styles.button} onPress={()=>{setSize('S')}}>
                  <Text style={(size=='S')?styles.buttonTextActive:styles.buttonText}>S</Text>
              </TouchableOpacity>
          </View>
          <View style={{width: '31%'}}>
              <TouchableOpacity style={(size=='M')?styles.buttonActive:styles.button} onPress={()=>{setSize('M')}}>
                  <Text style={(size=='M')?styles.buttonTextActive:styles.buttonText}>M</Text>
              </TouchableOpacity>
          </View>
          <View style={{width: '31%'}}>
              <TouchableOpacity style={(size=='L')?styles.buttonActive:styles.button} onPress={()=>{setSize('L')}}>
                  <Text style={(size=='L')?styles.buttonTextActive:styles.buttonText}>L</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceText}>$ {product?.price}</Text>
        </View>
        <TouchableOpacity 
          style={styles.orderButton}
          onPress={() =>
              navigation.navigate('CheckoutPage', {product: item})
          }
          >
          <Text style={styles.orderButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 30,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: Colors.WHITE,
        height: width*2
    },
    photo: {
        height: 225,
        borderRadius: 15
    },
    title:{
        fontFamily: 'soraSemiBold',
        fontSize: 22,
        marginTop: 15
    },
    subtitle:{
        fontFamily: 'sora',
        fontSize: 14,
        color: Colors.GRAY
    },
    heading:{
        fontFamily: 'soraSemiBold',
        fontSize: 18
    },
    description:{
        fontFamily: 'sora',
        fontSize: 15,
        color: Colors.GRAY,
        textAlign: 'justify',
        lineHeight: 20,
        marginTop: 10
    },
    button:{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderColor: Colors.GRAYNITE,
      borderWidth: 1,
      borderRadius: 15
    },
    buttonText:{
      fontFamily: 'sora',
      fontSize: 15
    },
    buttonActive:{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderColor: Colors.PRIMARY,
      borderWidth: 1,
      borderRadius: 15,
      backgroundColor: Colors.PRIMARYOPAC
    },
    buttonTextActive:{
      fontFamily: 'sora',
      fontSize: 15,
      color: Colors.PRIMARY
    },
    toggle:{
      width: 45,
      height: 45,
      borderRadius: 15,
      backgroundColor: Colors.LIGHTGRAY,
      marginTop: 60,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10
    },
    bottomContainer:{
      position: 'absolute',
      height: 100,
      left: 0, 
      top: (width*2) - 120, 
      paddingHorizontal: 30,
      paddingTop: 15,
      backgroundColor: Colors.WHITE,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      width: width,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      elevation: 20,
      shadowColor: Colors.BLACK,
    },
    priceLabel:{
      fontFamily: 'sora',
      fontSize: 15,
      color: Colors.GRAY
    },
    priceText:{
      fontFamily: 'soraSemiBold',
      fontSize: 19,
      color: Colors.PRIMARY
    },
    orderButton:{
      width: (width*0.75)-60,
      height: 50,
      backgroundColor: Colors.PRIMARY,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15
    },
    orderButtonText:{
      color: Colors.WHITE,
      fontFamily: 'soraSemiBold',
      fontSize: 17
    }
})