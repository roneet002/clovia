import React, {Component} from 'react';
import './TopBar.css'
export default class TopBar extends Component{

  constructor(){
      super()
      this.state= {
        HeaderName:
        [ 'FREE RETURNS', '100% PRIVACY', 'CASH ON DELIVERY', 'FREE SHIPPING*']
        }
    }
 
    render(){
        const listItems = this.state.HeaderName.map((hn, index) =>
        <li key={index}>
          {hn}
        </li>
      );
      
      
return(
<div className="grbg">
<ul className="float-left lft">
{listItems}
</ul>
<ul className="lft float-right">
<li><a href="/downloadApp">DOWNLOAD THE APP</a></li>
<li><a href="/runBusiness">RUN YOUR OWN BUSINESS</a></li>
<li><a href="/TrackOrder">TRACK ORDER</a></li>
<li><a href="/privateMode">PRIVATE MODE ?</a></li>
</ul>
</div>
)
    }

}
