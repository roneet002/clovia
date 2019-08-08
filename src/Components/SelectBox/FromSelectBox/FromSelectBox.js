import React, { Component } from 'react';
import ToSelectBox from '../ToSelectBox/ToSelectBox'
class FromSelectBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  
        value:'select'
        }
    }
    selectBoxHandler=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    
    render() { 
        return (  

<div>
<select value={this.state.value} onChange={this.selectBoxHandler.bind(this)}>
<option>Car1</option>
<option>Car2</option>
<option>Car3</option>
</select>
<ToSelectBox />

</div>
        );
    }
}
 
export default FromSelectBox
