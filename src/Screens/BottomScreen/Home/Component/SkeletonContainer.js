import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Skeleton from './Skeleton'

const SkeletonContainer = () => {
  return (
    <View style={styles.container}>
     <Skeleton />
     <Skeleton />
     <Skeleton />
     <Skeleton />
     <Skeleton />
     <Skeleton />
     <Skeleton />
     <Skeleton />
     <Skeleton />
    </View>
  )
}

export default SkeletonContainer

const styles = StyleSheet.create({
      container: {

        flexDirection: 'row',
        gap: 10,
        flexWrap: 'wrap',

        justifyContent: 'center',
      
   

    },
})