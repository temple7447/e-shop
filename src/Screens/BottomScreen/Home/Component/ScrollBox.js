import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Banner } from '../../../../Data/Banner';

const ScrollBox = () => {
    const width = Dimensions.get('window').width;

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width / 3}
                autoPlay={true}
                data={Banner} // Use the Banner array as the data source
                scrollAnimationDuration={1000}
                // onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        {/* Render the image using the item's imageUrl */}
                        <Image
                            source={{ uri: item.imageUrl }}
                            style={{ width: '100%', height: '100%' }}
                            resizeMode="cover"
                        />
                    </View>
                )}
            />
        </View>
    );
};

export default ScrollBox;
