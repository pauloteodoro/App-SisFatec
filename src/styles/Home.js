import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor : "#6b46e5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    color: "#000000"
  },
  buttons: {
    width: 200,
    height: 40,
    
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 90,
    marginTop: 5
  },
  
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold"
  },
  logo:{
      
    width:200,
    height : 80,
    marginVertical:100
      
  },

  input:{
    marginTop:30 ,
    padding :10,
    width:250,
    height:40,
    alignItems:'center',
    backgroundColor :'#f5f5f5',
    fontSize: 16,      
    borderRadius: 170,  
  },

  esqueceu:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10
  },

  botao:{
    width:100,
    height:35,
    backgroundColor:'#a2a2a2',
    marginTop:200,
    marginVertical:100,
    borderRadius:90,
    alignItems:'center',
    justifyContent:'center',
  },

  textoBotao:{
    fontSize: 16,
    
    marginVertical:100,
   }
  
});

export default styles;
