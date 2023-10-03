import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
// import CustomLoader from './Loader'
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
// import { UserContext } from '../../../../AppProvider';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useSelector, useDispatch } from 'react-redux'
// import { increment,decrement } from '../../../../Store/Reducer';
// import { add } from '../../../../Store/CartReducer';

const PhoneWidth = Dimensions.get('screen').width;
const phoneHeight = Dimensions.get('screen').height;
const Skeleton = () => {
    const [fadeAnim] = useState(new Animated.Value(0));
    const [translateX] = useState(new Animated.Value(-100))
    const [colorAnimation] = useState(new Animated.Value(0));


    useEffect(() => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(fadeAnim, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
              toValue: 0.4,
              duration: 1000,
              useNativeDriver: true,
            }),
          ]),
          { iterations: -1 }
        ).start();
      
        Animated.timing(colorAnimation, {
          toValue: 1,
          duration: 2000, // Adjust the duration as needed
          useNativeDriver: false, // Since it's a color animation
        }).start();
      
        // Create a loop for continuous color transition
        const loop = Animated.loop(
          Animated.timing(colorAnimation, {
            toValue: 1,
            duration: 2000, // Adjust the duration as needed
            useNativeDriver: false,
          })
        );
      
        loop.start();
      
        // Return a cleanup function to stop the loop when component unmounts
        return () => loop.stop();
      }, [fadeAnim, colorAnimation]);
      
      
      

  return (
    <View style={styles.container}>
    
      
        <View style={styles.skeletonLine}></View>
        <View style={styles.containerItem} activeOpacity={0.8}>
         
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
                <Text style={{ color: 'black' }}></Text>
            </View>
            <View style={styles.imageContainer}>
            <Animated.View
  style={[
    styles.imageContainer,
    {
      backgroundColor: colorAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#E5E7EB', '#F5F5F5'], // Define your color range
      }),
      transform: [
        {
          translateX: colorAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [-PhoneWidth / 3.4, 0], // Translate from left to right
          }),
        },
      ],
    },
  ]}
>
     <View style={styles.image}   >
     </View>
     </Animated.View>

             
            </View>

            <View style={styles.productContainer}>
                <Text style={styles.category}></Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', top: 5 }}>
                    <View>
                        <Text style={{ fontSize: RFValue(10), }}>&#x20A6;</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <View>
                            <Text style={{ fontSize: RFValue(12) }}>-</Text>
                        </View>

                        <Text style={{ fontSize: RFValue(12) }}>0</Text>
                        <View>
                            <Text style={{ fontSize: RFValue(12) }}>+</Text>
                        </View>

                    </View>
                </View>
            
            </View>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        top: -40,

    },
    containerItem: {
        height: 210,
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
    },
    imageContainer: {
        backgroundColor: '#FFFFFFFF',
        height: 100,
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
     
    },
    productContainer: {
paddingVertical:14,
        paddingHorizontal: 10,
    },
    image: {
        width: PhoneWidth / 5,
        height: '100',
    },
    category: {
        fontWeight: 'bold',
        fontSize: RFValue(10)
        // fontFamily: 'customFontBold',
    },
    addToCartButton: {
        backgroundColor: '#F29A4A',
        paddingVertical: 3,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 5,
        alignItems: 'center',
        width:'100%'
    },
})




export default Skeleton

