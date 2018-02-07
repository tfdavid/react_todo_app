import React, { Component } from 'react';
import ListItem from './list_item';

class TodoList extends Component{

    render(){
        const listItems = this.props.list.map((v,i)=>{
            return <ListItem key={i} className='collection-item' title={v.title} delete={()=>{this.props.delete(i)}}/>
        })
        return (
            <div>
                  <ul className="collection">{listItems}</ul>
            </div>
        )

    }
}

export default TodoList;