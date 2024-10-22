import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View,TouchableOpacity ,ScrollView} from "react-native";
import { SafeAreaView } from "react-native";


interface Item{
  name:string,
  email:string,
  id:number
}

export default function Index() {

let [user,setUser] =useState <[{}]|''>('');
let [err,setErr] = useState(false)
let [loading,setLoading] = useState(true)

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    // console.log(json)
    setUser(json)
  }).catch((err)=>{
setErr(true)
  }).finally(()=>{
    setLoading(false)
  })


},[])

  return (
    <ScrollView>
      <Text style={styles.usertxt}>User App</Text>

      {loading && <Text style={styles.loading}>Loading...</Text>}

{err && <Text>Error occured</Text>}

   {user && user.map((item :Item)=>{
    return  <View key={item.id} style={styles.item}>
    <Text style={styles.title}>Name: {item.name} </Text>
    <Link href={`/details/${item.id}`}  style={styles.btn}><Text  style={styles.cbtn}><Text>Details</Text></Text></Link> 
  </View>

   })}
   

   
   
    </ScrollView>
  )
}


const styles = StyleSheet.create({

  usertxt:{
    textAlign:"center",
    fontSize:40,
    margin:10
  },container: {
    flex: 1,
    marginTop: 0,
    
  },
  btn:{
    width:100,
    textAlign:"center",
    backgroundColor:"black",
    // height:30,
    padding:15,
    borderRadius:15,
    marginRight:2
    
    
  },
  cbtn:{
  color:"white",

},
  item: {
    backgroundColor: '#f38a3f',
    padding: 40,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:30,
    flexDirection:"row",
    justifyContent:"space-around",
    flexWrap:"wrap",
    alignItems:"center",
    
  },
  title: {
    fontSize: 32,
  },
loading:{
  flex:1,
  justifyContent:"center",
  alignItems:"center",
  fontWeight:'bold',
  fontSize:50,
  textAlign:"center"
}
})








