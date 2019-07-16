import React, { Component } from 'react'
// import InputText from '../Forms/InputText'
// import ListInput from './ListInput'
import TrRow from  './TrRow'
export default class MainFormNew extends Component {
    constructor(props){
        super(props)
        this.state =  {
            
                       Title:'',
                       Author:'',
                       Price:'',
                       "books":[{"Title":"react","author":"deep","price":300}]
                    }
            this.inputElementRef = React.createRef()
           
        
    }
componentDidMount(){
this.inputElementRef.current.focus()

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
     console.log(this.state)
     evt.preventDefault()
     const obj={"Title":this.state.Title,"author":this.state.Author,"price":this.state.Price};
     const allbooks=this.state.books;
     allbooks.push(obj);
     this.setState({books:allbooks})
    }

    DeleteHandler=()=>{
        alert('asdgsag')
    }
    render() {
        return (
            <div className="text-left">
            <form onSubmit={this.SubmitHandler}>
                <div className="form-group">
                <input type="text" className="w-25" placeholder="Enter Title" ref={this.inputElementRef} value={this.state.Title} onChange={(e)=>{this.TitleHandler(e)}} name={this.state.Title}/>
                </div>
                <div className="form-group">
                <input type="text" className="w-25" placeholder="Enter Author" value={this.state.Author} onChange={(e)=>{this.AuthorHandler(e)}} name={this.state.Author}/>
                </div>
                <div className="form-group">
                <input type="text" className="w-25" placeholder="Enter Price" value={this.state.Price} onChange={(e)=>{this.PriceHandler(e)}} name={this.state.Price}/>
                </div>
             <button className="btn btn-primary w-25" type="submit">Add</button>
                </form>
          
        

                <table className="table table-responsive table-bordered w-100">
        <tbody className="w-100">
    <tr className="w-100">
       <td width="25%">Title</td>
       <td width="25%">Author</td>
       <td width="25%">Price</td>
       <td width="25%">Delete Row</td>
    </tr>
    {this.state.books.map((book, index)=>{

return (<TrRow
    key={index}
    TitleHandler = {book.Title}
    AuthorHandler = {book.author}
    PriceHandler = {book.price}
    DeleteHandler ={this.DeleteHandler}
      
      />)
    })}
   
    
    </tbody>
    </table>


        {/* <ListInput/> */}
          
            </div>
        )
    }
}


