import React, { Component } from "react";
import { View,Image,Alert, Text,StatusBar,TextInput,TouchableOpacity, } from "react-native";
import styles from "../styles/Home";
import axios from 'axios';





export default class Home extends Component {

  
  state = {
      username : '',
      passaword : '',
  }   

  autenticacao = async () =>{

    const {username , passaword} = this.state;

    //if (this.state.username == "paulo") {
    // Alert.alert(this.state.passaword)
    //} 

    this.ap();
    this.props.navigation.navigate("Cadastrar")
 
  }

  ap = async () => {
    
    await axios.get("http://192.168.10.161:3001/api/name")
    .then(response => { Alert.alert(response.data) })
    .catch((error) => Alert.alert('Erro ao recuperar os dados ' + error))
  }


  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#6b46e5" />
        
        
        <Image 
          
          style={styles.logo}         
          source={require('../assets/images/logo.png')}   
          
        />
      
        <TextInput 
          style={styles.input}
          placeholder="Login"
          value={this.state.username}
          onChangeText={ username => this.setState({username})}
           
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Senha"
          value={this.state.passaword}
          onChangeText={ passaword => this.setState({passaword})}

        />

        <TouchableOpacity
          style={styles.botao}
          onPress ={() => {
            
            //this.props.navigation.navigate("Cadastrar")
            this.autenticacao();
            }}

          
        >
          <Text  style={styles.textoBotao}>LOGIN</Text>
        </TouchableOpacity>         
        
      </View>

    );
  }
}
