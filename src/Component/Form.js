
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from './Action';
import { useNavigate } from 'react-router-dom';

const TodoForm = ({ todoToUpdate }) => {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
   const[date,setDate]=useState("")
   const[address,setAddress]=useState("")
   const[state,setState]=useState("")
   const[city,setCity]=useState("")
   const[pcode,setPcode]=useState("")
   const [gender, setGender] = useState("");
   const[mstatus,setMstatus]=useState("");
   const[country,setCountry]=useState("")
   const[employeeid,setEmployeeid]=useState("")
  const dispatch = useDispatch();
  const nav = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createTodo({ title, email,mobile,date,address,state,city,pcode,gender,mstatus,country,employeeid}));
    nav('/table')
    setTitle('');
  };

  return (
    <div className='form-container'>
      <h2>Employee Registration Form</h2>
    <form onSubmit={handleSubmit}>
      <div className='form-group-cx'>
      <input
        type="text"
        placeholder="Enter name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
           type='text'
           placeholder='Enter employee id'
           value={employeeid}
           onChange={(e)=>setEmployeeid(e.target.value)}
           required
      />
      </div>
      <div className='form-grouptw'>
      <input
        type='date'
        placeholder='mm-dd-yyyy'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
       <input
        type="tel"
        placeholder="Enter mobile number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        required
      />
      </div>
      <div className='form-grouptw'>
      <input
        type="email"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      </div>
  
      <div className='form-groupfor'>
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)} required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <select
        value={mstatus}
        onChange={(e) => setMstatus(e.target.value)} required>
        <option value='married'>Married</option>
        <option value='unmarried'>Unmarried</option>
        <option value='divorced'>divorced</option>
        <option value='widowed'>widowed</option>
      </select>
      </div>
      <div className='form-grouptw'>
      <input
        type='text'
        placeholder='Enter state'
        value={state}
        onChange={(e) => setState(e.target.value)}required
      />
       <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}required>
        <option value=''>Country</option>
        <option value='india'>India</option>
        <option value='others'>Others</option>
      </select>
      </div>
      <input
        type='text'
        placeholder='Enter address'
        value={address}
        onChange={(e) => setAddress(e.target.value)}required 
      />
     
      <div className='form-group footer'>
    
      <input
        type='text'
        placeholder='Enter city'
        value={city}
        onChange={(e) => setCity(e.target.value)} required
      />
      <input
        type='number'
        placeholder='Enter postal code'
        value={pcode}
        onChange={(e) => setPcode(e.target.value)}required 
        />
        </div>
      <button type="submit">submit</button>
    </form>
    </div>
  );
};
export default TodoForm;