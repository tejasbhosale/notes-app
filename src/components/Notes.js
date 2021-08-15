import React, { useState, useEffect } from "react";
import AddNotes from './AddNotes';
import NotesList from './NotesList';
import SearchNotes from './SearchNotes';


const Notes = () => {

    return (
        <div>
            <SearchNotes/>
            <AddNotes />
            <NotesList />
        </div>
    );
}

export default Notes;