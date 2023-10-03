import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState, useEffect} from 'react';
import Starting from './src/Screens/Starting/Starting';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/Auth/SignIn/SignIn';
import Home from './src/Screens/BottomScreen/Home/Home';
import Tabs from './src/Screens/BottomScreen/Tab';
import AppProvider from './src/AppProvider';
import ProductDetails from './src/Screens/Component/ProductDetails';
import Categories from './src/Screens/BottomScreen/Home/Component/Categories';
import { Provider } from 'react-redux'
import { store } from './src/Store/StoreConfiguration';
import Cart from './src/Screens/BottomScreen/Home/Component/Cart';
import AllCategories from './src/Screens/BottomScreen/Home/Component/AllCategories';
import AuthScreen from './src/Auth/SignIn/Auth';
import SignUp from './src/Auth/SignIn/SignUp';
import { TransitionSpecs, TransitionPresets, } from '@react-navigation/stack';
import Profile from './src/Screens/BottomScreen/Profile/Profile';
import Order from './src/Screens/BottomScreen/Profile/Order';
import ListOfOrder from './src/Screens/BottomScreen/Profile/ListOfOrder';
import Address from './src/Screens/BottomScreen/Profile/Address';

const Stack = createNativeStackNavigator();




export default function App() {




  return (
    <AppProvider>  
      <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
    headerShown: false,
    gestureEnabled: true,
    ...TransitionPresets.ModalPresentationIOS,
  })}>
        <Stack.Screen name="starting" options={{ headerShown: false, ...TransitionPresets.ModalSlideFromBottomIOS, }} component={Starting} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={SignIn} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
        <Stack.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
        <Stack.Screen name="Orders" options={{ headerShown: false }} component={Order} />
        <Stack.Screen name="Address" options={{ headerShown: false }} component={Address} />
        <Stack.Screen name="ListOfOrder" options={{ headerShown: false }} component={ListOfOrder} />
        <Stack.Screen name="HomeMain" options={{ headerShown: false }} component={Tabs} />
        <Stack.Screen name="Product" options={{ headerShown: false }} component={ProductDetails} />
        <Stack.Screen name="Categories" options={{ headerShown: false }} component={Categories} />
        <Stack.Screen name="AllCategories" options={{ headerShown: false }} component={AllCategories} />
        <Stack.Screen name="Cart" options={{ headerShown: false }} component={Cart} />
        <Stack.Screen name="Auth" options={{ headerShown: false }} component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
     </Provider> 
     </AppProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
