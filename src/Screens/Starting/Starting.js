import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity ,BackHandler, ScrollView} from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StartingImage from '../../../assets/3901287.jpg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import StartingImage2 from '../../../assets/6180696.jpg'
import { Fontisto } from '@expo/vector-icons';

const topValue = Dimensions.get("screen").height


const Starting = ({ navigation }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const HandleToanotherPage = () => {
        navigation.navigate('startingpage2')
    }

    const onPageScroll = (event) => {
        const { x } = event.nativeEvent.contentOffset;
        const pageIndex = Math.round(x / Dimensions.get('window').width);
        setCurrentPage(pageIndex);
      };


    const Handleskip = () => {
        navigation.navigate('HomeMain')
    }



    const renderPage = ({text, color, image, skip}) => (
        <View style={[styles.page, { backgroundColor: color }]}>
         
         <View>
                    <Image source={image} style={styles.image} />
                </View>{
                    skip && (
                        <View style={{position:'absolute', top:"-10%", right:20,zIndex:100}}>
            <TouchableOpacity onPress={Handleskip} style={{ backgroundColor: '#F2831B', width: '100%', padding: 13, borderRadius: 10, bottom: -topValue / 7 }}>
                    <Text style={{ color: 'white', fontSize: RFValue(13), textAlign: 'center' }}>skip</Text>
                </TouchableOpacity> 

        </View>
                    )
                }
   

        <View style={{paddingHorizontal:15}}>
                    <Text style={{fontSize:RFValue(15), fontWeight:'900', textAlign:'center'}}>Order Fast</Text>
                    <Text style={{fontSize:RFValue(12), textAlign:'center',}}>{text}</Text>
                </View>
                <View style={styles.dotsContainer}>
        {[0, 1].map((index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentPage && styles.activeDot,
              index === currentPage - 1 && styles.prevDot,
              index === currentPage + 1 && styles.nextDot,
            ]}
          />
        ))}
      </View>
     
        </View>
      );


    return (
        <>
            <StatusBar style="dark" backgroundColor="#FFFFFF" />
            {/* <Carousel /> */}
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8EFDE' }}>
                
          
    <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onPageScroll}
        scrollEventThrottle={16}
        style={{ height: 100 }}
      >
        {renderPage({text:'Swift processing, speedy delivery, real-time tracking. Your time matters, satisfaction guaranteed. Experience speed and convenience.',
         color:'lightblue',
          image:StartingImage,
          skip:false,
          })}
        {renderPage({text:'Experience lightning-fast delivery that gets your products to your doorstep in record time, ensuring your satisfaction and convenience',
         color:'lightgreen',
          image:StartingImage2,
          skip:true,
          })}
        {/* {renderPage('Third page', 'lightpink')} */}
      </ScrollView>
   







            </SafeAreaView>
        </>

    )
}


export default Starting

const styles = StyleSheet.create({


    image: {
        width: wp(90),
        height: hp(40),
        top: -topValue / 7,
        resizeMode: 'contain',

    },
    page: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
      },
      dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      },
      dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'gray',
        marginHorizontal: 5,
      },
      activeDot: {
        backgroundColor: 'blue',
      },
      prevDot: {
        opacity: 0.5, // Adjust the opacity for visual distinction
      },
      nextDot: {
        opacity: 0.5, // Adjust the opacity for visual distinction
      },
      lineContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
      },
      line: {
        width: 20,
        height: 1,
        backgroundColor: 'gray',
        marginHorizontal: 5,
      },
      activeLine: {
        backgroundColor: 'blue',
      },
})