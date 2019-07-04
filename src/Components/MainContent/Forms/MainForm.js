import React, { Component } from 'react'
import InputText from '../Forms/InputText'
export default class MainForm extends Component {
    constructor(props){
        super(props)
        this.state =  {
            Placeholder: [
                {Title:'Title', name:'title'},
                {Title:'Author',name:'author'},
                {Title:'Price',name:'price'},
            ]
        }  
    }

    InputHandler=(evt, index)=>{
        //console.log(evt.target.value)
        this.setState({
            [evt.target.Title] : evt.target.value
            
         })
         
        }
    SubmitHandler=(evt)=>{
        evt.preventDefault()
    console.log(evt.target.Title.value)


    this.setState({

     })

    }


    render() {
        return (
            <div>
                <form className="text-center"  onSubmit={(evt)=>this.SubmitHandler(evt)}>

        {this.state.Placeholder.map((pl, index)=>{
        return(

            <InputText plname={pl.Title} name={pl.name} key={index} className="w-25"  onChange={this.InputHandler} />
        )
        }
        )}
     <button className="btn btn-primary w-25" type="submit">Add</button>
     </form>
            </div>
        )
    }
}


