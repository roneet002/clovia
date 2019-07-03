import React from 'react'

const InputText =(props)=>{
return(
<div className="form-group">
  
<input type="text" className="w-25" value={props.value} onChange={props.onchangeHandler} name={props.plname}/>

</div>

)

}
export default InputText