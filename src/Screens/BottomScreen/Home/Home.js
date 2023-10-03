import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useContext, useEffect, useCallback } from 'react'
import Greetings from './Component/Greetings'
import SearchCart from './Component/SearchCart';
import ScrollBox from './Component/ScrollBox';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import CartBox from './Component/CartBox';
import ProductCardScroll from './Component/ProductCardScroll';
import Grocery from './Categories/Grocery';
const Home = () => {

    // useEffect(()=>{
    //     axios.get('https://charming-cod-gaiters.cyclic.app/Categories')
    //     .then((res)=>{
    //         console.log(res.data)
        
    //     })
    //     .catch((err)=> console.log(err))
    //         },[])


    return (
        <SafeAreaView style={{paddingHorizontal:10}}>
            <Greetings />
            <ScrollView showsVerticalScrollIndicator={false}>

                <SearchCart />
                <ScrollBox />
                <Text style={{ marginVertical: 10, fontSize: RFValue(14) }}>Categories</Text>
                <CartBox />
                <View style={styles.container}>
      <Text style={styles.title}>Gorgeous Categories</Text>
      <View style={styles.groceryContainer}>
        <Grocery />
      </View>
    </View>
            
                <Text style={{ marginVertical: 15, fontSize: RFValue(14) }}>Special for you</Text>
   
                <ProductCardScroll />
 
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
      container: {

  },
  title: {
    marginVertical: 10,
    fontSize: RFValue(14),
  },

})