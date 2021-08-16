import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addNote } from '../actions';

const AddNotes = ({ dispatch }) => {
    const [inputText, setInputText] = useState();

    const handleBtnClick = () => {
        if(inputText){
            dispatch(addNote(inputText));
            setInputText("");
        }
    }
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    }

    return (
        <div>
            <textarea className="textarea-notes" placeholder="Enter notes here" onChange={handleInputChange} value={inputText} />
            <div className="btn">
                <Button variant="contained" color="secondary" size="medium" role="button" data-testid="restart-btn" onClick={handleBtnClick}>ADD NOTE</Button>
            </div>
        </div>
    );
}

export default connect()(AddNotes);