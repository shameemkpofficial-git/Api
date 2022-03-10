import React, {useState,useEffect} from 'react'
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
export default function demo() {
  

  const [data, setData] = useState();
  const getAxiosData = async () => {
    try{
      const response = await fetch('https://api.sampleapis.com/coffee/hot')
      const json = await response.json();
      await setData(json);
    }catch(error){
      console.log("error is ", error);
    }
  }
  useEffect(()=> {
    getAxiosData();
  },[])
  return(
    <SafeAreaView>
      {data &&(
        <FlatList
        data={data}
        renderItem={({item}) => {
          return(
            <View>
              <Text>{item.title}</Text>
            </View>
          )
        }}
        keyExtractor={item => item.id}></FlatList>
      )}
    </SafeAreaView>
  );
};
