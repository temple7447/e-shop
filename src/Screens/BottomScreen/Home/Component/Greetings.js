import { StyleSheet, Text, View, Dimensions, Button, ScrollView, TouchableOpacity } from 'react-native'
import React,{useEffect,useState, useContext} from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { increment, stored } from '../../../../Store/Reducer';
import { UserContext } from '../../../../AppProvider';

const Width = Dimensions.get('screen').width


// import { increment, decrement, incrementByAmount  } from '../../../../Store/reducer/counter';

const Greetings = () => {
    const count= useSelector((state) => state.counter.value)
    const cart= useSelector((state) => state.cart.items)
    const { name,info} = useContext(UserContext)
    // const counts= useSelector((state) => state.counter)
    // console.log(count)

    const dispatch = useDispatch()
 

  
  
    useEffect(() => {
        const storeData = async () => {
          try {
            await AsyncStorage.setItem('cart', JSON.stringify(cart));
            console.log('Data stored successfully');
          } catch (error) {
            console.error('Error storing data:', error);
          }
        };
        storeData();
      
        const retrieveData = async () => {
          try {
            const jsonValue = await AsyncStorage.getItem('cart');
            return jsonValue !== null ? JSON.parse(jsonValue) : null;
          } catch (error) {
            console.error('Error retrieving data:', error);
          }
        };
      
        const retrieveAndLogData = async () => {
          const storedData = await retrieveData();
          console.log('Retrieved data:', storedData.length);
          dispatch(stored(storedData.length))
        };
      
        retrieveAndLogData();
      }, [cart]);
   
    const navigation = useNavigation()

    const icon = RFValue(15)

    const HangleCart = () => {
        console.log("you are welcome")
        navigation.navigate("Cart")

    }

    const HangleProfile = () => {
        navigation.navigate("Auth")
    }


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.welcome}>Welcome Back {info[0]?.firstName} </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={HangleCart}>
                    <AntDesign name="shoppingcart" size={icon} color="black" />

                    <Text style={styles.cartnumber}>{cart.length}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={HangleProfile}>
                    <Ionicons name="person-circle" size={icon*1.2} color="black" style={{ paddingHorizontal: 10 }} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Greetings

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
 
        paddingVertical: 10
    },
    welcome: {
        fontSize: RFValue(13),
        fontWeight: "700",
        color: 'rgba(73, 73, 97, 1)',




    },
    cartnumber: {
        position: "absolute",
        backgroundColor: 'red',
        padding: 3,
        color: 'white',
        fontSize: RFValue(11),
        borderRadius: 50,
        right: 10,

    }
})