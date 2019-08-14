import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';


const DropTime =(props)=>{
return(
    <Auxiliary>
<label>{props.label}</label>
<select className="form-control" onChange={props.DropTimeValue} value={props.value}>
<option>12:00</option>
<option>13:00</option>
<option>14:00</option>
<option>15:00</option>
<option>16:00</option>
</select>
</Auxiliary>



)


}
export default DropTime