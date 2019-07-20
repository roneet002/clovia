import React from 'react'
const Input=(props)=>{
    let Inputs="";
    switch(props.type){
        case "text":
            Inputs=<input {...props} />
            break;
        case "textarea":
            Inputs=<textarea {...props}></textarea>
            break;
        case "select":
            Inputs=<select {...props}></select>
            break;
            default:
                Inputs=<input {...props} />;
            break;
            }
            return Inputs;
}

export default Input;
