import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { deleteNote, searchNote } from '../actions';

const NotesList = (props) => {  
    const handleDelete = (id) => {
        props.delete(id);
    }
    const handleEdit = (id) => {

    }
    return (
        <div className="list-container">
            {props.notesList.filter((list) => list.text.includes(props.notesList[0].searchKey)).map((note, i) => {
                return <div key={i} className="list-item">{note.text}
                    <button key={i + 1} className="delete-icon" onClick={() => handleEdit(note)}>edit</button>
                    <button key={i} className="delete-icon" onClick={() => handleDelete(note.id)}>X</button>
                </div>
            })}
        </div>
    );
}
const mapStateToProps = state => ({
    notesList: state
})

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (id) => dispatch(deleteNote(id)),
        search: (key) => dispatch(searchNote(key))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NotesList);