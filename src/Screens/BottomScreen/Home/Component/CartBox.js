import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import { Categories_options } from '../../../../Data/Categories';

const CartBox = () => {
    const cat = RFValue(10 * 1.1);

    const navigate = useNavigation();


    const [Data, setData] = useState([]);
    const [Datas, setDatas] = useState([]);

    useEffect(() => {
        // axios
        //     .get('https://fakestoreapi.com/products')
        //     .then((res) => {
        //         setData(res.data);
        //     })
        //     .catch((err) => console.log(err));
        axios
            .get('https://charming-cod-gaiters.cyclic.app/upload_Categories')
            .then((res) => {
                setData(res.data);
                // console.log(res.data)
            })
            .catch((err) => console.log(err));
  
    }, []);

const HandleCat = (Categories)=>{

    const render = Categories_options?.filter((items)=>{
    return  items.Categories == Categories
    })
    setDatas(render)
    navigate.navigate("Categories",{ details: render })

}



    const render = Categories_options.filter((item, index, self) => index === self.findIndex((obj) => obj.Categories === item.Categories))?.map(
        (ele, index) => {
            const { Categories } = ele;
            return (
                <TouchableOpacity onPress={()=>HandleCat(Categories)} key={index} style={styles.item}>
                    <Image
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZTXXOa4YEKEOa9BeFelvk4iHbJzDeRVCUHQ&usqp=CAU' }}
                        resizeMode='contain'
                        style={styles.images}
                    />
                    <Text style={styles.itemText}>{Categories}</Text>
                </TouchableOpacity>
            );
        }
    );

    const HandleAllCategories = () => {
        navigate.navigate('AllCategories');
    };

    
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
            <TouchableOpacity style={styles.items} onPress={HandleAllCategories}>
                <SimpleLineIcons name='menu' size={cat} color='white' />
                <Text style={styles.itemText}>All Categories</Text>
            </TouchableOpacity>
            <View style={styles.container}>{render}</View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
      
    },
    container: {
        flexDirection: 'row',
    },
    item: {
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: '#B2886B',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        gap: 5,
        alignItems: 'center',
    },
    items: {
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: '#402E32',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        gap: 5,
        alignItems: 'center',
    },
    itemText: {
        marginTop: 5,
        color: 'white',
        fontSize: RFValue(8),
        fontWeight: 'bold',
    },
    images: {
        width: wp(5),
        height: hp(3),
        borderRadius: 50,
    },
});

export default CartBox;
