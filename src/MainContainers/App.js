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
// import MainForm from '../Components/MainContent/Forms/MainForm'
 import MainFormNew from '../Components/MainContent/Forms/MainFormNew'
class App extends Component {
    state={
        Persons: [
            { id: 1, name: 'Amit Kumar', age: 27 },
            { id: 2, name: 'Mady', age: 30 },
            { id: 3, name: 'Vinay', age: 35 },
            { id: 4, name: 'Bilal', age: 32 }
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
              {/* <MainForm/> */}
              <MainFormNew />
                 <br /> <br /> <br /> <br /> <br />
                 </div>

             
            
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