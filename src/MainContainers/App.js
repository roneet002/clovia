import React, { Component } from 'react';
import Cockpit from '../Components/Cockpit'
import './App.css'
import { NavLink, Route, BrowserRouter as Router } from 'react-router-dom'
import TopBar from '../Components/TopBar/TopBar'
import MainContent from '../Components/MainContent/MainContent'
import Product from '../Components/Product';
import About from '../Components/About'
import Home from '../Components/Home'
import Contact from '../Components/Contact'
import InputText from '../Components/MainContent/Forms/InputText'
class App extends Component {
    state={
        Persons: [
            { id: 1, name: 'Amit Kumar', age: 27 },
            { id: 2, name: 'Mady', age: 30 },
            { id: 3, name: 'Vinay', age: 35 },
            { id: 4, name: 'Bilal', age: 32 }
        ],
        Placeholder: [
            {plname:'Title'},
            {plname:'Author'},
            {plname:'Price'},
        ],
        showCard: false
    }
    cardHideShowHandler=() => {
        let showCard=!this.state.showCard
        this.setState({
            showCard
        })
    }
    nameChangeHandler=(event, id) => {
        const PersonIndex=this.state.Persons.findIndex(p => {
            return p.id === id
        })

        const Person=this.state.Persons[PersonIndex]
        Person.name=event.target.value

        const PersonsState=[...this.state.Persons]
        PersonsState[PersonIndex]=Person
        this.setState({
            PersonsState: PersonsState
        })
    }

    DeleteHandler=(evt) => {
        let DelPerson=this.state.Persons
        DelPerson.splice(evt, 1)
        if (DelPerson.length === 0) {
            alert('are you sure you want to delete this')

        }
        this.setState({
            DelPerson: DelPerson
        })
    }

    SubmitHandler=()=>{
        alert('asdgasgd')
    }

    render() {

        let letPersonnew=null
        if (this.state.showCard) {
            letPersonnew=( < div >
                <Cockpit Persons={ this.state.Persons }
                DeleteHandlerMain={ this.DeleteHandler }
                nameChangeHandlerMain={ this.nameChangeHandler }
                /> </div>
            )
        }
        return (
        <div className="App">
            <div className="text-center">
                <form className="text-center" onSubmit={this.SubmitHandler}>

            {
                this.state.Placeholder.map((pl, index)=>{

                    return(
                        <InputText plname={pl.plname} key={index} classNam=" w-25" />
                       
                    )
                }


                )}
                 <button className="btn btn-primary w-25">Add</button>
                 </form>
                 <br /> <br /> <br /> <br /> <br />
                 </div>

             {/* <InputText plname={this.state.Placeholder[0].plname}/> */}
             
            
             <TopBar />
            <MainContent />
            <Router>
            <div className="navbar navbar-inverse">
            <ul className="nav navbar-nav">

            <li>
            <NavLink to="/" > Home </NavLink>
            </li>
            <li>
            <NavLink to="/About" > About </NavLink>
            </li>
            <li>
            <NavLink to="/Product" > Product </NavLink>
            </li>
            </ul>

            </div>
            <Route exact path="/" component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/Product/" component={Product} />
            <Route path="/Contact/" component={Contact} />
            </Router> 


            <button type="button"
            className="BtnColor btn btn-primary"
            onClick={ this.cardHideShowHandler } > Toggle Button </button>
            { letPersonnew }
           
            </div>
        )
    }
}


export default App;