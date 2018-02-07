import React, { Component } from 'react';
import ListItem from './list_item';

class TodoList extends Component{

    render(){
        const listItems = this.props.list.map((v,i)=>{
            // console.log(v);
            return <ListItem completed={v.complete} complete={()=>{this.props.complete(v._id)}} key={i} className='collection-item' title={v.title} delete={()=>{this.props.delete(v._id)}}/>
        })
        return (
            <div>
                  <ul className="collection">{listItems}</ul>
            </div>
        )

    }
}

export default TodoList;