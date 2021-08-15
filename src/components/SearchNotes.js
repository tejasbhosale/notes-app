import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { searchNote } from '../actions';

const SearchNotes = ({dispatch}) => {

    const handleInputChange = (event) => {
        event.preventDefault();
        dispatch(searchNote(event.target.value));
    }    
    
    return (
        <div>
          <input placeholder="Search" className="search-box" onChange={handleInputChange}/>
        </div>
    );
}
export default connect()(SearchNotes);