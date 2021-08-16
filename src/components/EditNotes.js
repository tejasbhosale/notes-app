import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faSave } from '@fortawesome/fontawesome-free-solid';
import { connect } from 'react-redux';
import { updateNote } from '../actions';

const EditNotes = (props) => {
    const [editStatus, setEditStatus] = useState(false);
    const [updatedText, setUpdatedText] = useState(props.edit.text);

    const handleInputChange = (event) => {
        event.preventDefault();
        setUpdatedText(event.target.value)
    }
    const handleUpdate = () =>{
        setEditStatus(false);
        props.edit.text = updatedText;
        props.update(props.edit);
    }
    
    return (
        <div>
          <FontAwesomeIcon icon={faPencilAlt} className={!editStatus? 'show btn-edit': 'hide'} onClick={() => setEditStatus(true)}/>
          <FontAwesomeIcon icon={faSave} className={editStatus? 'show btn-update': 'hide'} onClick={() => handleUpdate()}/>
          <input className={editStatus? 'show input-edit': 'hide'} defaultValue={updatedText} onChange={handleInputChange}/>
        </div>
    );
}
const mapStateToProps = state => ({
    notesList: state
})

const mapDispatchToProps = (dispatch) => {
    return {
        update: (note) => dispatch(updateNote(note))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditNotes);