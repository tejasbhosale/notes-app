import * as actions from '../actions/actionTypes';

const initialState = {
  text: 'Sample note!',
  id: 0,
  searchKey: ''
};

const reducer = (state = [initialState], action) => {
    switch (action.type) {
      case actions.ADD_NOTE:
        return [
          ...state,
          {
            id: action.payload.id,
            text: action.payload.text
          }
        ]
      case actions.DELETE_NOTE:
        return state.filter(note => note.id!==action.payload.id);

      case actions.SEARCH_NOTE:
        state[0].searchKey = action.payload.searchKey;
        return [
          ...state
        ]
      
      case actions.UPDATE_NOTE:
        return state.map((updatedNote) => {
          console.log(updatedNote);
          if(updatedNote.id === action.payload.id){
            updatedNote.text=action.payload.text;
            return updatedNote;
          }else{
            return updatedNote;
          }
        })
      default:
        return state
    }
  }
  
  export default reducer
  