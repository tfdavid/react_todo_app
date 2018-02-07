import 'materialize-css/dist/css/materialize.min.css'
import React, { Component } from 'react';
import TodoList from './todo_list';
import AddForm from './add_form.js';
import todoData from '../assets/data'

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            list: todoData,

        }
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this)
    }

    addItem(item){
        this.setState({
            list: [item, ...this.state.list]
        })
    }

    deleteItem(index){
        const newList= [...this.state.list]

        newList.splice(index,1);

        this.setState({
            list:newList
        });

    }

    render(){
        const { list } = this.state;
        return (
            <div className='container'>
                <h1 className="center-align">To Do App</h1>
                <AddForm add={this.addItem}/>
                <TodoList list={list} delete={this.deleteItem}/>
            </div>

        )
    }
}

export default App;
