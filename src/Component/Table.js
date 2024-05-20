import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, deleteTodo } from './Action';
import { useNavigate } from 'react-router-dom';
import './Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
// import Loader from '../Loader';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Table = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const showDialog = (id)=> {
     setSelectedUserId(id);
     setDialogVisible(true);
   };
   const closeDialog = () => {
     setDialogVisible(false);
     setSelectedUserId(null);
   };

  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    setDialogVisible(false)
  };

  const handleEdit = (id) => {
    nav(`/user/${id}/edit`);
  };

  return (
    <div>
      <div className='branding'>
        <img
          src='Formlogo.webp'
          alt="image"
          style={{ width: '50px', height: '50px' }}
        />
        <span>Employee Registration</span>
        <Link to="/" className='bwd'>Employee Register Form</Link>
        <Link to="/table" className='process'>Employee Details</Link>
      </div>
      <h1>Employee Details</h1>
      <table className='tables'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Name</th>
            <th>EmployeeId</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>DateofBirth</th>
            <th>Gender</th>
            <th>Marital Status</th>
            <th>Address</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
            <th>Pin Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr className="data_bds" key={todo.id}>
              <td>{todo.titleOption}</td>
              <td>{todo.name}</td>
              <td>{todo.employeeid}</td>
              <td>{todo.email}</td>
              <td>{todo.mobile}</td>
              <td>{todo.date}</td>
              <td>{todo.gender}</td>
              <td>{todo.mstatus}</td>
              <td>{todo.address}</td>
              <td>{todo.country}</td>
              <td>{todo.state}</td>
              <td>{todo.city}</td>
              <td>{todo.pcode}</td>
              <div className='foot'>
              <button
                      className="delete"
                      onClick={() => showDialog(todo.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                {/* <button className='delete' onClick={() => handleDelete(todo.id)}><FontAwesomeIcon icon={faTrash} /></button> */}
                <button className='Last' onClick={() => handleEdit(todo.id)}><FontAwesomeIcon icon={faEdit} /></button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
      {dialogVisible &&(
        <dialog open className='dailog'>
          <h3>Are you Really want to delete it</h3>
          <button
          className='wx_remove'
          type='button'
          onClick={()=>handleDelete(selectedUserId)}>Yes
          </button>
          <button
          type="button"
          className='wx_edit' 
          onClick={closeDialog}>No</button>
        </dialog>
      )}
    
    </div>
  );
};
export default Table;