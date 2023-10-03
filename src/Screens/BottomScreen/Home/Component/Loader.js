import React, { useState, useEffect } from 'react';
import { View, Text, Animated, Easing, StyleSheet } from 'react-native';

const CustomLoader = () => {
    const [rotation] = useState(new Animated.Value(0));

    useEffect(() => {
        const rotateAnimation = Animated.loop(
            Animated.timing(rotation, {
                toValue: 1,
                duration: 1500,
                easing: Easing.linear,
                useNativeDriver: false,
            })
        );

        rotateAnimation.start();

        return () => {
            rotateAnimation.stop();
        };
    }, []);

    const interpolatedRotation = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.loader, { transform: [{ rotate: interpolatedRotation }] }]} />
            <Text>Your App Content</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loader: {
        width: 50,
        height: 50,
        borderWidth: 4,
        borderRadius: 25,
        borderTopColor: 'red',
        borderBottomColor: 'blue',
        borderLeftColor: 'green',
        borderRightColor: 'yellow',
    },
});

export default CustomLoader;
