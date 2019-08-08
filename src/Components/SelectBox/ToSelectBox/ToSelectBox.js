import React, {Component} from 'react'
class ToSelectBox extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        Tovalue: 'toSelectValue'
        }
    }
ToSelectBoxValue = (e)=>{
this.setState({
Tovalue : e.target.value

})

}

    render() { 
        return (  
<div>

    <select value={this.state.value} onChange={this.ToSelectBoxValue.bind(this)}>
    <option>plane 1</option>
    <option>plane 1</option>
    <option>plane 1</option>
    </select>
</div>




        );
    }
}
 
export default ToSelectBox;