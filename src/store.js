import {createStore, combineReducers} from 'redux';
import ToDoAppReducer from './appState/reducers/toDoAppReducer';
const rootReducer = combineReducers({
  lists: ToDoAppReducer,
});
const configureStore = createStore(rootReducer);
export default configureStore;
