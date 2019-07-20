import React from 'react'
import LogoBar from './LogoBar'
import SearchBar from '../TopBar/SearchBar'
import TopBar from '../TopBar/TopCart'
import './MainContent.css'

const MainContent=()=>{
return(
<div className="TopBlackBar">
    <div className="container-fluid">
    <p className="m-0 float-left w-25">
    <LogoBar />
    </p>      
    <div className="float-left w-50">
    <SearchBar />
    </div>
    <div className="float-right w-25 text-right SecondaryColor">
    <TopBar/>
    </div>

    </div>
    </div>

)

}

export default MainContent