import React, { Component } from 'react';


class AddForm extends Component{
    constructor(props){
        super(props);

        this.state={
            title:'',
            details:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addItem= this.addItem.bind(this);
    
    }
    handleInputChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }
    addItem(e){
        e.preventDefault();
        console.log("form values: ", this.state)
        this.props.add(this.state);

        this.setState({
            title: '',
            details: ''
        })
    }
    
    
    render(){
        const { title, details }= this.state;

        return (
            <div className="row">
                <form className="col s12" onSubmit={this.addItem}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input name='title' type="text" placeholder='Item Title' value={title} onChange={this.handleInputChange}/>
                        </div>
                        <div className="input-field col s6">
                            <input name='details' type="text" placeholder='Item Title' value={details} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className='right'>
                        <button className="btn btn-large btn-floating pink lighten-2 z-depth-4">
                            <i className="material-icons">add_circle_outline</i>
                        </button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default AddForm