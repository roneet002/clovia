import React,{Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

class FromSelectBox extends Component {
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
<label>From</label>
<select className="form-control" value={this.state.value} onChange={this.selectBoxHandler.bind(this)}>
<option value="car1">Car1</option>
<option value="car2">Car2</option>
<option value="car3">Car3</option>
</select>
</Auxiliary>

        )}
}


export default FromSelectBox;


