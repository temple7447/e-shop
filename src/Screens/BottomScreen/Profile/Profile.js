import { StyleSheet, Text, View, Image, TouchableOpacity , Button, Dimensions, Alert} from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather, AntDesign, Ionicons, Octicons, MaterialCommunityIcons, Entypo, MaterialIcons } from '@expo/vector-icons';
import { UserContext } from '../../../AppProvider'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native'
import Modal from "react-native-modal";
import axios from 'axios'

const Width = Dimensions.get("window").width



const Profile = () => {
  const storage = getStorage();
const navigation = useNavigation()
const [selectedImage, setSelectedImage] = useState(null);
  const { name, info, setChange, Logout, change, user } = useContext(UserContext)
  const [changeme, setChangeMe ] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);


  const [imageUri, setImageUri] = useState(null);

  const openImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      HandleUploadimage(result.assets[0].uri);
    }
  };

  const handleCameraLaunch = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      HandleUploadimage(result.assets[0].uri);
    }
  };

  // const uriToBlob = (uri) => {
  //   return new Promise((resolve, reject) => {
  //      const xhr = new XMLHttpRequest()
  //      xhr.onload = function () {
  //        // return the blob
  //        resolve(xhr.response)
  //      }
  //      xhr.onerror = function () {
  //        reject(new Error('uriToBlob failed'))
  //      }
  //      xhr.responseType = 'blob'
  //      xhr.open('GET', uri, true)
   
  //      xhr.send(null)})}

       const HandleUploadimage = async (uri) => {
Alert.alert("we are undergoing updating, please try again later")
      
        // const blobFile = await uriToBlob(uri);
        // console.log(blobFile);
        // const storageRef = ref(storage, `ShopImage/${blobFile?.name}`);
        // try {
        //   const uploadTask = uploadBytesResumable(storageRef, blobFile);
          
        //   uploadTask.on('state_changed',
        //   (snapshot) => {
        //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //     console.log('Upload is ' + progress + '% done');
        //     switch (snapshot.state) {
        //       case 'paused':
        //         console.log('Upload is paused');
        //         break;
        //       case 'running':
        //         console.log('Upload is running');
        //         break;
        //     }
        //   }, 
        //   (error) => {
        //     // A full list of error codes is available at
        //     // https://firebase.google.com/docs/storage/web/handle-errors
        //     switch (error.code) {
        //       case 'storage/unauthorized':
        //         // User doesn't have permission to access the object
        //         break;
        //       case 'storage/canceled':
        //         // User canceled the upload
        //         break;
        
        //       // ...
        
        //       case 'storage/unknown':
        //         // Unknown error occurred, inspect error.serverResponse
        //         break;
        //     }
        //   }, 
        //   () => {
        //     // Upload completed successfully, now we can get the download URL
        //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //       console.log('File available at', downloadURL);
        //       setImageUri(downloadURL);
        //     });
        //   }
        // );
        //   // You can set the image URL in your state here if needed
        
        // } catch (err) {
        //   console.error(err);
        // }
      };
  
      const id = info[0]?._id

      const ModelRender = ()=>{
        return (
          <View>
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello !</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>You are not login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> 
      
      </View>
        )
      }


// console.log(selectedImage)
// useEffect(()=>{

//   axios.put("https://charming-cod-gaiters.cyclic.app/UpdateProfile",{ imageUri ,id })
// },[imageUri])

const HandleOrder = ()=>{
  if(user){
    navigation.navigate("Orders")
  }else{
    navigation.navigate("Login")
  }

}
const HandleAddress = ()=>{
  if(user){
    navigation.navigate("Address")
  }else{
    navigation.navigate("Login")
  }

}

  return (
    <SafeAreaView className="flex-1 px-5" >
      <View className="flex-row justify-between py-6">
        <Text style={{ fontWeight: "800", fontSize: RFValue(15) }}>Name of Company</Text>
        <Feather name="search" size={RFValue(20)} color="black" />
      </View>
      <TouchableOpacity className="flex-row my-2 justify-between items-center">
      <View className="flex-row gap-6 items-center">
      <TouchableOpacity onPress={()=> setChangeMe(!changeme)} >
          <Ionicons name="person-circle" size={RFValue(60)} color="black" />
          <Octicons style={{position:"absolute", bottom:0, right:0}} name="image" size={24} color="black" />
          </TouchableOpacity>
          <View> 
          <Text style={{ fontWeight: "800", fontSize: RFValue(15) }}>Hi {info[0]?.firstName}</Text>
          <Text><Text>{info[0]?.email}</Text></Text>
        </View>
        </View>
        {
          info.length > 0 &&   <AntDesign name="right" size={RFValue(20)} color="black" />
        }
      
      </TouchableOpacity>



      <View>
        <Text style={{ fontWeight: "800", fontSize: RFValue(15) }}>Account</Text>
        <TouchableOpacity className="flex-row my-2 justify-between p-6 rounded-2xl items-center" onPress={HandleOrder} style={{    backgroundColor: 'rgba(169, 154, 153, 0.4)',}}>
          <View className="flex-row gap-4 items-center">
            <MaterialCommunityIcons name="order-bool-descending-variant" size={24} color="white" />
            <Text style={{ fontWeight: "800", fontSize: RFValue(15) }}>Order</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row my-2 justify-between p-6 rounded-2xl items-center" onPress={HandleAddress} style={{    backgroundColor: 'rgba(169, 154, 153, 0.4)',}}>
          <View className="flex-row gap-4 items-center">
            <Entypo name="address" size={24} color="white" />
            <Text style={{ fontWeight: "800", fontSize: RFValue(15) }}>Address</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity  className="flex-row my-2 justify-between p-6 rounded-2xl items-center" style={{    backgroundColor: 'rgba(169, 154, 153, 0.4)',}}>
          <View className="flex-row gap-4 items-center">
            <MaterialIcons name="payment" size={24} color="white" />
            <Text style={{ fontWeight: "800", fontSize: RFValue(15) }}>Payment</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
    
      <Modal animationInTiming={1000} animationOutTiming={1000} 
        onBackdropPress={() => setChangeMe(false)}
      isVisible={changeme}>
        <View className="flex-1/2">
        <View style={{ marginTop: 20 }}>
        <Button title="Choose from Device" onPress={openImagePicker} />
      </View>
      <View style={{ marginTop: 20, marginBottom: 50 }}>
        <Button title="Open Camera" onPress={handleCameraLaunch} />
      </View>
 
        </View>
      </Modal>
    <ModelRender />
      {selectedImage && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
{
  user ? (    <TouchableOpacity onPress={Logout} className="flex-row my-32 justify-center p-6 rounded-2xl items-center" style={{    backgroundColor: 'rgba(169, 154, 153, 0.4)',}}>
          <View className="flex-row gap-4 items-center">
            <AntDesign name="logout" size={24} color="white" />
            <Text style={{ fontWeight: "800", fontSize: RFValue(15) }}>Logout</Text>
          </View>
          </TouchableOpacity>) : (
          <View className="flex-row justify-around">
<TouchableOpacity onPress={()=> navigation.navigate("SignUp")} className="flex-1/2" style={{backgroundColor:'red',width:Width/3, borderRadius:5}}>
  <Text style={{fontSize:RFValue(15), color:'white', textAlign:'center', padding:10}} >Signup</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("Login")} className="flex-1/2" style={{backgroundColor:'red',width:Width/3, borderRadius:5}}>
  <Text style={{fontSize:RFValue(15), color:'white', textAlign:'center', padding:10}}>Signin</Text>
</TouchableOpacity>
          </View>
          )
}
    

      
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
