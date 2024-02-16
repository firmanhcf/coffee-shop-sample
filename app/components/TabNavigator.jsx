import { StyleSheet} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Homepage from '../screens/home/Homepage'
import Orderpage from '../screens/order/Orderpage'
import Favoritepage from '../screens/favorite/Favoritepage'
import Notificationpage from '../screens/notification/Notificationpage'

import Colors from '../utils/Colors'
import Svg, { Path } from 'react-native-svg'

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator
        screenOptions={{ 
            tabBarShowLabel: false,
            headerMode:'none', 
            headerShown: false, 
            tabBarActiveTintColor: Colors.PRIMARY,
            tabBarStyle: styles.tabContainer
            }
    }>
        <Tab.Screen 
            name="Home" 
            component={Homepage}
            options={{
                tabBarIcon: ({size,color}) => {
                  return (
                    <Svg
                        width={size}
                        height={size}
                        viewBox='0 0 20 20'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        strokeLinejoin='round'
                        strokeMiterlimit={2}
                    >
                        <Path
                            d="M7.14373 18.7821V15.7152C7.14372 14.9381 7.77567 14.3067 8.55844 14.3018H11.4326C12.2189 14.3018 12.8563 14.9346 12.8563 15.7152V15.7152V18.7732C12.8563 19.4473 13.404 19.9951 14.0829 20H16.0438C16.9596 20.0023 17.8388 19.6428 18.4872 19.0007C19.1356 18.3586 19.5 17.4868 19.5 16.5775V7.86585C19.5 7.13139 19.1721 6.43471 18.6046 5.9635L11.943 0.674268C10.7785 -0.250877 9.11537 -0.220992 7.98539 0.745384L1.46701 5.9635C0.872741 6.42082 0.517552 7.11956 0.5 7.86585V16.5686C0.5 18.4637 2.04738 20 3.95617 20H5.87229C6.19917 20.0023 6.51349 19.8751 6.74547 19.6464C6.97746 19.4178 7.10793 19.1067 7.10792 18.7821H7.14373Z"
                            fill={color}
                        />
                    </Svg>
                  );
                },
              }}
        />

        <Tab.Screen 
            name="Favorite"
            component={Favoritepage} 
            options={{
                tabBarIcon: ({size,color}) => {
                  return (
                    <Svg
                        width={size}
                        height={size}
                        viewBox='0 0 20 20'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        strokeLinejoin='round'
                        strokeMiterlimit={2}
                    >
                        <Path opacity="0.4" d="M9.776 18.8374C7.49295 17.4273 5.37065 15.7645 3.44792 13.8796C2.09053 12.5338 1.05389 10.8905 0.417193 9.07526C-0.720439 5.53523 0.603836 1.48948 4.30114 0.288397C6.25265 -0.324469 8.37508 0.0517545 10.0071 1.29983C11.6397 0.0531503 13.7614 -0.322951 15.713 0.288397C19.4103 1.48948 20.7435 5.53523 19.6058 9.07526C18.9743 10.8888 17.9438 12.5319 16.5929 13.8796C14.6684 15.7625 12.5463 17.4251 10.2648 18.8374L10.016 19L9.776 18.8374Z" fill={color}/>
                        <Path d="M10.0109 19L9.77598 18.8374C7.49013 17.4274 5.36487 15.7647 3.43902 13.8796C2.0752 12.5356 1.03238 10.8922 0.390519 9.07523C-0.738225 5.5352 0.58605 1.48945 4.28335 0.288367C6.23486 -0.324499 8.38528 0.0520129 10.0109 1.31054V19Z" fill={color}/>
                        <Path d="M16.2304 6.99922C16.0296 6.98629 15.8425 6.8859 15.7131 6.72157C15.5836 6.55723 15.5232 6.3434 15.5459 6.13016C15.5677 5.4278 15.168 4.78851 14.5517 4.53977C14.1609 4.43309 13.9243 4.00987 14.022 3.59249C14.1148 3.18182 14.4993 2.92647 14.8858 3.0189C14.9346 3.027 14.9816 3.04468 15.0244 3.07105C16.2601 3.54658 17.0601 4.82641 16.9965 6.22576C16.9944 6.43785 16.9117 6.63998 16.7673 6.78581C16.6229 6.93164 16.4291 7.00866 16.2304 6.99922Z" fill={color}/>
                    </Svg>
                  );
                },
              }}
        />

        <Tab.Screen 
            name="Order" 
            component={Orderpage} 
            options={{
                tabBarIcon: ({size,color}) => {
                  return (
                    <Svg
                        width={size}
                        height={size}
                        viewBox='0 0 20 20'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        strokeLinejoin='round'
                        strokeMiterlimit={2}
                    >
                        <Path opacity="0.4" d="M14.6203 20H5.3797C2.68923 20 0.5 17.8311 0.5 15.1646V9.83544C0.5 7.16894 2.68923 5 5.3797 5H14.6203C17.3108 5 19.5 7.16894 19.5 9.83544V15.1646C19.5 17.8311 17.3108 20 14.6203 20Z" fill={color}/>
                        <Path d="M13.7551 8C13.344 8 13.0103 7.67634 13.0103 7.27754V4.35689C13.0103 2.75111 11.6635 1.44491 10.0089 1.44491C9.24719 1.44491 8.44769 1.7416 7.87861 2.28778C7.30854 2.83588 6.99272 3.56508 6.98974 4.34341V7.27754C6.98974 7.67634 6.65604 8 6.24487 8C5.8337 8 5.5 7.67634 5.5 7.27754V4.35689C5.50497 3.17303 5.97771 2.08067 6.82984 1.26285C7.68098 0.443107 8.78139 0.0317881 10.0119 0C12.4849 0 14.5 1.95449 14.5 4.35689V7.27754C14.5 7.67634 14.1663 8 13.7551 8Z" fill={color}/>
                    </Svg>
                  );
                },
              }}
        />

        <Tab.Screen 
            name="Notification" 
            component={Notificationpage} 
            options={{
                tabBarIcon: ({size,color}) => {
                  return (
                    <Svg
                        width={size}
                        height={size}
                        viewBox='0 0 20 20'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        strokeLinejoin='round'
                        strokeMiterlimit={2}
                    >
                        <Path d="M16.7695 9.64534C16.039 8.79229 15.7071 8.05305 15.7071 6.79716V6.37013C15.7071 4.73354 15.3304 3.67907 14.5115 2.62459C13.2493 0.986993 11.1244 0 9.04423 0H8.95577C6.91935 0 4.86106 0.941671 3.577 2.5128C2.71333 3.58842 2.29293 4.68822 2.29293 6.37013V6.79716C2.29293 8.05305 1.98284 8.79229 1.23049 9.64534C0.676907 10.2738 0.5 11.0815 0.5 11.9557C0.5 12.8309 0.787226 13.6598 1.36367 14.3336C2.11602 15.1413 3.17846 15.6569 4.26375 15.7466C5.83505 15.9258 7.40634 15.9933 9.0005 15.9933C10.5937 15.9933 12.165 15.8805 13.7372 15.7466C14.8215 15.6569 15.884 15.1413 16.6363 14.3336C17.2118 13.6598 17.5 12.8309 17.5 11.9557C17.5 11.0815 17.3231 10.2738 16.7695 9.64534Z" fill={color}/>
                        <Path opacity="0.4" d="M11.0087 17.2284C10.5088 17.1216 7.4626 17.1216 6.96269 17.2284C6.53533 17.3271 6.07318 17.5567 6.07318 18.0603C6.09803 18.5407 6.37929 18.9647 6.76888 19.2336L6.76789 19.2346C7.27178 19.6274 7.86313 19.8771 8.4823 19.9668C8.81226 20.0121 9.14819 20.0101 9.49008 19.9668C10.1083 19.8771 10.6996 19.6274 11.2035 19.2346L11.2025 19.2336C11.5921 18.9647 11.8734 18.5407 11.8982 18.0603C11.8982 17.5567 11.4361 17.3271 11.0087 17.2284Z" fill={color}/>
                    </Svg>
                  );
                },
              }}
        />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabContainer:{
        height: 65,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        position: "absolute",
        bottom: 0,
        backgroundColor: Colors.WHITE
    }
})