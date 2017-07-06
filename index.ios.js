import React,{Component} from "react";
import {AppRegistry,Image,StyleSheet} from "react-native";

class myapp extends Component{
  render(){
    return(
      <Image 
        style={styles.image}
        source={{uri:"http://www.reactnativeexpress.com/logo.png"}} />
    );
  }
}

const styles=StyleSheet.create({
  image:{
    width:200,
    height:200
  },
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  box:{
    width:200,
    height:200,
    borderColor:"steelblue",
    backgroundColor:"skyblue",
    borderWidth:2,
    borderRadius:20
  }
});

AppRegistry.registerComponent("myapp",()=>myapp);