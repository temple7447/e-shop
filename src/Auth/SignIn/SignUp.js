import React, { useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const SignUp = ({}) => {

    const auth = getAuth();

    const navigation = useNavigation()
   

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    const handleSignUp = ()=>{
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              const user = userCredential.user;
              sendEmailVerification(user)
              .then(() => {
                console.log('Verification email sent');

              navigation.navigate("Login")
              })
              .catch((error) => {
                console.error('Error sending verification email:', error);
              });
           
  
  
              console.log(user);
  
              if (user) {
                  const isEmailVerified = user.emailVerified;
                  console.log('Is email verified:', isEmailVerified);
                  axios.post('https://charming-cod-gaiters.cyclic.app/profileSignUp',{
                      firstName: firstName,
                      lastName:lastName,
                      phoneNumber:phoneNumber,
                      email:email,
                      imageUri:"https://firebasestorage.googleapis.com/v0/b/first-project-a5bbf.appspot.com/o/ShopImage%2FimageProfile.png?alt=media&token=c036d899-def1-4b0d-b71e-872cb2de476b"
                  }).then((res)=>{
                      console.log("all the data was posted")
                    //   navigation.navigate("Login")
                  })
                  .catch((err)=> console.log(err))
                
                   
               
                
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
  
  
  
  
  
      }

 
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
                            placeholder="First Name"
                            value={firstName}
                            onChangeText={text => setFirstName(text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <FontAwesome name="envelope-o" size={20} color="#888" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Last Name"
                            value={lastName}
                            onChangeText={text => setLastName(text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <FontAwesome name="envelope-o" size={20} color="#888" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChangeText={text => setPhoneNumber(text)}
                            keyboardType="numeric"
                        />
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
           
                    <TouchableOpacity style={styles.signInButton} onPress={handleSignUp}>
                        <Text style={styles.signInButtonText}>Sign-Up</Text>
                    </TouchableOpacity>
               
                </KeyboardAvoidingView>
            </View>
        </>
  )
}

export default SignUp

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