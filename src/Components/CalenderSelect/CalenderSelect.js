import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

const CalenderSelect =(props)=>{
return(
<Auxiliary>
<label>{props.label}</label>
<DatePicker selected={props.selected} onChange={props.handleChange}
      />
</Auxiliary>
)


}
export default CalenderSelect