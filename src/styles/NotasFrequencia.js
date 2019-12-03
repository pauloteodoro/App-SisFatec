import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor : "#6b46e5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttons: {
    width: 200,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 5,
    marginTop: 5
  },
  buttonText: {
    color: "#0066CC",
    fontSize: 14,
    fontWeight: "bold"
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    fontSize: 16,
    borderRadius: 5,
    width: 200,
    height: 35,
    padding: 5,
    marginTop: 5
  },
  botao:{
    width:300,
    height:50,
    backgroundColor:'#fff',
    marginTop:5,
    marginVertical:50,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
  },
  textoBotao:{
    fontSize: 16,
    marginLeft :60,
    color:"#000000",
    marginVertical:100,
   },

   log : {
     marginLeft :100

   },
   icone :{
    width:20,
    height:20,

   },

   containerNotas:{

    padding : 20,
    borderRadius : 10,
    width:390,
    height:120,
    backgroundColor:"#fff",
    marginTop :10


   },

   nomeMateria:{
    fontSize: 30,
    
    color:"#000000",
    marginVertical:100,
    marginTop:40

   },

   containerfaltas:{
    fontSize: 20,
    
    color:"#000000",
    marginVertical:100,
    marginTop:80

   }
});

export default styles;
