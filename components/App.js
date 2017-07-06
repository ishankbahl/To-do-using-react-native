import React,{Component} from "react";
import {View} from "react-native";
import Title from "./Title";
import Input from "./Input";
import List from "./List";

class App extends Component{

    state={
        todos:['Click to remove', 'Learn React Native', 'Write Code', 'Ship App']
    }

    onAddTodo=(text)=>{
        const { todos } = this.state;
        this.setState({
            todos:[text,...todos]
        });
    }

    onRemoveTodo=(index)=>{
        const {todos}=this.state;
        this.setState({
            todos:todos.filter((todo,i)=>i!==index)
        });
    }

    render(){
        const {todos} = this.state;
        return(
            <View>
                <Title>
                    To-Do List
                </Title>
                <Input
                    placeholder={"Type a todo , then hit enter . "}
                    onSubmitEditing={this.onAddTodo}
                />
                <List
                    list={todos}
                    onPressItem={this.onRemoveTodo} 
                />
            </View>
        );
    }
}

export default App;