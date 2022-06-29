import React from "react";
import '../containers/App.css';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue input-class"
                type='search' 
                placeholder="Search Robots"
                onChange={searchChange}
                />
        </div>
    )
}


export default SearchBox;