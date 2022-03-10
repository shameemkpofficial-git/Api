import { View, Text,FlatList, TouchableHighlight ,Image,StyleSheet} from 'react-native'
import React,{useState,useEffect} from 'react'


const Home = () => {
  const[Data,setData]=useState(null)


  const getData=()=>{
    fetch('https://62205248ce99a7de1955f418.mockapi.io/coffee')
    .then((response)=>response.json())
    .then((response)=>{
      setData(response.data)
    }) 
  }

useEffect(() => {
  getData()
  return () => {
    
  };
}, []);

  const RenderItem=(item)=>{
    return(
      <View style={styles.mainview}>
      {/* <Image source={{uri:item.photo}} style={styles.Image}/> */}
      <View style={styles.secondvew}>
      <Text style={styles.txt1}>{item.name}</Text>
      <Text style={styles.txt2}>{item.title}</Text>
      </View>
      </View>
    
    )
  }

  return (
    <View style={{flex:1,alignItems:"center"}}>
      <FlatList data={Data} renderItem={({item})=>RenderItem(item)}/>
    </View>
  )
}
const styles=StyleSheet.create({
  mainview:{
  height:120,width:450,
  backgroundColor:"white",borderRadius:10,
  alignItems:"center",
  elevation:3,marginTop:"3%",
  flexDirection:"row",justifyContent:"center"
  },

  Image:
  {
  height:80,width:90,
  borderRadius:50,left:"15%"
  },

  secondvew:
  {height:"50%",width:"70%",
  justifyContent:"center",
  marginLeft:"10%"
  },

  txt1:
  {
    fontSize:16,
    fontWeight:"bold",
    color:"black"
  },
  txt2:
  {
    fontSize:13,
    fontWeight:"400",
    color:"black"
  }
})

export default Home