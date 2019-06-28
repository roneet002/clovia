import React from 'react'
import LogoBar from './LogoBar'
import SearchBar from "../TopBar/SearchBar"
import './MainContent.css'
const MainContent=()=>{
return(
<div className="TopBlackBar">
    <div className="container">


    <p className="m-0 float-left w-25">
    <LogoBar />
    </p>
      
    <div className="float-left w-50">
    <SearchBar />
    </div>

    </div>
    </div>

)

}

export default MainContent