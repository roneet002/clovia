import React, { Component } from 'react'
// import InputText from '../Forms/InputText'
import ListInput from './ListInput'
export default class MainFormNew extends Component {
    constructor(props){
        super(props)
        this.state =  {
                       Title:'',
                       Author:'',
                       Price:''
                    }
           
        
    }


    TitleHandler=(evt)=>{
    this.setState({
                Title:evt.target.value
        })
    }
    AuthorHandler=(evt)=>{
        this.setState({
                    Author:evt.target.value
        })
    }
        PriceHandler=(evt)=>{
            this.setState({
                        Price:evt.target.value
             })
        
    }

    SubmitHandler=(evt)=>{
        evt.preventDefault()
     this.setState({
        TitleNew: this.state.Title,
        AuthorNew: this.state.Author,
        PriceNew: this.state.Price
     })

    }


    render() {
        return (
            <div className="text-left">
            <form onSubmit={this.SubmitHandler}>
                <div className="form-group">
                <input type="text" className="w-25" placeholder="Enter Title" value={this.state.Title} onChange={(e)=>{this.TitleHandler(e)}} name={this.state.Title}/>
                </div>
                <div className="form-group">
                <input type="text" className="w-25" placeholder="Enter Author" value={this.state.Author} onChange={(e)=>{this.AuthorHandler(e)}} name={this.state.Author}/>
                </div>
                <div className="form-group">
                <input type="text" className="w-25" placeholder="Enter Price" value={this.state.Price} onChange={(e)=>{this.PriceHandler(e)}} name={this.state.Price}/>
                </div>
             <button className="btn btn-primary w-25" type="submit">Add</button>
                </form>
          
        
        <ListInput
        TitleHandler = {this.state.TitleNew}
        AuthorHandler = {this.state.AuthorNew}
        PriceHandler = {this.state.PriceNew}
         />
          
            </div>
        )
    }
}


