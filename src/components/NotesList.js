import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/fontawesome-free-solid';
import { connect } from 'react-redux';
import { deleteNote, searchNote } from '../actions';
import EditNotes from "./EditNotes";

const NotesList = (props) => {  
    const handleDelete = (id) => {
        props.delete(id);
    }
    return (
        <div className="list-container">
            {props.notesList.filter((list) => list.text.includes(props.notesList[0].searchKey)).map((note, i) => {
                return <div key={i} className="list-item">
                    <FontAwesomeIcon key={i} className="delete-icon" onClick={() => handleDelete(note.id)} icon={faTrash} />
                    <EditNotes edit={note}/>
                    {note.text}
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