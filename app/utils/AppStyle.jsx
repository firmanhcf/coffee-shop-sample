import { StyleSheet, Dimensions } from 'react-native'
import Colors from './Colors'

const {width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        width: width,
        flex: 1,
        alignItems:'flex-start',
        backgroundColor: Colors.LIGHTGRAY
    }
})