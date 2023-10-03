import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const NavigationBar = ({ heading }) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={{ paddingHorizontal: 10, padding:10 }} onPress={handleGoBack}>
            <AntDesign name="left" size={RFValue(20)} color="black" />
          </TouchableOpacity>
  
          <Text style={styles.title}>{heading}</Text>
        </View>
  
        <TouchableOpacity style={styles.menuIconContainer}>
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </TouchableOpacity>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 12,
 
        backgroundColor: 'white', // Set background color to white

        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
        zIndex: 10,
      },
      content: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      title: {
        marginLeft: RFValue(14),
        fontSize: RFValue(16),
        fontWeight: 'bold',
      },
      menuIconContainer: {
        paddingHorizontal: RFValue(10),
      },
 
});

export default NavigationBar;
