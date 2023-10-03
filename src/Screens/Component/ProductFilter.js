import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// import { TouchableOpacity } from 'react-native-gesture-handler'

const ProductFilter = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>QUANTITIES</Text>

            <View style={styles.quantityContainer}>
                <Text style={styles.quantityLabel}>Role of Item</Text>

                <View style={styles.quantityControls}>
                    <TouchableOpacity style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityValue}>0</Text>
                    <TouchableOpacity style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.quantityContainer}>
                <Text style={styles.quantityLabel}>Piece of Item</Text>

                <View style={styles.quantityControls}>
                    <TouchableOpacity style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityValue}>0</Text>
                    <TouchableOpacity style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProductFilter;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f7f7f7',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: RFValue(15),
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    quantityLabel: {
        fontSize: RFValue(15),
        fontWeight: 'bold',
        color: '#555',
        flex: 1,
        marginRight: 16,
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#e0e0e0',
    },
    quantityButton: {
        backgroundColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 14,
    },
    quantityButtonText: {
        fontSize: RFValue(16),
        color: '#555',
        fontWeight: 'bold',
    },
    quantityValue: {
        fontSize: RFValue(18),
        paddingHorizontal: 20,
        color: '#333',
        fontWeight: 'bold',
    },
});
