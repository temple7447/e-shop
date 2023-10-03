import React, {useState, useEffect, useContext} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';
import Home from './Home/Home';
import Favorite from './Favorite/Favorite';
import Profile from './Profile/Profile';
import History from './History/History';
import { useTheme } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { UserContext } from '../../AppProvider';
const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
    const { colors } = useTheme()
    const { name, info, setChange, Logout, change, user } = useContext(UserContext)

    const colorss = {
        background: "#FFFFFE",
        primary: "#402E32"

    }

    const iconsSize =RFValue(16)
console.log(iconsSize)
    return (
        <View style={{ flex: 1 }}> 
        <Tab.Navigator
                initialRouteName="Feed"
                activeColor={colorss.primary}
                barStyle={{
                    backgroundColor: colorss.background,
  borderTopWidth: 0.5,
  borderColor: colors.border,
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: '7%',
  justifyContent: 'center', // Center content vertically
  alignItems: 'center', // Center content horizontally
//   flexDirection: 'row', // Align items in a row
//   paddingHorizontal: 16, // Add horizontal padding
  shadowColor: '#000', // Add shadow
  shadowOffset: { width: 0, height: -2 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 3, 
                }}
                shifting={true}
            >
            <Tab.Screen
                name="Feed"
                component={Home}
                options={{
                    tabBarLabel: 'navigation',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={iconsSize} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Favorite}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={iconsSize} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={iconsSize} />
                    ),
                }}
            />
        </Tab.Navigator>
        </View>
    );
}

export default Tabs;