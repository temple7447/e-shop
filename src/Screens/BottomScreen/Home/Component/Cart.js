

import React, { useState, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '../../../Component/NavigationBar';
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../../../../Store/CartReducer';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import axios from 'axios';
import { UserContext } from '../../../../AppProvider';
import { useNavigation } from '@react-navigation/native';
import { clear } from '../../../../Store/CartReducer';

const Cart = () => {

  const dispatch = useDispatch();
const navigation = useNavigation()
  const cart = useSelector((state) => state.cart.items)
  const totalPrice = useSelector(state => state.cart.totalPrice);

  const { info , change, user} = useContext(UserContext)
  const id = info[0]?._id

console.log(cart)
  const handleOrder = async () => {

if(user){
  if (cart?.length ) {

    try {
 await axios.post("https://charming-cod-gaiters.cyclic.app/Order", {
        cart ,id
    
      }).then((res)=>{
        console.log("Order successful");
        Alert.alert("success", "Order successful")
  dispatch(clear());

      })
      .catch((err)=>{
        Alert.alert("Order failed");
      })

   
      
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle the error appropriately, such as showing an error message to the user
    }
  } else {
    Alert.alert("Warning", "There is no order, please you have to add to cart")
  }

}else{
navigation.navigate("Login")
}




  };



  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <View>
        <Image source={{ uri: item?.Images[0] }} style={{ width: 100, height: 100 }} resizeMode="stretch" />
      </View>
      <View>
        <View>
          <Text style={styles.itemTitle}>{item?.Title}</Text>
          <Text style={styles.itemTitleCa}>{item?.Categories}</Text>
        </View>
        <View style={styles.priceQu} className="flex-1 flex-row items-center ">
        <View>
          <Text style={styles.itemPrice}>&#x20A6;{item?.Price}</Text>
          </View>
          <TouchableOpacity onPress={() => dispatch(remove(item?._id))} style={styles.removeButton}>
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );



  return (
    <View style={styles.container}>
      <NavigationBar heading="Cart" />
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item?._id}
      />
      <View style={styles.OrderCheckOut}>
<View style={styles.line}></View>
<Text style={{fontWeight:'bold', fontSize:RFValue(16), alignSelf:'center'}}>Order Info</Text>
<View style={{paddingHorizontal:15}}>
<View  className="flex-row justify-between">
  <Text style={{fontSize:RFValue(15)}}>Subtotal ({cart?.length} items)</Text>
  <Text style={{fontSize:RFValue(14)}}>&#x20A6;{totalPrice}</Text>
</View>
<View  className="flex-row justify-between">
  <Text style={{fontSize:RFValue(15)}}>Delivery</Text>
  <Text style={{fontSize:RFValue(14)}}>&#x20A6;0</Text>
</View>
<View  className="flex-row justify-between">
  <Text style={{fontSize:RFValue(15)}}>Discount</Text>
  <Text style={{fontSize:RFValue(14)}}>&#x20A6;0</Text>
</View>
</View>

      <TouchableOpacity onPress={handleOrder} style={{ alignSelf: 'center', backgroundColor: '#F2831B', width: '90%', padding: 15, marginVertical: 10, borderRadius: 10 }}>
        <Text style={{ fontSize: RFValue(15), textAlign: 'center', color: 'white', }}>Order Items</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#FFFFFF',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(169, 154, 153, 0.4)',
    gap:RFValue(20)
  },
  itemTitleCa:{
marginVertical:RFValue(10)
  },
  itemTitle: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: RFValue(14),
    fontWeight:'800'
  },
  removeButton: {
    backgroundColor: '#F2831B',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  order: {
    textAlign: 'center'
  },
  priceQu:{
    marginBottom:RFValue(1),
    justifyContent:"space-between",
    width:RFPercentage(35)
  },
  OrderCheckOut:{
    backgroundColor: 'rgba(169, 154, 153, 0.4)',
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    gap:10,
  },
  line:{
width:130,
alignSelf:'center',
border:'none',
borderTopColor:'rgba(169, 154, 153, 1)',
borderTopWidth:10,
borderRadius:10,
marginVertical:10

  },

});

export default Cart;
