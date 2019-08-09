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
        super(props);
        this.state = {  }
    }
    submitHandler = (e)=>{
alert('asdgasgd')
e.preventDefault()


    }

    render() { 
        return (  
          <Auxiliary>
            
       <form onSubmit ={this.submitHandler.bind(this)} className="text-center">
        <div className="row">
        <div className="col-md-2 col-sm-12 col-xs-12 form-group"><FromSelectBox/></div>
        <div className="col-md-2 col-sm-12 col-xs-12 form-group"><ToSelectBox /></div>
        <div className="col-md-2 col-sm-12 col-xs-12 form-group"><CalenderSelect /></div>
        <div className="col-md-2 col-sm-12 col-xs-12 form-group"><CalenderSelect /></div>
        <div className="col-md-2 col-sm-12 col-xs-12 form-group"><PickUpTime /></div>
        <div className="col-md-2 col-sm-12 col-xs-12 form-group"><DropTime /></div>
        </div>
        <button className="btn btn-primary w-25">Submit</button>
        </form>

            </Auxiliary>
        )
    }
}
 
export default FormTour;