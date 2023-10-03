import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Alert, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';

import ProductCardScroll from '../BottomScreen/Home/Component/ProductCardScroll';


const ListofUnderLineProducts = () => {

    const navigate = useNavigation()

    const [Data, setData] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {

                setData(res.data)

            }).catch(err => console.log(err))
    }, [])
    const render = Data?.map((ele, index) => {
        const { category } = ele
        return (

            <ProductCardScroll key={index} ele={ele} />

        )
    })


    const HandleAllCatogories = () => {
        navigate.navigate("Categories");

    }


    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mainContainer}>
  
            <View style={styles.Container}>
        
                {render}
            </View>
        </ScrollView>
    );
};



const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: 50
    },
    Container: {
        flexDirection: 'row',

    },
    item: {
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: '#F2831B',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        gap: 5,
        alignItems: 'center'

    },
    items: {
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: '#402E32',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        gap: 5,
        alignItems: 'center'

    },
    itemText: {
        marginTop: 5,
        color: 'white'
    },
    images: {
        width: 50,
        height: 50,
        borderRadius: 50
    }
});

export default ListofUnderLineProducts

