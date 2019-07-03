import React from 'react'

const ListInput =(props)=>{
return(
    <table className="table table-responsive table-bordered">
        <tbody>
    <tr>
       <td>Title</td>
       <td>Author</td>
       <td>Price</td>
    </tr>
    <tr>
        {props.TitleHandler}
        {props.AuthorHandler}
        {props.PriceHandler}
    </tr>

    </tbody>
    </table>
)


}
export default ListInput