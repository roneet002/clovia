import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar=()=>{
return(
<div className="position-relative">
<input type="text" placeholder="Search for Products" className="w-100" />
<button className="btn position-absolute topPos WhBgColor"> <FontAwesomeIcon icon={faSearch} /></button>
</div>
)
}
export default SearchBar