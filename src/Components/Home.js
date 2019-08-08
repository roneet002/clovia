import React, { Component } from 'react'
import FromSelectBox from './SelectBox/FromSelectBox/FromSelectBox'
import ToSelectBox from './SelectBox/ToSelectBox/ToSelectBox'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: 'select'
        }
    }
    onChange(e) {
        this.setState({
          value: e.target.value
        })
      }
    render() { 
        return (  

<div>
<FromSelectBox />
<ToSelectBox />
      <div className="form-group">
       
        <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
          <option value="select">Select an Option</option>
          <option value="First">First</option>
          <option value="Second">Second</option>
          <option value="Third">Third</option>
        </select>
      </div>
    
<h1>Home Page</h1>
<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</div></div>


        );
    }
}
 
export default Home;

