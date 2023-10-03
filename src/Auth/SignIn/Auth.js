import SignIn from './SignIn';
import SignUp from './SignUp';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, Alert, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import app, { database, storage, auth, dbs } from '../../../firebase'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getAuth, signInWithEmailAndPassword, sendEmailVerification, createUserWithEmailAndPassword } from 'firebase/auth';
import { FontAwesome } from '@expo/vector-icons';
import startingImage from '../../../assets/starting.png';
import NavigationBar from '../../Screens/Component/NavigationBar';
import axios from 'axios';

const AuthScreen = ({navigation}) => {
  const [activeForm, setActiveForm] = useState('signup'); // or 'signin'

  return (
    <View style={styles.container}>
      {/* <NavigationBar heading="" /> */}
      {activeForm === 'signup' ? <SignUp /> : <SignIn />}
      <Button
        title={activeForm === 'signup' ? 'Switch to Signin' : 'Switch to Signup'}
        onPress={() => setActiveForm(activeForm === 'signup' ? 'signin' : 'signup')}
      />
    </View>
  );
};


export default AuthScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
    

    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: wp(70),
        height: hp(30),
        resizeMode: 'contain',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#888',
        marginBottom: 20,
        width: '80%',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: RFValue(16),
        color: 'black',
    },
    signInButton: {
        backgroundColor: '#3498DB',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
        marginTop: 20,
    },
    signInButtonText: {
        color: 'white',
        fontSize: RFValue(16),
        fontWeight: 'bold',
        textAlign: 'center',
    },
});