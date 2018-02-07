import 'materialize-css/dist/css/materialize.min.css'
import React, { Component } from 'react';
import axios from 'axios';
import TodoList from './todo_list';
import AddForm from './add_form.js';
import todoData from '../assets/data'

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=nottaylorskey';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            list: [],

        }
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this)
        this.toggleComplete=this.toggleComplete.bind(this);
    }
    componentDidMount(){
        this.getData();
    }

    getData(){
        axios.get(`${BASE_URL}/todos${API_KEY}`).then(res=>{
            // console.log('res: ', res)
            this.setState({
                list: res.data.todos
            })
        })
    }

    addItem(item){
        axios.post(`${BASE_URL}/todos${API_KEY}`, item).then(res=>{
            this.getData();
        })
    }

    deleteItem(id){
        // console.log('delete id:', id)
        axios.delete(`${BASE_URL}/todos/${id+API_KEY}`).then(res=>{
            console.log('deleteres: ',res)

            this.getData();

        })
    }
    toggleComplete(id){
        axios.put(`${BASE_URL}/todos/${id+API_KEY}`).then(res=>{
            console.log('deleteres: ',res)
            
            this.getData();

        })

    }

    render(){
        const { list } = this.state;
        return (
            <div className='container'>
                <h1 className="center-align">To Do App</h1>
                <AddForm add={this.addItem}/>
                <TodoList list={list} delete={this.deleteItem} complete={this.toggleComplete}/>
            </div>

        )
    }
}

export default App;
