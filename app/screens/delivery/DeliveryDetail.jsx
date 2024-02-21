import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import MapView from 'react-native-maps'
import React from 'react'
import Colors from '../../utils/Colors'
import { Entypo, Feather } from '@expo/vector-icons'
import Svg, { Path } from 'react-native-svg'

const {width} = Dimensions.get('window')

export default function DeliveryDetail() {
  return (
    <View style={styles.container}>

      <MapView 
        style={styles.map} 
        initialRegion={{
          latitude: -8.709776, 
          longitude: 115.173127,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.navButton}>
          <Entypo name="chevron-thin-left" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5Z" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <Path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <Path d="M12 4V2" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <Path d="M4 12H2" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <Path d="M12 20V22" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <Path d="M20 12H22" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>

        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomContainerNavigation}></View>
        <Text style={styles.timeRemaining}>10 minutes left</Text>
        <View style={styles.addressContainer}>
          <Text style={styles.addressLabel}>Delivery to</Text>
          <Text style={styles.addressText}>Jl. Nusa Dua, No. 145</Text>
        </View>
        <View style={styles.indicatorContainer}>
          <View style={styles.progressIndicatorActive}>
          </View>
          <View style={styles.progressIndicatorActive}>
          </View>
          <View style={styles.progressIndicatorActive}>
          </View>
          <View style={styles.progressIndicator}>
          </View>
        </View>
        <View style={styles.progressContainer}>
          <View style={styles.progressIcon}>
            <Image source={require('../../../assets/images/bike.png')}></Image>
          </View>
          <View style={styles.progressTextContainer}>
            <Text style={styles.progressTitle}>Delivering your order</Text>
            <Text style={styles.addressLabel}>We deliver your goods to you in the shortest possible time.</Text>
          </View>
        </View>
        <View style={styles.courierContainer}>
          <Image style={styles.courierPhoto} source={require('../../../assets/images/person.jpeg')}></Image>
          <View style={styles.courierTextContainer}>
            <Text style={styles.progressTitle}>Johan Hawn</Text>
            <Text style={styles.addressLabel}>Personal Courier</Text>
          </View>
          <View style={styles.phoneIcon}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M14.4183 5.48994C13.9422 5.402 13.505 5.70579 13.4144 6.17048C13.3238 6.63516 13.6285 7.08884 14.0916 7.17978C15.4859 7.4516 16.5624 8.53085 16.8353 9.92989V9.93089C16.913 10.3336 17.2675 10.6264 17.6759 10.6264C17.7306 10.6264 17.7854 10.6214 17.8412 10.6114C18.3043 10.5185 18.609 10.0658 18.5184 9.60012C18.1111 7.51055 16.5027 5.89666 14.4183 5.48994Z" fill="#808080"/>
              <Path d="M14.356 2.00793C14.1329 1.97595 13.9088 2.04191 13.7305 2.18381C13.5473 2.32771 13.4328 2.53557 13.4079 2.76841C13.3551 3.23908 13.6947 3.66479 14.1648 3.71776C17.4064 4.07951 19.926 6.60477 20.2905 9.85654C20.3393 10.2922 20.7048 10.621 21.141 10.621C21.1739 10.621 21.2058 10.619 21.2386 10.615C21.4667 10.59 21.6699 10.4771 21.8133 10.2972C21.9557 10.1174 22.0204 9.89351 21.9945 9.66467C21.5404 5.60746 18.4003 2.45862 14.356 2.00793Z" fill="#808080"/>
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.0317 12.9724C15.0208 16.9604 15.9258 12.3467 18.4656 14.8848C20.9143 17.3328 22.3216 17.8232 19.2192 20.9247C18.8306 21.237 16.3616 24.9943 7.6846 16.3197C-0.993478 7.644 2.76158 5.17244 3.07397 4.78395C6.18387 1.67385 6.66586 3.08938 9.11449 5.53733C11.6544 8.0765 7.04266 8.98441 11.0317 12.9724Z" fill="#808080"/>
            </Svg>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '62%',
  },
  bottomContainer:{
    position: 'absolute',
    height: (width*2*0.5),
    left: 0, 
    top: (width*2) - (width*2*0.4), 
    paddingHorizontal: 30,
    paddingTop: 15,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: width,
    elevation: 20,
    shadowColor: Colors.BLACK,
    alignItems: 'center'
  },
  buttonContainer:{
    position: 'absolute',
    left: 30,
    top: 60,
    width: width-60,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navButton:{
    width: 50,
    height: 50,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    elevation: 2,
    shadowColor: Colors.BLACK,
    alignItems: 'center',
    paddingTop: 15
  },
  bottomContainerNavigation:{
    width: 45,
    height: 5,
    backgroundColor: Colors.GRAYNITE,
    borderRadius: 99
  },
  timeRemaining:{
    fontSize: 17,
    fontFamily: 'soraSemiBold',
    marginTop: 10
  },
  addressContainer:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5
  },
  addressLabel:{
    color: Colors.GRAY,
    fontFamily: 'sora',
    fontSize: 13,
  },
  addressText:{
    color: Colors.DARKGRAY,
    fontFamily: 'soraSemiBold',
    fontSize: 13,
    paddingLeft: 5
  },
  indicatorContainer:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between',
    width: (width-60)
  },
  progressIndicatorActive:{
    width: ((width-60)/4)-5,
    height: 5,
    backgroundColor: Colors.GREEN,
    borderRadius: 99
  },
  progressIndicator:{
    width: ((width-60)/4)-5,
    height: 5,
    backgroundColor: Colors.GRAYNITE,
    borderRadius: 99
  },
  progressContainer:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    width: width-60,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.GRAYNITE,
    padding: 20
  },
  progressIcon:{
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.GRAYNITE,
    marginRight: 15
  },
  progressTextContainer:{
    width: width-180
  },
  progressTitle:{
    fontFamily: 'soraSemiBold',
    fontSize: 15,
    marginBottom: 5
  },
  courierContainer:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    width: width-60,
    justifyContent: 'space-between'
  },
  courierPhoto:{
    width: 60,
    height: 60,
    borderRadius: 15
  },
  courierTextContainer:{
    width: width-185,
    paddingLeft: 10
  },
  phoneIcon:{
    paddingTop: 17,
    paddingHorizontal: 17,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.GRAYNITE
  }
})