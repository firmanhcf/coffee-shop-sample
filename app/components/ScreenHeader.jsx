import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Colors from '../utils/Colors'
import { Entypo } from '@expo/vector-icons'
import Svg, { Path } from 'react-native-svg'

export default function ScreenHeader({navigation, category, favorite}) {
  return (
    <View>
        <StatusBar style='dark' backgroundColor={Colors.WHITE}/>
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={()=>{navigation.goBack(null)}}>
                <Entypo name="chevron-thin-left" size={18} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{category}</Text>
            {favorite?<TouchableOpacity>
                <Svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="#2F2D2C" stroke-width="1.5" stroke-linecap="round" fill={Colors.RED} stroke-linejoin="round"/>
                    <Path d="M15 4.7C16.07 5.046 16.826 6.001 16.917 7.122" stroke="#2F2D2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>
            </TouchableOpacity>:<Text></Text>}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 30,
        paddingBottom: 10,
        backgroundColor: Colors.WHITE
    },
    headerTitle:{
        fontFamily: 'soraSemiBold',
        fontSize: 18,
        marginTop: -6
    }
})