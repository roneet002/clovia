import React from 'react'
import TrRow from './TrRow'
const ListInput =(props)=>{
return(
    <table className="table table-responsive table-bordered">
        <tbody>
    <tr>
       <td>Title</td>
       <td>Author</td>
       <td>Price</td>
    </tr>
    <TrRow />
    
    </tbody>
    </table>
)


}
export default ListInput