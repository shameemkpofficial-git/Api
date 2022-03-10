import React, { Component, useState } from "react";
import { useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
} from "react-native";
import axios from "axios";

function Apps() {
    const [Data, setData] = useState()
    const url = 'https://api.sampleapis.com/coffee/hot';

    const getAxiosData = async () => {
        try {
            const res = await fetch("https://api.sampleapis.com/wines/reds");
            let json = await res.json();
            console.log(json);
            console.log("abc");
            setData(json.data)
        } catch (error) {
            console.log("error is", error);
            console.log("123");
        }
    };
    useEffect(() => {
        getAxiosData();
    }, []);


    const renderItem = ({ item }) => (
        <View style={{ flex: 1, backgroundColor: 'black', width: "100%", height: '100%' }}>
            <Text style={{ fontSize: 25, color: 'green' }}>{item.title}</Text>
        </View>
    )
    console.log("asdf", Data)

    return (
        <View style={styles.MainContainer}>
            <FlatList
                data={Data}
                renderItem={item => renderItem(item)} />

            {/* {
	Data.map(item=><Text>{item.title}</Text>)
} */}



        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    }
})

export default Apps;