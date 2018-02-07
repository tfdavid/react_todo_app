import React from 'react';

export default props=>{
    let color = props.completed?'red':''
    return (
        <li className="collection-item"> 
            <div className="row">
                <div className={`col s6 ${color}`} onClick={props.complete}>
                        {props.title}
                </div> 
                <div className="col s6 right-align">
                        <button onClick={props.delete} className="btn btn-floating z-depth-3 red">
                            <i className="material-icons">delete</i>
                        </button>
                </div>
            </div>
        </li>
    )

}