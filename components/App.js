import React,{Component} from "react";
import {View} from "react-native";
import { connect } from "react-redux";
import Title from "./Title";
import Input from "./Input";
import List from "./List";
import { actionCreators } from "../todoListRedux";

const mapStateToProps =( state ) => ({
    todos:state.todos
});

class App extends Component{

    onAddTodo=(text)=>{
        const { dispatch } = this.props;
        dispatch(actionCreators.add(text));
    }

    onRemoveTodo=(index)=>{
        const { dispatch } = this.props;
        dispatch(actionCreators.remove(index));
    }

    render(){
        const {todos} = this.props;
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

export default connect(mapStateToProps)(App);