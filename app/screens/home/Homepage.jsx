import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput, ImageBackground, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUser } from "@clerk/clerk-expo"
import Colors from '../../utils/Colors'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import Svg, { Path } from 'react-native-svg'
import { StatusBar } from 'expo-status-bar'
import Api from '../../utils/Api'

const {width} = Dimensions.get('window')

export default function Homepage({ navigation }) {
    const { isLoaded, isSignedIn, user } = useUser()
    const [category, setCategory] = useState()
    const [product, setProduct] = useState()
    const [activeCategory, setActiveCategory] = useState()

    const getCategories = ()=>{
        Api.getCategories().then(resp=>{
            setCategory(resp?.categories)
        })
    }

    const getProductByCategory = (category)=>{
        Api.getProductByCategory(category).then(resp=>{
            setProduct(resp?.products)
        })
    }
 
    if (!isLoaded || !isSignedIn) {
      return null
    }
    
    useEffect(()=>{
        getCategories()
        setActiveCategory(0)
    },[])

    useEffect(()=>{
        if(category){
            getProductByCategory(category[activeCategory]?.id)
        }
    },[category,activeCategory])

    return (
        <View>
            <StatusBar style='light' backgroundColor={Colors.SPACEGRAY}/>
            <LinearGradient colors={['#313131','#131313']} start={{x:1, y:0}} style={styles.headingContainer}>
                <View style={styles.profileContainer}>
                    <TouchableOpacity>
                        <Text style={styles.locHeader}>Location</Text>
                        <Text style={styles.locText}>Legian, Denpasar <FontAwesome name="angle-down" size={14} color="white" /></Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={styles.profileImg} source={{uri:user.imageUrl}}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.searchContainer}>
                    <TouchableOpacity>
                        <AntDesign name="search1" size={25} color="white" style={{marginLeft: 20}} />
                    </TouchableOpacity>
                    <TextInput style={styles.searchBox} placeholder='Search coffee' textAlign='left' placeholderTextColor="#989898" ></TextInput>
                    <TouchableOpacity style={styles.filterButton}>
                    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <Path d="M18.3333 5.41666H13.3333" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <Path d="M5.00002 5.41666H1.66669" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <Path d="M8.33335 8.33333C9.94418 8.33333 11.25 7.0275 11.25 5.41667C11.25 3.80584 9.94418 2.5 8.33335 2.5C6.72252 2.5 5.41669 3.80584 5.41669 5.41667C5.41669 7.0275 6.72252 8.33333 8.33335 8.33333Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <Path d="M18.3333 14.5833H15" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <Path d="M6.66669 14.5833H1.66669" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <Path d="M11.6667 17.5C13.2775 17.5 14.5833 16.1942 14.5833 14.5833C14.5833 12.9725 13.2775 11.6667 11.6667 11.6667C10.0558 11.6667 8.75 12.9725 8.75 14.5833C8.75 16.1942 10.0558 17.5 11.6667 17.5Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            <View style={styles.bannerSection}>
                <TouchableOpacity style={styles.bannerContainer}>
                    <ImageBackground style={styles.bannerImg} imageStyle={{ borderRadius: 15}} source={require('../../../assets/images/banner.jpeg')}>
                        <Text style={styles.promoBadge}>Promo</Text>
                        <Text style={styles.promoText}>Buy one get{"\n"}one FREE</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={styles.categorySection}>
                <FlatList 
                    horizontal={true}
                    data={category}
                    renderItem={({item, index}) =>(
                        <TouchableOpacity onPress={()=>{ setActiveCategory(index) }} style={(index==activeCategory)?styles.categoryContainerActive:styles.categoryContainer}>
                            <Text style={(index==activeCategory)?styles.categoryTextActive:styles.categoryText}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <View style={styles.productSection}>
                <FlatList
                    style={{height: width-30, marginBottom: 20}}
                    data={product}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={styles.productContainer}
                            onPress={() =>
                                navigation.navigate('ProductDetail', {
                                  product: item,
                                })
                            }>
                            <ImageBackground imageStyle={{ borderRadius: 15}} style={styles.imageThumbnail} source={{ uri: item?.photo?.url }}>
                                <View style={{flex: 1, flexDirection:'row'}}>
                                    <Svg style width="14" height="15" viewBox="0 -3 13 14" fill={Colors.YELLOW}>
                                        <Path d="M5.72083 1.96251L6.45416 3.42917C6.55416 3.63334 6.82083 3.82917 7.04583 3.86667L8.37499 4.08751C9.22499 4.22917 9.42499 4.84584 8.81249 5.45417L7.77916 6.48751C7.60416 6.66251 7.50833 7.00001 7.56249 7.24167L7.85833 8.52084C8.09166 9.53334 7.55416 9.92501 6.65833 9.39584L5.41249 8.65834C5.18749 8.52501 4.81666 8.52501 4.58749 8.65834L3.34166 9.39584C2.44999 9.92501 1.90833 9.52917 2.14166 8.52084L2.43749 7.24167C2.49166 7.00001 2.39583 6.66251 2.22083 6.48751L1.18749 5.45417C0.579159 4.84584 0.774993 4.22917 1.62499 4.08751L2.95416 3.86667C3.17499 3.82917 3.44166 3.63334 3.54166 3.42917L4.27499 1.96251C4.67499 1.16667 5.32499 1.16667 5.72083 1.96251Z" fill={Colors.YELLOW}/>
                                    </Svg>
                                    <Text style={styles.ratingText}>
                                        {item.rating}
                                    </Text>
                                </View>
                            </ImageBackground>
                            <Text style={styles.productTitle}>{item.category?.name}</Text>
                            <Text style={styles.productSubtitle}>with {item.name}</Text>
                            <View style={{flex: 1, flexDirection:'row', justifyContent:'space-between'}}>
                                <Text style={styles.productPrice}>$ {item.price}</Text>
                                <TouchableOpacity style={styles.cartButton}>
                                    <AntDesign name="plus" size={16} color={Colors.WHITE} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )}
                    //Setting the number of column
                    numColumns={2}
                    keyExtractor={(item, index) => index}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingContainer:{
        width: width,
        height: 260,
        paddingHorizontal: 30,
        paddingTop: 30
    },
    profileContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    locHeader:{
        color: Colors.GRAY,
        fontSize: 12,
        fontFamily: 'sora'
    },
    locText:{
        color: Colors.WHITE,
        fontSize: 14,
        fontFamily: 'soraSemiBold'
    },
    profileImg:{
        width: 44,
        height: 44,
        borderRadius: 15
    },
    searchContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 52,
        backgroundColor: Colors.SPACEGRAY,
        marginTop: 25,
        borderRadius: 15
    },
    searchBox:{
        color: Colors.WHITE,
        textAlign: 'left',
        width: width*0.56,
        height: 42,
        fontFamily: 'sora',
        fontSize: 14
    },
    filterButton:{
        backgroundColor: Colors.PRIMARY,
        height: 42,
        width: 42,
        padding: 12,
        borderRadius: 15,
        marginRight: 5
    },
    bannerSection:{
        marginHorizontal: 30,
        marginTop: -100
    },
    bannerContainer:{
        height: 140,
        backgroundColor: Colors.GRAY,
        marginTop: 25,
        borderRadius: 15
    },
    bannerImg:{
        height: 140,
        resizeMode: 'contain',
        flex: 1
    }, 
    promoBadge:{
        padding: 7,
        backgroundColor: Colors.RED,
        color: Colors.WHITE,
        fontSize: 14,
        fontFamily: 'soraSemiBold',
        marginTop: 10,
        marginLeft: 25,
        width: 62,
        borderRadius: 10
    },
    promoText:{
        color: Colors.WHITE,
        fontSize: 32,
        fontFamily: 'soraSemiBold',
        marginLeft: 25,
        borderRadius: 10
    },
    categorySection:{
        marginLeft: 30,
        marginTop: 25
    },
    categoryContainer:{
        backgroundColor: Colors.WHITE,
        fontFamily: 'sora',
        fontSize: 14,
        marginRight: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 15
    },
    categoryContainerActive:{
        backgroundColor: Colors.PRIMARY,
        marginRight: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 15
    },
    categoryText:{
        color: Colors.DARKGRAY,
        fontFamily: 'sora',
        fontSize: 14,
    },
    categoryTextActive:{
        color: Colors.WHITE,
        fontFamily: 'soraSemiBold',
        fontSize: 14,
    },
    productSection: {
        marginHorizontal: 22,
        marginTop: 17,
        justifyContent: 'center'
    },
    productContainer:{ 
        flex: 1, 
        flexDirection: 'column', 
        margin: 8, 
        backgroundColor: Colors.WHITE,
        height : ((width/2)-60)+100,
        borderRadius: 15,
        padding: 3
    },
    imageThumbnail: {
        height: ((width/2)-60),
        borderRadius: 15,
        padding: 7
    },
    ratingText:{
        color: Colors.WHITE,
        fontFamily: 'soraSemiBold',
        fontSize: 11
    },
    productTitle:{
        color: Colors.SPACEGRAY,
        fontFamily: 'soraSemiBold',
        fontSize: 17,
        marginTop: 5,
        margin: 7
    },
    productSubtitle:{
        color: Colors.GRAY,
        fontFamily: 'sora',
        fontSize: 13,
        marginTop: -8,
        margin: 7
    },
    productPrice:{
        color: Colors.SPACEGRAY,
        fontFamily: 'soraSemiBold',
        fontSize: 19,
        marginHorizontal: 7
    },
    cartButton:{
        backgroundColor: Colors.PRIMARY,
        padding: 7,
        borderRadius: 7,
        marginHorizontal: 7,
        height: 31
    },
})