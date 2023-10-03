import React, { useState, useEffect, useContext } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { UserContext } from '../../../AppProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '../../Component/NavigationBar';
import { useNavigation } from '@react-navigation/native';

const Order = () => {
  const [order, setOrder] = useState([]);
  const { info } = useContext(UserContext);
  const navigation = useNavigation()

  useEffect(() => {
    axios
      .get('https://charming-cod-gaiters.cyclic.app/Profile0rders')
      .then((res) => {
        setOrder(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const userId = info[0]?._id;

  const ListOfOrder = (Order) => {
   
    navigation.navigate("ListOfOrder", {ele : Order})

  };

  return (
    <>
      <NavigationBar />
      <SafeAreaView style={styles.container}>
        {order
          .filter((item) => item?._id === userId)
          .flatMap((items) => items?.orders.map((product) => product))
          ?.map((product) => {
            const { Order, _id, createdAt } = product;

            const inputDate = new Date(createdAt);
            const formattedDate = `${("0" + (inputDate.getMonth() + 1)).slice(-2)}-${(
              "0" + inputDate.getDate()
            ).slice(-2)}-${inputDate.getFullYear()}`;
            const formattedTime = `${("0" + inputDate.getHours()).slice(-2)}:${(
              "0" + inputDate.getMinutes()
            ).slice(-2)}`;

            return (
              <TouchableOpacity
                onPress={() => ListOfOrder(Order)}
                key={_id}
                style={styles.orderContainer}
              >
                <Text style={styles.orderId}>{_id}</Text>
                <Text style={styles.orderDate}>{formattedDate} {formattedTime}</Text>
              </TouchableOpacity>
            );
          })}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  orderContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  orderId: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  orderDate: {
    fontSize: 16,
    color: '#888',
  },
});

export default Order;
