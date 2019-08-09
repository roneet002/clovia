import React,{Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary';



class ToSelectBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  
        value : 'select'
 }
    }
   
    selectBoxHandler=(e)=>{
    this.setState({
    value:e.target.value
    })
    }

    render() { 
        return (  
<Auxiliary>
<label>To</label>
<select className="form-control" value={this.state.value} onChange={this.selectBoxHandler.bind(this)}>
<option value="car1">plane1</option>
<option value="car2">plane2</option>
<option value="car3">Plane3</option>
</select>
</Auxiliary>

        );
    }
}

export default ToSelectBox;


