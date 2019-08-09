import React, {Component} from 'react'
import "./ListingResult.css"
import { faChair, faBriefcase, faFan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class ListingResult extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

        <div className="border-default card overflow-hidden">
      
       <div className="row">
       <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 p-lg-5">
       <img src={process.env.PUBLIC_URL + "/images/hatchback.png"} alt="CarImage"/>
       </div>
       <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-lg-5">
       <div className="card-title">Indica, Swift </div>
       <span>Hatchback</span>
            <div><strong className="float-left">Facilities : </strong>
            <div className="float-left clearfix"><span className="col-2"><FontAwesomeIcon icon={faChair} /> 4 Seater</span><span className="col-2"><FontAwesomeIcon icon={faBriefcase} /> 1 Bag</span> <span className="col-2"><FontAwesomeIcon icon={faFan} /> AC</span></div>
       </div>

       </div>
<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 rftColumns overflow-hidden p-lg-5">
<div className="card-Price">₹ 500</div>
<button type="submit" className="btn btn-primary">Book Now</button>

</div>

       </div>
        </div>

         );
    }
}
 
export default ListingResult;