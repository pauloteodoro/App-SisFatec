import React, { Component } from "react";
import {
  Text,
  View,
  Image,  
  TouchableOpacity,
  StatusBar
} from "react-native";
import styles from "../styles/MainStyles";
import Icon from "react-native-vector-icons/FontAwesome5";

//Icon


export default class Cadastrar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      pass: "",
      name: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

        <TouchableOpacity
          style={styles.botao}
          onPress ={() => {this.props.navigation.navigate("NotasFrequencia")}}
        >
          <Text  style={styles.textoBotao}>Notas E Frequência       

          </Text>
          
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress ={() => {this.props.navigation.navigate("NotasFrequencia")}}
        >
          <Text  style={styles.textoBotao}>Biblioteca
          
        
          
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress ={() => {this.props.navigation.navigate("Cadastrar")}}
        >
          <Text  style={styles.textoBotao}>Secretaria
          
         

          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress ={() => {this.props.navigation.navigate()}}
        >
          <Text  style={styles.textoBotao}>Perfil
          
          
          </Text>
        </TouchableOpacity>

        

        

      

        

        
      </View>
    );
  }
}
