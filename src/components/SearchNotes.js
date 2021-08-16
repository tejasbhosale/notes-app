import React from "react";
import { connect } from 'react-redux';
import { searchNote } from '../actions';

const SearchNotes = (props) => {
    const handleInputChange = (event) => {
        event.preventDefault();
        props.search(event.target.value);
    }    
    
    return (
        <div>
          <input placeholder="Search" className="search-box" onChange={handleInputChange} disabled={(!props.notesList.length)? "disabled" : ""}/>
        </div>
    );
}
const mapStateToProps = state => ({
    notesList: state
})
const mapDispatchToProps = (dispatch) => {
    return {
        search: (note) => dispatch(searchNote(note))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchNotes);