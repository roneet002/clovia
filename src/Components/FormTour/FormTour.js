import React, {Component} from 'react'
import Auxiliary from '../../hoc/Auxiliary';
import FromSelectBox from '../SelectBox/FromSelectBox/FromSelectBox';
import ToSelectBox from '../SelectBox/ToSelectBox/ToSelectBox';
import CalenderSelect from '../CalenderSelect/CalenderSelect';
import CalenderReturn from '../CalenderSelect/CalenderReturn'
import PickUpTime from '../PickUpTime/PickUpTime'
import DropTime from '../DropTime/DropTime';
import './FormTour.css'
import ListingResult from '../ListingResult/ListingResult';
// import Calendar from 'react-calendar'
// import Calendar from 'react-input-calendar'


class FormTour extends Component {
    constructor(props) {
        super(props)
        this.FromselectValue = this.FromselectValue.bind(this);
        this.ToSelectBox = this.ToSelectBox.bind(this);
        this.PickUpTimeValue = this.PickUpTimeValue.bind(this);
        this.DropTimeValue = this.DropTimeValue.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.ReturnValue = this.ReturnValue.bind(this);
        
        this.state = {
            FromselectValue:'FromValue',
            ToSelectBox : 'ToValue',
            DepartureValue : 'DepartureValue',
            PickUpTimeValue : 'PickTime',
            DropTimeValue : 'DropTime',
            date: new Date(),
            dateNew: new Date(),
            SubmitClickHandler: false
       


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

 
    PickUpTimeValue=(e)=>{
        this.setState({
            PickUpTimeValue:e.target.value
            })
    }
    DropTimeValue=(e)=>{
        this.setState({
            DropTimeValue:e.target.value
            })
    }
    handleChange(date) {
        this.setState({
          date: date
        });
      }

      ReturnValue(date) {
        this.setState({
            dateNew: date
        });
      }
    submitHandler = (e)=>{
        this.setState({SubmitClickHandler: true});
        console.log(this.state.FromselectValue)
        console.log(this.state.ToSelectBox)
        console.log(this.state.date)
        console.log(this.state.dateNew)
        console.log(this.state.PickUpTimeValue)
        console.log(this.state.DropTimeValue)
  e.preventDefault()
        
    }
 


    render() { 
        let button;
        const SubmitClickHandler = this.state.SubmitClickHandler;
        if (SubmitClickHandler) {
            button = <ListingResult />;
          }
        
            return (  
         
          <Auxiliary>     
    
        <form onSubmit ={this.submitHandler.bind(this)} className="text-center">
        <div className="row">
        <div className="col-md-2 col-sm-12 col-xs-12 form-group">
       <FromSelectBox FromselectValue={this.FromselectValue}  value={this.state.FromselectValue}
            label="From"/>
            </div>
        <div className="col-md-2 col-sm-12 col-xs-12 form-group">
            <ToSelectBox ToSelectBox={this.ToSelectBox} value={this.state.ToSelectBox}
            label="To" />
            </div>
        <div className="col-md-2 col-sm-12 col-xs-12 form-group">

         <CalenderSelect selected={this.state.date} handleChange={this.handleChange}
            label="Departure"/>
            </div>
        <div className="col-md-2 col-sm-12 col-xs-12 form-group">
        <CalenderReturn selected={this.state.dateNew} ReturnValue={this.ReturnValue}
        label="To"/>
        </div>

        <div className="col-md-2 col-sm-12 col-xs-12 form-group">
            <PickUpTime PickUpTimeValue = {this.PickUpTimeValue} value={this.state.PickUpTimeValue}
            label="Pick Time"  />
            </div>
        <div className="col-md-2 col-sm-12 col-xs-12 form-group">
            <DropTime DropTimeValue={this.DropTimeValue} value={this.state.DropTimeValue}
            label="Drop Time"/>
            </div>
        </div>
        <button className="btn btn-primary w-25">Submit</button>
        </form>

{button}


  


       
        
        </Auxiliary>
        )
    }
}
 
export default FormTour;