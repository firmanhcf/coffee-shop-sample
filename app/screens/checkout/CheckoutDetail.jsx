import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather, Octicons } from '@expo/vector-icons'
import Colors from '../../utils/Colors'

const {width} = Dimensions.get('window')

export default function CheckoutDetail({product}) {
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

            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginTop: 20}}>
                <Image style={styles.itemThumbnail} source={{uri:product?.photo?.url}}></Image>
                <View style={{width: (width-130)/2}}>
                    <Text style={styles.heading}>{product?.category?.name}</Text>
                    <Text style={styles.streetDetail}>{product?.name}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.roundButton} onPress={()=>{
                        if(qty > 0){
                            setQty(qty-1)
                        }
                    }}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <TextInput>{qty}</TextInput>
                    
                    <TouchableOpacity style={styles.roundButton} onPress={()=>{
                        setQty(qty+1)
                    }}>
                        <Text>+</Text>
                    </TouchableOpacity>
                    
                </View>
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
        borderColor: Colors.GRAYNITE
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
    }
  })