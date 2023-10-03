import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, Dimensions } from 'react-native';
import { AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
const windowWidth = Dimensions.get('window').width;

const SearchCart = ({ }) => {

    const navigation = useNavigation()

    const HandleCart = () => {
        navigation.navigate('Cart');
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Search'
                    style={styles.searchInput}
                />
                <FontAwesome
                    onPress={() => {
                        Alert.alert('You are welcome');
                    }}
                    name='search'
                    size={RFPercentage(2)}
                    color='white'
                    style={styles.searchIcon}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,

        // elevation: 4, // For Android shadow
        // shadowColor: 'rgba(0, 0, 0, 0.2)', // For iOS shadow
        // shadowOffset: { width: 0, height: 2 }, // For iOS shadow
        // shadowOpacity: 1, // For iOS shadow
        // shadowRadius: 4, // For iOS shadow

    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(234, 234, 241, 1)',
        borderRadius: 5,
        paddingHorizontal: 5,
    },
    searchInput: {
        flex: 1,
 
        paddingLeft: 5,
    },
    searchIcon: {
        backgroundColor: '#F2831B',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    cartIcon: {
        marginLeft: 20,
    },
});

export default SearchCart;
