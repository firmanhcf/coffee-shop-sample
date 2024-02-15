import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import AppStyle from '../../utils/AppStyle'
import Colors from '../../utils/Colors'
import * as WebBrowser from "expo-web-browser"
import { useOAuth } from "@clerk/clerk-expo"
import { useWarmUpBrowser } from "../../hooks/WarmUpBrowser"

const {width} = Dimensions.get('window')
WebBrowser.maybeCompleteAuthSession()

export default function Login() {

  useWarmUpBrowser()
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" })
 
  const loginClick = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId })
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err)
    }
  }, [])

  return (
    <View style={AppStyle.container}>
      <Image style={styles.imageContainer} source={require('./../../../assets/images/login-background.jpeg')}></Image>
      <LinearGradient
          colors={['transparent','rgba(0,0,0,0.99)']}
          locations={[0.1,0.2]}
          style={styles.textContainer}
      >
        <Text style={styles.heading}>Coffee so good,{"\n"}your taste buds{"\n"}will love it.</Text>
        <Text style={styles.subheading}>The best grain, the finest raost, the powerful flavor.</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={loginClick}>
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer:{
    width: width,
    height: width*1.3,
    resizeMode: 'cover'
  },
  textContainer:{
    marginTop: -(width*0.3),
    width: width,
    height: width*1.3,
    paddingTop: width*0.22,
    alignItems: 'center'
  },
  heading:{
    color: Colors.WHITE,
    fontSize: width*0.085,
    fontFamily: 'soraSemiBold',
    textAlign: 'center'
  },
  subheading:{
    marginTop: width*0.03,
    color: Colors.GRAY,
    fontSize: width*0.035,
    fontFamily: 'sora',
    textAlign: 'center',
    width: width*0.7
  },
  buttonContainer:{
    marginTop: width*0.04,
    backgroundColor: Colors.PRIMARY,
    padding: 20,
    width: width*0.7,
    alignItems: 'center',
    borderRadius: 10
  },
  buttonText:{
    color: Colors.WHITE,
    fontFamily: 'sora',
    fontSize: width*0.039
  }
})