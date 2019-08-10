import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';



const ToSelectBox =(props)=> {

return (  
<Auxiliary>
<label>To</label>
<select className="form-control" value={props.value} onChange={props.ToSelectBox}>
<option value="To">To</option>
<option value="plane1">plane1</option>
<option value="plane2">plane2</option>
<option value="plane3">Plane3</option>
</select>
</Auxiliary>
);
}

export default ToSelectBox;


