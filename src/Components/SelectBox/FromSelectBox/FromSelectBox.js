import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';


const FromSelectBox =(props)=>{
return(

<Auxiliary>
<label>{props.label}</label>
<select className="form-control" value={props.value} onChange={props.FromselectValue}>
<option value="From">From</option>
<option value="car1">Car1</option>
<option value="car2">Car2</option>
<option value="car3">Car3</option>
</select>
</Auxiliary>

)
}
export default FromSelectBox;


