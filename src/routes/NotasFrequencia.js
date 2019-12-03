import React, { Component } from "react";
import { View,Image, Text,StatusBar,TextInput,TouchableOpacity, ScrollView} from "react-native";
import styles from "../styles/NotasFrequencia";
import { FlatList } from "react-native-gesture-handler";



export default class Home extends Component {


  buscarGrade = async () => {
    
    await axios.get("http://192.168.10.161:3001/api/partialGrade")
    .then(response => { Alert.alert(response.data) })
    .catch((error) => Alert.alert('Erro ao recuperar os dados ' + error))
  }
 

 


  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#6b46e5" />

        <ScrollView >


        <FlatList
        
          
        
        />

        


        
      
        
        
        
        
        
        </ScrollView>
      
      </View>

    );
  }
}
