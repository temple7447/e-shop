import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../../../Component/NavigationBar';

const Categories = () => {
    const route = useRoute();
    const { details } = route?.params;
    const render = details.map((ele, index) => {
        const { subOptions } = ele;
    
        // Map over the subOptions object's keys and values
        const subOptionsRender = Object.entries(subOptions).map(([key, value], subIndex) => (
          <Text key={subIndex}>{key}: {value}</Text>
        ));
    
        return (
          <View key={index}>
            <Text>{ele.title}</Text>
            {subOptionsRender}
          </View>
        );
      });

  return (
    <View>
    <NavigationBar />
  
      {render}
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})