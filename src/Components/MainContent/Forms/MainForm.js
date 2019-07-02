import React, { Component } from 'react'
import InputText from '../Forms/InputText'
export default class MainForm extends Component {
    constructor(props){
        super(props)
        this.state =  {
            Placeholder: [
                {Title:'Title'},
                {Title:'Author'},
                {Title:'Price'},
            ]
        }  
    }
    InputHandler=(evt)=>{
        console.log(evt.target.value)
        this.setState({
            Title: evt.target.value
            
         })
       
    }
    SubmitHandler=(e)=>{
        this.setState({


        })
        
        e.preventDefault()
    }


    render() {
        return (
            <div>
                <form className="text-center" onSubmit={this.SubmitHandler}>

{
    this.state.Placeholder.map((pl, index)=>{

        return(
            <InputText plname={pl.Title} key={index} classNam="w-25" value={this.state.Title} onchange={this.InputHandler} />
           
        )
    }
    )}
     <button className="btn btn-primary w-25" type="submit">Add</button>
     </form>
            </div>
        )
    }
}


