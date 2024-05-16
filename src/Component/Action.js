import axios from 'axios';
import { CREATE_TODO, UPDATE_TODO, DELETE_TODO, FETCH_TODOS, FETCH_TODO } from './Type';

export const createTodo = (todo) => {
  return async (dispatch) => {
    const response = await axios.post(`https://65af4d452f26c3f2139a6b3d.mockapi.io/EmployeeRegister/student`, todo);
    dispatch({ type: CREATE_TODO, payload: response.data });
  };
};

export const updateTodo = (id, todo) => {
  return async (dispatch) => {
    const response = await axios.put(`https://65af4d452f26c3f2139a6b3d.mockapi.io/EmployeeRegister/student/${id}`, todo);
    dispatch({ type: UPDATE_TODO, payload: response.data });
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    await axios.delete(`https://65af4d452f26c3f2139a6b3d.mockapi.io/EmployeeRegister/student/${id}`);
    dispatch({ type: DELETE_TODO, payload: id });
  };
};

export const fetchTodos = () => {
  return async (dispatch) => {
    const response = await axios.get(`https://65af4d452f26c3f2139a6b3d.mockapi.io/EmployeeRegister/student`);
    dispatch({ type: FETCH_TODOS, payload: response.data });
  };
};

export const fetchTodo = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`https://65af4d452f26c3f2139a6b3d.mockapi.io/EmployeeRegister/student/${id}`);
    dispatch({ type: FETCH_TODO, payload: response.data });
  };
};
