import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, deleteTodo } from './Action';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';



const Table = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id) => {
    nav(`/user/${id}/edit`); // Pass the id to the navigation function
  };

  return (
    <div>
      <h1>Employee Details</h1>
      <table className='tables' style={{ borderCollapse: 'collapse', width: '100%', backgroundColor: '#f2f2f2' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>EmployeeId</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Mobile</th>
            <th style={tableHeaderStyle}>DOB</th>
            <th style={tableHeaderStyle}>Gender</th>
            <th style={tableHeaderStyle}>Marital Status</th>
            <th style={tableHeaderStyle}>Address</th>
            <th style={tableHeaderStyle}>Country</th>
            <th style={tableHeaderStyle}>State</th>
            <th style={tableHeaderStyle}>City</th>
            <th style={tableHeaderStyle}>Postal Code</th>
            <th style={tableHeaderStyle}>Action</th>
          </tr>
        </thead>
        <tbody>

          {todos.map((todo) => (
            <tr key={todo.id}>
              <td style={tableCellStyle}>{todo.title}</td>
              <td style={tableCellStyle}>{todo.employeeid}</td>
              <td style={tableCellStyle}>{todo.email}</td>
              <td style={tableCellStyle}>{todo.mobile}</td>
              <td style={tableCellStyle}>{todo.date}</td>
              <td style={tableCellStyle}>{todo.gender}</td>
              <td style={tableCellStyle}>{todo.mstatus}</td>
              <td style={tableCellStyle}>{todo.address}</td>
              <td style={tableCellStyle}>{todo.country}</td>
              <td style={tableCellStyle}>{todo.state}</td>
              <td style={tableCellStyle}>{todo.city}</td>
              <td style={tableCellStyle}>{todo.pcode}</td>
              <div className='foot'>
              <button onClick={() => handleDelete(todo.id)}><FontAwesomeIcon icon={faTrash} /></button>
              <button className='footr' onClick={() => handleEdit(todo.id)}> <FontAwesomeIcon icon={faEdit} /></button> {/* Pass the id to the handleEdit function */}
              </div>
            </tr>
          ))}
        </tbody>
        </table>
        </div>
          );
        };
        
 const tableHeaderStyle = {
        border: '1px solid #ccc',
      padding: '8px',
      textAlign: 'center',
      backgroundColor: '#dcdcdc',
};

      const tableCellStyle = {
        padding:'15px',
        border: '1px solid #ccc',
      textAlign: 'center',
};

export default Table;
