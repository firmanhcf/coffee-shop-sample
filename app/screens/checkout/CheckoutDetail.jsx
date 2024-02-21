import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Feather, Octicons } from '@expo/vector-icons'
import Colors from '../../utils/Colors'
import Svg, { Path } from 'react-native-svg'
import { Entypo } from '@expo/vector-icons'

const {width} = Dimensions.get('window')

export default function CheckoutDetail({product, navigation}) {
    const [ deliver, setDeliver ] = useState(true)
    const [ qty, setQty ] = useState(1)
    return (
        <View style={styles.container}>
            <View style={styles.deliveryContainer}>
                <TouchableOpacity style={(deliver)?styles.deliveryToggleActive:styles.deliveryToggle} onPress={()=>{setDeliver(true)}}>
                    <Text style={(deliver)?styles.deliveryToggleTextActive:styles.deliveryToggleText}>Deliver</Text>
                </TouchableOpacity>
                <TouchableOpacity style={(!deliver)?styles.deliveryToggleActive:styles.deliveryToggle} onPress={()=>{setDeliver(false)}}>
                    <Text style={(!deliver)?styles.deliveryToggleTextActive:styles.deliveryToggleText}>Pick Up</Text>
                </TouchableOpacity>
            </View>

            {(deliver)?
            <View style={styles.addressContainer}>
                <Text style={styles.heading}>Delivery Address</Text>
                <Text style={styles.street}>Jl. Nusa Dua, No. 145</Text>
                <Text style={styles.streetDetail}>Kecamatan Kampung Baru, Palmerah, 63111</Text>

                <View style={{display: 'flex', flexDirection: 'row', marginTop: 15}}>
                    <TouchableOpacity style={styles.addressButton}>
                        <Text style={styles.addressButtonText}><Feather name="edit" size={15} color="black" /> Edit Address</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addressButton}>
                        <Text style={styles.addressButtonText}><Octicons name="note" size={15} color="black" /> Add Note</Text>
                    </TouchableOpacity>
                </View>
            </View>:''}

            <View style={styles.cartContainer}>
                <Image style={styles.itemThumbnail} source={{uri:product?.photo?.url}}></Image>
                <View style={styles.itemContainer}>
                    <Text style={styles.heading}>{product?.category?.name}</Text>
                    <Text style={styles.streetDetail}>{product?.name}</Text>
                </View>
                <View style={{width: ((width-130)/3)+10, display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.roundButton} onPress={()=>{
                        if(qty > 0){
                            setQty(qty-1)
                        }
                    }}>
                        <Text style={{fontFamily: 'soraSemiBold', fontSize: 20, textAlign:'center', marginTop: -5}}>-</Text>
                    </TouchableOpacity>
                    <TextInput style={{fontFamily: 'soraSemiBold', fontSize: 15, textAlign:'center'}}>{qty}</TextInput>
                    
                    <TouchableOpacity style={styles.roundButton} onPress={()=>{
                        setQty(qty+1)
                    }}>
                        <Text style={{fontFamily: 'soraSemiBold', fontSize: 20, textAlign:'center', marginTop: -3}}>+</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>

            <View style={styles.separator}>
            </View>

            <TouchableOpacity style={styles.discountContainer}>
                <View style={styles.discountLeftContainer}>
                    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M18.3991 7.14599L19.1193 7.86599C19.6895 8.42599 19.9996 9.18599 19.9996 9.98599C20.0096 10.786 19.6995 11.547 19.1393 12.116C19.1327 12.1233 19.126 12.1298 19.1193 12.1362C19.116 12.1394 19.1127 12.1427 19.1093 12.146L18.3991 12.856C18.119 13.136 17.9589 13.516 17.9589 13.917V14.946C17.9589 16.606 16.6084 17.957 14.9478 17.957H13.9174C13.5173 17.957 13.1372 18.116 12.8571 18.396L12.1368 19.116C11.5466 19.707 10.7763 19.996 10.006 19.996C9.23574 19.996 8.46546 19.707 7.87525 19.127L7.14498 18.396C6.86488 18.116 6.48474 17.957 6.0846 17.957H5.05423C3.39362 17.957 2.04313 16.606 2.04313 14.946V13.917C2.04313 13.516 1.88308 13.136 1.60298 12.846L0.882714 12.136C-0.28771 10.967 -0.297714 9.05599 0.87271 7.87699L1.60298 7.14599C1.88308 6.86599 2.04313 6.48599 2.04313 6.07599V5.05599C2.04313 3.39599 3.39362 2.04699 5.05423 2.04699H6.0846C6.48474 2.04699 6.86488 1.88599 7.14498 1.60599L7.86524 0.885989C9.03567 -0.293011 10.9464 -0.293011 12.1268 0.876989L12.8571 1.60599C13.1372 1.88599 13.5173 2.04699 13.9174 2.04699H14.9478C16.6084 2.04699 17.9589 3.39599 17.9589 5.05599V6.08699C17.9589 6.48599 18.119 6.86599 18.3991 7.14599ZM7.42509 13.446C7.66517 13.446 7.88525 13.356 8.04531 13.186L13.1872 8.04699C13.5273 7.70699 13.5273 7.14599 13.1872 6.80599C12.8471 6.46699 12.2969 6.46699 11.9567 6.80599L6.81486 11.946C6.47474 12.286 6.47474 12.846 6.81486 13.186C6.97492 13.356 7.195 13.446 7.42509 13.446ZM11.6966 12.566C11.6966 13.056 12.0868 13.446 12.577 13.446C13.0571 13.446 13.4473 13.056 13.4473 12.566C13.4473 12.087 13.0571 11.696 12.577 11.696C12.0868 11.696 11.6966 12.087 11.6966 12.566ZM7.43509 6.55599C7.91526 6.55599 8.3054 6.94599 8.3054 7.42599C8.3054 7.91699 7.91526 8.30599 7.43509 8.30599C6.95492 8.30599 6.55477 7.91699 6.55477 7.42599C6.55477 6.94599 6.95492 6.55599 7.43509 6.55599Z" fill="#C67C4E"/>
                    </Svg>
                    <Text style={styles.discountText}>1 Discount is applied</Text>
                </View>
                <Entypo name="chevron-thin-right" size={18} color="black" />
            </TouchableOpacity>

            <View>
                <Text style={[styles.heading, {marginBottom: 5}]}>Payment Summary</Text>
                <View style={styles.paymentContainer}>
                    <Text style={styles.priceLabelText}>Price</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.discountSumText}>$ 1.2</Text>
                        <Text style={styles.priceText}>$ {product?.price}</Text>
                    </View>
                </View>
                <View style={styles.paymentContainer}>
                    <Text style={styles.priceLabelText}>Delivery Fee</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.discountSumText}>$ 1.0</Text>
                        <Text style={styles.priceText}>$ 2.0</Text>
                    </View>
                </View>
                <View style={styles.horizontalLine}></View>
                <View style={styles.paymentContainer}>
                    <Text style={styles.priceLabelText}>Total Payment</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.discountSumText}>$ 2.2</Text>
                        <Text style={styles.priceText}>$ 6.4</Text>
                    </View>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.paymentContainer}>
                    <View style={[styles.paymentMethodContainer, {marginTop : -7}]}>
                        <Svg style={{marginTop: 1}} width="23" height="23" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M19.3 5.91998V11.07C19.3 14.15 17.54 15.47 14.9 15.47H6.10995C5.65995 15.47 5.22996 15.43 4.82996 15.34C4.57996 15.3 4.33996 15.23 4.11996 15.15C2.61996 14.59 1.70996 13.29 1.70996 11.07V5.91998C1.70996 2.83998 3.46995 1.52002 6.10995 1.52002H14.9C17.14 1.52002 18.75 2.47001 19.18 4.64001C19.25 5.04001 19.3 5.44998 19.3 5.91998Z" stroke="#C67C4E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <Path d="M22.3011 8.9201V14.0701C22.3011 17.1501 20.5411 18.4701 17.9011 18.4701H9.11105C8.37105 18.4701 7.70106 18.3701 7.12106 18.1501C5.93106 17.7101 5.12105 16.8001 4.83105 15.3401C5.23105 15.4301 5.66105 15.4701 6.11105 15.4701H14.9011C17.5411 15.4701 19.3011 14.1501 19.3011 11.0701V5.9201C19.3011 5.4501 19.2611 5.03014 19.1811 4.64014C21.0811 5.04014 22.3011 6.38011 22.3011 8.9201Z" stroke="#C67C4E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <Path d="M10.4984 11.1399C11.9564 11.1399 13.1384 9.95791 13.1384 8.49988C13.1384 7.04185 11.9564 5.85986 10.4984 5.85986C9.04038 5.85986 7.8584 7.04185 7.8584 8.49988C7.8584 9.95791 9.04038 11.1399 10.4984 11.1399Z" stroke="#C67C4E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <Path d="M4.78003 6.29999V10.7" stroke="#C67C4E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <Path d="M16.2217 6.30029V10.7003" stroke="#C67C4E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                        <View style={[styles.paymentToggleContainer]}>
                            <Text style={styles.paymentMethodLabel}>Cash</Text>
                            <Text style={styles.paymentMethodPrice}>$ 6.4</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.paymentMethodButton}>
                        <Entypo  name="dots-three-horizontal" size={12} color="white" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={styles.orderButton}
                    onPress={() =>
                        navigation.navigate('DeliveryDetail', {product: product})
                    }
                >
                    <Text style={styles.orderButtonText}>Order</Text>
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
    deliveryContainer:{
        backgroundColor: Colors.GRAYWHITE,
        height: 50,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 4
    },
    deliveryToggle:{
        width: '50%',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deliveryToggleText:{
        fontFamily: 'sora',
        fontSize: 16
    },
    deliveryToggleActive:{
        width: '50%',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: Colors.PRIMARY
    },
    deliveryToggleTextActive:{
        fontFamily: 'soraSemiBold',
        fontSize: 16,
        color: Colors.WHITE
    },
    heading:{
        fontFamily: 'soraSemiBold',
        fontSize: 18
    },
    addressContainer:{
        marginTop: 15, 
        paddingBottom: 25, 
        borderBottomWidth: 1,
        borderColor: Colors.GRAYWHITE
    },
    street:{
        fontFamily: 'soraSemiBold',
        fontSize: 16,
        marginTop: 15
    },
    streetDetail:{
        fontFamily: 'sora',
        fontSize: 14,
        color: Colors.GRAY,
        textAlign: 'justify',
        lineHeight: 20
    },
    addressButton:{
        borderColor: Colors.GRAY,
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 99,
        marginRight: 10
    },
    addressButtonText:{
        fontFamily: 'sora',
        fontSize: 14,
    },
    itemThumbnail:{
        width: 55,
        height: 55,
        borderRadius: 15
    },
    roundButton:{
        width: 30,
        height: 30,
        borderColor: Colors.GRAY,
        borderWidth: 1,
        borderRadius: 99,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cartContainer:{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent:'space-between', 
        marginTop: 25
    },
    separator:{
        marginTop: 25, 
        marginLeft: -30, 
        height: 5, 
        width: width, 
        backgroundColor: Colors.LIGHTGRAY
    },
    itemContainer:{
        width: (((width-130)/3)*2)-10, 
        paddingLeft: 5
    },
    discountContainer:{
        marginTop: 25,
        marginBottom: 15,
        height: 60,
        borderColor: Colors.GRAYWHITE,
        borderWidth: 1,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    discountLeftContainer:{
        display: 'flex',
        flexDirection: 'row',
        height:60,
        alignItems: 'center'
    },
    discountText:{
        fontFamily: 'soraSemiBold',
        fontSize: 15,
        marginLeft: 10,
        marginTop: -2
    },
    paymentContainer:{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent:'space-between',
        paddingTop: 10,
        width: width-60
    },
    paymentMethodContainer:{
        display: 'flex', 
        flexDirection: 'row'
    },
    paymentToggleContainer:{
        display: 'flex', 
        flexDirection: 'row',
        justifyContent:'space-between',
        marginLeft: 5,
        backgroundColor: Colors.GRAYWHITE,
        height: 25,
        width: 110,
        borderRadius: 99
    },
    priceContainer:{
        display: 'flex', 
        flexDirection: 'row',
    },
    priceLabelText:{
        fontFamily: 'sora',
        fontSize: 15,
    },
    discountSumText:{
        fontFamily: 'sora',
        fontSize: 15,
        marginRight: 10,
        textDecorationLine: 'line-through'
    },
    priceText:{
        fontFamily: 'soraSemiBold',
        fontSize: 15,
    },
    horizontalLine:{
        borderBottomColor: Colors.GRAYWHITE,
        borderBottomWidth: 1,
        marginTop: 20
    },
    bottomContainer:{
      position: 'absolute',
      height: 200,
      left: 0, 
      top: (width*2) - 180, 
      paddingHorizontal: 30,
      paddingTop: 15,
      backgroundColor: Colors.WHITE,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      width: width,
      elevation: 20,
      shadowColor: Colors.BLACK,
    },
    paymentMethodLabel:{
        color: Colors.WHITE,
        backgroundColor: Colors.PRIMARY,
        fontFamily: 'sora',
        fontSize: 12,
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 99,
    },
    paymentMethodPrice:{
        fontFamily: 'sora',
        fontSize: 12,
        paddingRight: 15,
        paddingVertical: 2,
    },
    paymentMethodButton:{
        width: 25, 
        height: 25, 
        backgroundColor: Colors.GRAY, 
        marginTop: -7, 
        alignItems: 'center', 
        paddingTop: 7, 
        borderRadius: 99
    },
    orderButton:{
        width: width-60,
        backgroundColor: Colors.PRIMARY,
        height: 60,
        marginTop: 20,
        borderRadius: 15,
        alignItems: 'center'
    },
    orderButtonText:{
        textAlign: 'center',
        fontSize: 17,
        fontFamily: 'soraSemiBold',
        color: Colors.WHITE,
        marginTop: 17
    }
  })