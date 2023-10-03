import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Dimensions, Alert } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather, AntDesign, Ionicons, Octicons, MaterialCommunityIcons, Entypo, MaterialIcons, EvilIcons } from '@expo/vector-icons';
import { UserContext } from '../../../AppProvider'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native'
import Modal from "react-native-modal";
import axios from 'axios'


import NavigationBar from '../../Component/NavigationBar'

const Address = () => {
    const navigation = useNavigation()
    const { name, info, setChange, Logout, change, user } = useContext(UserContext)

    return (
        <View>
            <NavigationBar />
            <View className=" flex-row justify-between my-2 py-3 px-2" style={{backgroundColor:'white'}}>
                <View>
                    <Text style={{fontSize:RFValue(15), fontWeight:'900'}} className="my-3">Billing Details</Text>
                    <Text>{user}</Text>
                </View>
                <EvilIcons name="pencil" size={24} color="black" />
            </View>

            <View className="items-center flex-row justify-between my-2 py-3 px-2" style={{backgroundColor:'white'}}>
                <Text style={{fontSize:RFValue(15), fontWeight:'900'}}>Shipping Details</Text>
                <EvilIcons name="pencil" size={24} color="black" />
            </View>
        </View>
    )
}

export default Address

const styles = StyleSheet.create({})