import {ADD_List, DELETE_List, EDIT_LIST} from './types';

export const addList = (list: any) => ({
  type: ADD_List,
  payload: list,
});
export const deleteList = (id: any) => ({
  type: DELETE_List,
  payload: id,
});
export const editList = (data: any) => ({
  type: EDIT_LIST,
  payload: data,
});
