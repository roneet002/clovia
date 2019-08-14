import React, {Component} from 'react'
import "./ListingResult.css"
import { faChair, faBriefcase, faFan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Auxiliary from '../../hoc/Auxiliary';


class ListingResult extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listing: [
                {
                    "id": 4,
                    "email": "eve.holt@reqres.in",
                    "first_name": "Dzire, Etios",
                    "last_name": "Or Similar",
                    "type": "Sedan",
                    "price" :1000,
                    "km" : 250,
                    "avatar": "https://imgak.mmtcdn.com/cabs_cdn/dist/static/images/new_cab_images/indigo.png"
                },
                {
                    "id": 5,
                    "email": "charles.morris@reqres.in",
                    "first_name": "Xylo, Ertiga",
                    "last_name": "Or Similar",
                    "type": "Suv",
                    "price" : 1200,
                    "km" : 250,
                    "avatar": "https://imgak.mmtcdn.com/cabs_cdn/dist/static/images/new_cab_images/xylo.png"
                },
                {
                    "id": 6,
                    "email": "tracey.ramos@reqres.in",
                    "first_name": "Indica, Swift",
                    "last_name": "Or Similar",
                    "type": "Hatchback",
                    "price" : 800,
                    "km" : 250,
                    "avatar": "https://imgak.mmtcdn.com/cabs_cdn/dist/static/images/new_cab_images/hatchback.png"
                }
            ]

            
         }
    }
    render() { 
        return ( 
            <Auxiliary>

 {

this.state.listing.map(ctrl=>{
return(    
     <div className="border-default card overflow-hidden position-relative" key={ctrl.id}>
<div className="row ">
       <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 p-lg-5">
       <img src={ctrl.avatar} alt={ctrl.first_name} />
       </div>

       <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-lg-5">
       <div className="card-title">{ctrl.first_name } <sub>{ctrl.last_name}</sub></div>
       <span>{ctrl.type}</span>

            <div className="overflow-hidden border-default border-right-0 border-left-0 p-1 font"><strong className="float-left">Facilities : </strong>
            <div className="float-left clearfix"><span className="col-2"><FontAwesomeIcon icon={faChair} /> 4 Seater</span><span className="col-2"><FontAwesomeIcon icon={faBriefcase} /> 1 Bag</span> <span className="col-2"><FontAwesomeIcon icon={faFan} /> AC</span></div>
       </div>
       <span className="font-weight-lighter d-block position-absolute btPos">{ctrl.km} Kms included  |  Extra fare ₹9/km after 1000 Kms</span>

       </div>
<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 rftColumns overflow-hidden p-lg-5">
<div className="card-Price font-weight-bold">₹ {ctrl.price}</div>
<button type="submit" className="btn btn-primary">Book Now</button>

</div>

       </div>
       </div>
)

})

            }
            </Auxiliary>
      
       
   

         );
    }
}
 
export default ListingResult;