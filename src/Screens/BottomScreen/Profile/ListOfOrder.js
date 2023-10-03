import { StyleSheet, Text, View, FlatList , Image} from 'react-native'
import React,{useState, useEffect} from 'react'
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import NavigationBar from '../../Component/NavigationBar';

const ListOfOrder = () => {
    const route = useRoute();
    const { ele } = route.params;
    const [data, setData] = useState([])

    // console.log(ele)


    useEffect(() => {

        axios.get('https://charming-cod-gaiters.cyclic.app/upload_Categories')
            .then((res) => { 
                // console.log(res.data)
                setData(res.data)
             })
            .catch((error) => console.log(error))
    }, [])


    const inform = data?.filter((items)=> ele.some((item2)=>item2 === items?._id))

    console.log(inform)
    
    const HandleItem = ({item})=>{
console.log(item)

return (
    <View style={styles.container}>
      <Image source={{ uri: item?.Images[0] }} style={styles.image} />
      <Text style={styles.title}>{item?.Title}</Text>
      <Text style={styles.description}>{item?.Description}</Text>
      <Text style={styles.price}>Price: ${item?.Price}</Text>
      <Text style={styles.categories}>Category: {item?.Categories}</Text>
      <Text style={styles.subCategories}>Subcategory: {item?.SubCategories}</Text>
    </View>
  );
    } 

  return (<>
  <NavigationBar />
   <View className="flex-1">
 <FlatList
        data={inform}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <HandleItem item={item} />}
      />
    </View>
  </>
 
  )
}

export default ListOfOrder

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#e0e0e0',
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'contain',
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
      marginBottom: 5,
    },
    price: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      color: 'green',
    },
    categories: {
      fontSize: 14,
      marginBottom: 5,
    },
    subCategories: {
      fontSize: 14,
    },
  });