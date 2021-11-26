import {ADD_List, DELETE_List, EDIT_LIST} from '../actions/types';

const initialState = [
  {
    id: 1,
    title: 'praju',
    description: 'hiii',
    date: new Date(),
    time: new Date(),
  },
];
const ToDoAppReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_List:
      return [...state, action.payload];
    case DELETE_List:
      return state.filter(item => {
        if (item.id !== action.payload.id) {
          return item;
        }
      });
    case EDIT_LIST:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};
export default ToDoAppReducer;
