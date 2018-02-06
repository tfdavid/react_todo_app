import React, { Component } from 'react';

class TodoList extends Component{

    render(){
        const listItems = this.props.list.map((v,i)=>{
            return <li key={i} className='collection-item'>{v.title}</li>
        })
        return (
            <div>
                  <ul className="collection">{listItems}</ul>
            </div>
        )

    }
}

export default TodoList;