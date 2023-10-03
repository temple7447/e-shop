import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, Alert } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../AppProvider';


const SignIn = ({ }) => {
    const auth = getAuth();
const navigation = useNavigation()
const {setChange} = useContext(UserContext)


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    const handleSignIn = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
              
            
             


                console.log(user);


                if (user) {
                    const isEmailVerified = user.emailVerified;
                    console.log('Is email verified:', isEmailVerified);
                    if( isEmailVerified){
                        setChange(true)
                        navigation.navigate("HomeMain")
                    }else{
                        Alert.alert('warning ', "please Verified you email")
                    }
                  
                } else {
                    console.log('No user is currently signed in');
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };


   

    return (
        <>
          
            <View style={styles.container}>
                <StatusBar style="dark" backgroundColor="#F5F5F5" />

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}
                >
                    <View style={styles.logoContainer}>
                        <Image source={startingImage} style={styles.logo} />
                    </View>
                 
                    
                 
                    <View style={styles.inputContainer}>
                        <FontAwesome name="envelope-o" size={20} color="#888" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#888"
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <FontAwesome name="lock" size={20} color="#888" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#888"
                            secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                        />
                    </View>
                 
                    <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
                        <Text style={styles.signInButtonText}>Sign-In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signupButton} onPress={handleSignIn}>
                        <Text style={styles.signupButtonText}>Sign-In</Text>
                    </TouchableOpacity>
                  
             
                </KeyboardAvoidingView>
            </View>
        </>

    );
};

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
    signupButton: {
        backgroundColor: '#FFFFFF',
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
    signupButtonText: {
        color: 'black',
        fontSize: RFValue(16),
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default SignIn;
