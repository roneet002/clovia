import React, {Component} from 'react'
import Auxiliary from '../hoc/Auxiliary';
import FromSelectBox from '../Components/SelectBox/FromSelectBox/FromSelectBox';
import ToSelectBox from '../Components/SelectBox/ToSelectBox/ToSelectBox';
import CalenderSelect from '../Components/CalenderSelect/CalenderSelect';
import PickUpTime from '../Components/PickUpTIme/PickUpTime';
import DropTime from '../Components/DropTime/DropTime';
import '../FormTour/FormTour.css'

class FormTour extends Component {
    constructor(props) {
        super(props)
        this.FromselectValue = this.FromselectValue.bind(this);
        this.ToSelectBox = this.ToSelectBox.bind(this);

        this.state = {
            FromselectValue:null,
            ToSelectBox : null

        }

    }
    FromselectValue=(e)=>{
        this.setState({
            FromselectValue:e.target.value
        })       
    }
    ToSelectBox=(e)=>{
        this.setState({
            ToSelectBox:e.target.value
            })
    }

    submitHandler = (e)=>{
        
        console.log(this.state.FromselectValue)
        console.log(this.state.ToSelectBox)
        e.preventDefault()
    }

    render() { 
        return (  
          <Auxiliary>            
        <form onSubmit ={this.submitHandler.bind(this)} className="text-center">
        <div className="row">
        <div className="col-md-2 col-sm-12 col-xs-12 form-group">
            <FromSelectBox FromselectValue={this.FromselectValue}  value={this.state.FromselectValue}/>
            </div>
        <div className="col-md-2 col-sm-12 col-xs-12 form-group">
            <ToSelectBox ToSelectBox={this.ToSelectBox} value={this.state.ToSelectBox} />
            </div>
        <div className="col-md-2 col-sm-12 col-xs-12 form-group">
            <CalenderSelect />
            </div>
        <div className="col-md-2 col-sm-12 col-xs-12 form-group">
            <CalenderSelect />
            </div>
        <div className="col-md-2 col-sm-12 col-xs-12 form-group">
            <PickUpTime />
            </div>
        <div className="col-md-2 col-sm-12 col-xs-12 form-group">
            <DropTime />
            </div>
        </div>
        <button className="btn btn-primary w-25">Submit</button>
        </form>
        </Auxiliary>
        )
    }
}
 
export default FormTour;