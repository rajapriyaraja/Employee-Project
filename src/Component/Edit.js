import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchTodo, updateTodo } from './Action';

export default function FormEdit() {
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [pcode, setPcode] = useState('');
    const [gender, setGender] = useState('');
    const [mstatus, setMstatus] = useState('');
    const [country, setCountry] = useState('');
    const [employeeid, setEmployeeid] = useState('');


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const todoUpdate = useSelector((state) => state.todos.find(todo => todo.id === id));

    useEffect(() => {
        dispatch(fetchTodo(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (todoUpdate) {
            setTitle(todoUpdate.title || '');
            setEmail(todoUpdate.email || '');
            setMobile(todoUpdate.mobile || '');
            setDate(todoUpdate.date || '');
            setAddress(todoUpdate.address || '');
            setState(todoUpdate.state || '');
            setCity(todoUpdate.city || '');
            setPcode(todoUpdate.pcode || '');
            setGender(todoUpdate.gender || '');
            setMstatus(todoUpdate.mstatus || '');
            setCountry(todoUpdate.country || '');
            setEmployeeid(todoUpdate.employeeid || '');
        }
    }, [todoUpdate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoUpdate) {
            try {
                dispatch(updateTodo(todoUpdate.id, { title,employeeid, email, mobile, date, address, state, city, pcode, gender, mstatus, country }));

            } catch {
                setTitle("")
                setEmail("")
                setMobile("")
                setDate("")
                setAddress("")
                setState("")
                setCity("")
                setPcode("")
                setGender("")
                setMstatus("")
                setCountry("")
                setEmployeeid("")


            }
        }
        navigate('/table');
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
        />
         <input
           type='text'
           placeholder='Enter employee id'
           value={employeeid}
           onChange={(e)=>setEmployeeid(e.target.value)}
      />
      </div>
      <div>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className='form-grouptw'>
        <input
          type="tel"
          placeholder="Enter mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type='date'
          placeholder='mm-dd-yyyy'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        </div>
        <div className='form-groupfor'>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <select
          value={mstatus}
          onChange={(e) => setMstatus(e.target.value)}>
          <option value='married'>Married</option>
          <option value='unmarried'>Unmarried</option>
          <option value='divorced'>divorced</option>
          <option value='widowed'>widowed</option>
        </select>
        </div>
        <div className='form-group'>
          <input
        type='text'
        placeholder='Enter address'
        value={address}
        onChange={(e) => setAddress(e.target.value)} 
      />
        
        <div className='form-grouptw'>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}>
          <option value=''>Country</option>
          <option value='india'>India</option>
          <option value='others'>Others</option>
        </select>
        <input
          type='text'
          placeholder='Enter state'
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        </div>
            <div className='form-grouptw'>
        <input
          type='text'
          placeholder='Enter city'
          value={city}
          onChange={(e) => setCity(e.target.value)} 
        />
        <input
          type='number'
          placeholder='Enter postal code'
          value={pcode}
          onChange={(e) => setPcode(e.target.value)} 
          />
         
        </div>
        </div>
  
        <button type="submit">submit</button>
      </form>
      </div>
    );
}