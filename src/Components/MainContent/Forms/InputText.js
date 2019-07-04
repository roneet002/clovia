import React from 'react'

const InputText =(props)=>{
return(
<div className="form-group">
<input type="text" name={props.name} placeholder={props.plname} />

</div>

)

}
export default InputText