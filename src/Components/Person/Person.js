import React from 'react';
import '../Person/Person.css'

const Person = (props) =>{
return(
<div className="card">
   <span className="closeBtn" onClick={props.OnDeleteHandler}>X</span>   
    <input className="form-control" type="text" placeholder="Name" onChange={props.changed} value={props.name} />
    <div>My name is {props.name} and my age is {props.age} and my random number is {Math.round(Math.random(2)*3)}</div>
</div>
)
}

export default Person