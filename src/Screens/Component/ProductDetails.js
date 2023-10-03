import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import NavigationBar from './NavigationBar';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { WebBrowser } from 'expo';
import ListofUnderLineProducts from './ListofUnderLineProducts';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ProductFilter from './ProductFilter';
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../../Store/CartReducer';

const ProductDetails = () => {
    const route = useRoute();
    const { details } = route?.params;
    const totalStars = 5;

    const dispatch = useDispatch()

    const cart= useSelector((state) => state.cart)

    // console.log(cart)

    // const FLUTTERWAVE_BASE_URL = 'https://api.flutterwave.com/v3';
    // const API_KEY = `FLWSECK-822c8de95d482593e0138025ef51ab90-1899911210dvt-X`;


    // const createPayment = async () => {
    //     const amount = 300; // Amount in Naira
    //     const currency = 'NGN'; // Currency set to Naira (NGN)
    //     const paymentMethod = 'card'; // Payment method for transfer payment
    //     try {
    //         const response = await axios.post(
    //             `${FLUTTERWAVE_BASE_URL}/payments`,
    //             {
    //                 tx_ref: 'YOUR_TRANSACTION_REFERENCE',
    //                 amount,
    //                 currency,
    //                 payment_type: paymentMethod,
    //                 redirect_url: 'YOUR_REDIRECT_URL',
    //             },
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${API_KEY}`,
    //                 },
    //             }
    //         );
    //         const paymentLink = response.data.data.link;
    //         try {
    //             await WebBrowser.openBrowserAsync(paymentLink);
    //         } catch (error) {
    //             console.error('Error while opening browser:', error);
    //         }
    //         // return response.data.data.link; // Return the apayment link to your frontend to redirect the user.
    //     } catch (error) {
    //         console.error('Payment Error:', error);
    //         if (error.response) {
    //             console.error('Response Data:', error.response.data);
    //             console.error('Response Status:', error.response.status);
    //             console.error('Response Headers:', error.response.headers);
    //         }
    //         throw new Error('Error while initiating payment.');
    //     }
    // };




    const renderStars = () => {
        const stars = [];
        const redStars = Math.floor(details?.rating?.rate);
        const blackStars = totalStars - redStars;

        for (let i = 0; i < redStars; i++) {
            stars.push(<FontAwesome key={i} name="star" size={15} color="#F2831B" />);
        }

        for (let i = 0; i < blackStars; i++) {
            stars.push(<FontAwesome key={redStars + i} name="star" size={15} color="black" />);
        }

        return stars;
    };


    // console.log(details?.Images)
    return (
        <View style={styles.container}>
            <NavigationBar  />
            <ScrollView>
                <View style={{ flexDirection: 'row', }}>
                {details?.Images?.length > 0 && (
    details?.Images?.map((ele, index) => (
        <Image style={styles.image} key={index} source={{ uri: details?.Images[0] }} resizeMode="contain" />
    ))
)}
             
                    <View style={{ marginHorizontal: 10, paddingVertical: '10%', gap: 20 }}>
                        {/* <TouchableOpacity>
                            <Image style={styles.images} source={{ uri: details?.image }} resizeMode="contain" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.images} source={{ uri: details?.image }} resizeMode="contain" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.images} source={{ uri: details?.image }} resizeMode="contain" />
                        </TouchableOpacity> */}
                     

   {
    details?.Images.slice(1, 4)?.map((ele, index)=>(
                            <TouchableOpacity key={index}>
                            <Image style={styles.images} source={{ uri: ele }} resizeMode="contain" />
                        </TouchableOpacity>   
                        ))

   }
                
                     
        

                    </View>
                </View>


                <View style={styles.productInfo}>
                    <Text style={{fontSize:RFValue(20), fontWeight:'700'}}>{details?.Title}</Text>
                    <Text style={styles.price}>&#x20A6;{details?.Price}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.soldText}>{details?.rating?.count} Sold</Text>
                        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                            <Text style={styles.ratingText}>Rating: {details?.rating?.rate} ({details?.rating?.count} Review )</Text>
                            {renderStars()}
                        </View>

                    </View>

                    <Text style={styles.description}>{details?.Description}</Text>
                    <ProductFilter />
                </View>

                <TouchableOpacity  onPress = {() => dispatch(add(details))} style={styles.addToCartButton}>
                    <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                </TouchableOpacity>
                <ListofUnderLineProducts />
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    image: {
        height: hp(40),
        width: wp("70%"),
        alignSelf: 'center'
    },
    images: {
        height: hp(8),
        width: wp("20%"),

    },
    productInfo: {
        padding: 16,
    },
    price: {
        fontSize: RFValue(18),
        fontWeight: 'bold',
        marginBottom: 8,
    },

    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    soldText: {
        fontSize: RFValue(13),
        color: 'gray',
    },
    ratingText: {
        fontSize: RFValue(13),
        color: 'orange',
    },
    description: {
        fontSize: RFValue(12),
        marginBottom: 16,
    },
    addToCartButton: {
        backgroundColor: '#F2831B',
        padding: 16,
        alignItems: 'center',
        width: '90%',
        borderRadius: 10,
        alignSelf: 'center'
    },
    addToCartButtonText: {
        color: 'white',
        fontSize: RFValue(15),
        fontWeight: 'bold',
    },
});

export default ProductDetails;
