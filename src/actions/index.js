import * as actions from './actionTypes';
let id = 0;

export const addNote = text => ({
  type: actions.ADD_NOTE,
  payload:{
    id: ++id,
    text,
    searchKey:""
  }
});

export const deleteNote = id => ({
    type: actions.DELETE_NOTE,
    payload:{
        id
    }
});

export const searchNote = searchKey => ({
    type: actions.SEARCH_NOTE,
    payload:{
        searchKey : searchKey
    }
});

export const updateNote = updatedNote => ({
    type: actions.UPDATE_NOTE,
    payload:{
        id: updatedNote.id,
        text: updatedNote.text
      }
});