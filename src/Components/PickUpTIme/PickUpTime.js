import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';


const PickUpTime =(props)=>{
return(
    <Auxiliary>
<label>Pickup Time</label>
<select className="form-control">
<option>12:00</option>
<option>13:00</option>
<option>14:00</option>
<option>15:00</option>
<option>16:00</option>
</select>
</Auxiliary>


)


}
export default PickUpTime