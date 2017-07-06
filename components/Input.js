import React,{Component} from "react";
import {TextInput,StyleSheet} from "react-native";

class Input extends Component{

    state={
        text:""
    }

    onChangeText = (text) => this.setState({text});

    onSubmitEditing = () => {
        const {text} =this.state;
        const {onSubmitEditing}=this.props;
        if(!text)
            return;
        onSubmitEditing(text);
        this.setState({text:""});
    }

    render(){
        const {text}=this.state;
        const {placeholder}=this.props;
        return(
            <TextInput
                style={styles.input}
                value={text}
                placeholder={placeholder}
                onChangeText={this.onChangeText}
                onSubmitEditing={this.onSubmitEditing}
            />
        );
    }
}

const styles=StyleSheet.create({
    input:{
        padding:15,
        height:50
    }
});

export default Input;