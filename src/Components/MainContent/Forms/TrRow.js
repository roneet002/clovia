import React from 'react'
const TrRow =(props)=>{
return(

    <tr>
       <td> {props.TitleHandler}</td>
        <td>{props.AuthorHandler}</td>
        <td>{props.PriceHandler}</td>
        <td><button type="button" onClick={props.DeleteHandler}>Close</button></td>
    </tr>

)


}
export default TrRow