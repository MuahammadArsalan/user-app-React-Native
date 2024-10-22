import { View, Text, Modal, Pressable, StyleSheet,SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, useFocusEffect, useLocalSearchParams, useNavigation } from 'expo-router'

interface Data{
    

        name:string,
        id:number,
        email:string
        phone:string
        street:string   
    
}

const Details = () => {

let [data ,setData] = useState<[]|''>('')
let [modal ,setModal] = useState(true)

let {id} =useLocalSearchParams()

useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setData(json)
      })
.catch((err)=>{
    console.log(err);
})
},[])




  return (
    <SafeAreaView>
      <View>

      <Text style={styles.details}>Details of {data.name}</Text>
      </View>


      <View key={data.id}>
      
      <Modal
        animationType="slide"
        transparent={true}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Name: {data.name}!</Text>
            <Text style={styles.modalText}>UserName: {data.username}!</Text>
            <Text style={styles.modalText}>Email: {data.email}!</Text>
            <Text style={styles.modalText}>Phone: {data.phone}!</Text>
            <Text style={styles.modalText}>Address:  </Text>
            <Text style={styles.modalText}>City: {data.address.city}</Text>
            {/* <Text style={styles.modalText}>Zip-Code: {data.address.zipcode}</Text> */}
            <Text style={styles.modalText}>Website: {data.website}</Text>
        
            <Pressable
              style={[styles.button, styles.buttonClose]}>
              <Link href={'/'}>
              <Text style={styles.textStyle} >Go Back</Text>
              
              </Link>
            </Pressable>
          </View>
        </View>
      </Modal>
      

      
      </View>
      


    </SafeAreaView>
  )
}




const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 92,
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
        borderRadius: 20,
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
        fontWeight:"bold"
      },
      details:{
        textAlign:"center",
        margin:10,
        fontSize:30,
        fontWeight:"bold"
      }
})

export default Details