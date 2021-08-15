import * as actions from './actionTypes';

let id = 0;
export const addNote = text => ({
  type: actions.ADD_NOTE,
  payload:{
    id: ++id,
    text
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