import React from 'react'
import Person from '../Components/Person/Person';

const Cockpit= (props)=> props.Persons.map((personnew, index)=>{
        return(
        <Person key={personnew.id}
                name={personnew.name}
                age={personnew.age}
               OnDeleteHandler = {()=>props.DeleteHandlerMain(index)}
               changed={(event)=>props.nameChangeHandlerMain(event, personnew.id)}

        />
        )    
      })





export default Cockpit