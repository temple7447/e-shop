import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../../../../Store/CartReducer'
const PhoneWidth = Dimensions.get('screen').width;
const phoneHeight = Dimensions.get('screen').height;
import SkeletonContainer from '../Component/SkeletonContainer'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Grocery = ({ }) => {
    const [Data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const handleProduct = (ele) => {
        // Implement the logic to add the product to the cart here

        navigation.navigate('Product', { details: ele })
    };



    useEffect(() => {
        axios.get("https://charming-cod-gaiters.cyclic.app/upload_Categories")
            .then((res) => {
                setData(res.data)
                setIsLoading(false)
            }).catch(err => {
                console.log(err)
                setIsLoading(true)
            })
    }, [])


    const render = Data?.slice(0, 12)?.filter((ele) => ele?.Images[0])?.map((ele, index) => {
        // console.log("here", ele?.Images[0])
        return (
            <TouchableOpacity key={index} style={styles.containerItem} activeOpacity={0.8} onPress={() => handleProduct(ele)}>
                <LinearGradient
                    colors={['#F5F5F5', '#F5F5F5']}
                    style={[StyleSheet.absoluteFill, { borderRadius: 10 }]}
                />
                <View
                    style={{
                        backgroundColor: '#F2831B',
                        position: 'absolute',
                        zIndex: 1,
                        left: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 4,
                        padding: 1,
                        borderRadius: 10,
                        paddingHorizontal: 5,

                    }}
                >
                    <FontAwesome name="star" size={15} color="white" />
                    <Text style={{ color: 'black' }}>{ele?.rating?.rate}</Text>
                </View>
                <View style={styles.imageContainer}>

                    <Image style={styles.image} source={{ uri: ele?.Images[0] }} resizeMode="contain" />


                </View>

                <View style={styles.productContainer}>
                    <Text style={styles.category}>{ele?.Title}</Text>
                    {/* <View style={{ flexDirection: 'row',width:"100%" }}> */}
                        {/* <View>
                            <Text style={{ fontSize: RFValue(10), }}>&#x20A6;{ele?.Price}</Text>
                        </View> */}
                        {/* <TouchableOpacity onPress={() => dispatch(add(ele))} style={styles.addToCartButton}>

<MaterialIcons  name="add-shopping-cart" size={RFValue(15)} color="white" />
</TouchableOpacity> */}
                    {/* </View> */}

                

                </View>
            </TouchableOpacity>
        )
    })

    return (
        <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
            {isLoading ? (
                <SkeletonContainer />
            )

                : (
                    <>

                        {render}
                    </>
                )

            }


        </ScrollView>
    )
}





export default Grocery



const styles = StyleSheet.create({
    container: {

        // flexDirection: 'row',
        gap: 10,
        // flexWrap: 'wrap',

        // // justifyContent: 'center',
        // paddingBottom: hp(15),


    },
    containerItem: {
        height: hp(20),
        width: PhoneWidth / 3.4,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#F5F5F5',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 20,
        paddingHorizontal:10,
        marginHorizontal: 10,
    },



    category: {
        fontWeight: 'bold',
        fontSize: RFValue(10),
  
        // fontFamily: 'customFontBold',
    },
    addToCartButton: {
        backgroundColor: '#F29A4A',
        padding: 10,
        borderRadius: 100,
        // marginTop: 5,
        alignItems: 'center',
  
        // width: '100%',
        alignSelf: 'center'
    },


    imageContainer: {
        backgroundColor: '#FFFFFF',
        height: 100,
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
        top: 20,
    },
    productContainer: {
        paddingVertical: 14,
        paddingHorizontal: 10,
        textAlign: 'center',
        // alignSelf: 'center',
    },
    image: {
        width: PhoneWidth / 5,
        height: '100%',
    },
    category: {
        fontWeight: 'bold',
        fontSize: RFValue(10)
        // fontFamily: 'customFontBold',
    },

})