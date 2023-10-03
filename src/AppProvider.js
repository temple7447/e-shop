import React, { useState, createContext, useCallback, useEffect } from 'react';
// import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


// SplashScreen.preventAutoHideAsync();
const UserContext = createContext();
import axios from 'axios';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app, {database, storage, auth, dbs } from '../firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';
const AppProvider = ({ children }) => {



    const auth = getAuth();
    const [name, setName] = useState('Temple');
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    // const [info, setInfo] = useState([]);
    const [change, setChange] = useState(false);
    // const [Logout, setCustomFunction] = useState(null);


    useEffect(()=>{
        const unsubscribe =     onAuthStateChanged(auth, (user) => {
            if (user) {
            
              const uid = user.uid;
              
              setUser(user.email)
              console.log("app",user.email)
            } else {
              setUser(null)
            }
          });

          return () => {
            unsubscribe(); // Unsubscribe when the component unmounts
          };


    },[change])


    useEffect(()=>{
axios.get('https://charming-cod-gaiters.cyclic.app/profileSignUp')
.then((res)=>{
  setUsers(res.data)

})
.catch((err)=>{
  console.log(err)
})


    },[change])


    const info = users?.filter((ele)=> ele.email.toLowerCase() === user)
  





    const Logout = async ()=>{
      try {
        await signOut(auth);
  
        setChange((prev) => !prev);
        console.log('You are logged out');
  
        await AsyncStorage.clear(); // Clear all data in AsyncStorage
        console.log('LocalStorage has been cleared');
      } catch (error) {
        console.error('Error during logout:', error);
      }

    }



    return (
        <UserContext.Provider value={{ name,info, setChange, change, Logout, user }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext }; // Exporting the UserContext object separately
export default AppProvider;
