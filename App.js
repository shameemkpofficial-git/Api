import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TextInput,
    Button,
} from "react-native";

function App() {

    const [Data, setData] = useState()
    const [name, setName] = useState()
    const [age, setAge] = useState()

    const onDeleteFormHandler = async (id) => {
        if (!name.trim() || !age.trim()) {
            alert("Name or Email is invalid");
            return;
        } try {
            const response = await axios.delete("https://62205248ce99a7de1955f418.mockapi.io/user/"+id);
            if (response.status === 204) {
                alert(` You have deleted: ${JSON.stringify(response.data)}`);
                setName('');
                setAge('');
            } else {
                throw new Error("Failed to delete resource");
            }
        } catch (error) {
            alert("Failed to delete resource");
        }
    }



    //THIS POST METHOD OF AXIOS//

    const onchangeNameHandler = (name) => {
        setName(name)
    }
    const onchangeAgehandler = (age) => {
        setAge(age)
    }

    const onSubmitFormHandler = async (event) => {
        if (name == "" || age == "") {
            alert("Fill Your name and Age")
        } try {
            const response = await axios.post("https://62205248ce99a7de1955f418.mockapi.io/user", {
                name,
                age,
            });
            if (response.status == 201) {
                alert(` You have created: ${JSON.stringify(response.data)}`);
                setAge('');
                setName('');
            } else {
                throw new Error("An error occured")
            }
        } catch (error) {
            ("An error has occured in catch")
        }
    };

    // THIS IS GET METHOD //
    const getAxiosData = async () => {
        try {
            const res = await fetch("https://62205248ce99a7de1955f418.mockapi.io/user");
            let json = await res.json();

            await setData(json)
        } catch (error) {
            console.log("error is", error);
        }
    };
    useEffect(() => {
        getAxiosData();
    }, []);


    // const renderItem = ({ item }) => (
    //     <View style={{ backgroundColor: '#6FB2D2', width: "100%", height: '18%', marginTop:10 }}>
    //         <Text style={{ fontSize: 25, color: '#EEEEEE' }}>{item.title}</Text>
    //     </View>
    // )
    console.log("Data is :", Data)


    return (
        <View style={styles.MainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>User</Text>
            </View>
            <TextInput
                style={{ height: 40, marginTop: 10, borderWidth: 2, width: 170 }}
                placeholder='Enter new Name'
                value={name}
                onChangeText={onchangeNameHandler}
            ></TextInput>
            <TextInput
                style={{ height: 40, marginTop: 10, borderWidth: 2, width: 170 }}
                placeholder='Enter new Age'
                value={age}
                onChangeText={onchangeAgehandler}
            ></TextInput>
            <Text>{name}</Text>
            <Text>{age}</Text>
            <Button title="Submit"
                onPress={onSubmitFormHandler}
            ></Button>
            

            <FlatList
                data={Data}
                renderItem={({ item }) => {
                    return (
                        <View style={{ backgroundColor: '#6FB2D2', width: 250, height: 80, marginTop: 10 }}>
                            <Button title="delete"
                                onPress={ ()=>onDeleteFormHandler(item.id)}
                            ></Button>
                            {/* <View style={{backgroundColor:'black', width:190, height:60, marginTop:10}}> */}
                            <Text style={{ fontSize: 25, color: '#EEEEEE', textAlign: 'center' }}>{item.name}</Text>
                            <Text style={{ fontSize: 10, color: 'black', textAlign: 'center', marginTop: 4 }}>{item.age}</Text>
                            {/* </View> */}
                        </View>
                    )
                }}
                keyExtractor={item => item.id} />
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EEEEEE',
    },
    headerContainer: {
        height: 90,
        width: '100%',
        backgroundColor: '#EBD671'
    },
    headerText: {
        fontSize: 25,
        fontWeight: "800",
        color: '#fff',
        marginTop: '10%',
        textAlign: 'center'
    }
})

export default App;
