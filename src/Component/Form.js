import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from './Action';
import { useNavigate, Link } from 'react-router-dom';
import Loader from '../Loader';
import Swal from 'sweetalert2';
import './Table.css';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pcode, setPcode] = useState("");
  const [gender, setGender] = useState("");
  const [mstatus, setMstatus] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [employeeid, setEmployeeid] = useState("");

  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(createTodo({ title, email, mobile, date, address, state, city, pcode, gender, mstatus, country, employeeid }))
      .then(() => {
        setLoading(false);
        Swal.fire({
          title: 'Success!',
          text: 'Employee registration successful!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          nav('/table');
        });
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          title: 'Error!',
          text: 'Error submitting data. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        console.error('Error submitting data:', error);
      });
  };

  return (
    <>
      <div className='branding'>
        <img 
          src='Formlogo.webp'
          alt="image" 
          style={{ width: '50px', height: '50px'}}
        />
        <span>Employee Registration </span>
        <Link to="/" className='bwd'>Employee Register Form</Link>
        <Link to="/table" className='process'>Employee Details</Link>
      </div>
      <div className='form-container'>
        {loading && <Loader />}
        <form onSubmit={handleSubmit}>
          <h2 className='_qwet'>Employee Registration Form</h2>
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
              onChange={(e) => setEmployeeid(e.target.value)}
              required
            />
            <input
              type='date'
              placeholder='mm-dd-yyyy'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className='form-grouptw'>
            <input
              type="tel"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-grouptw'>
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
              <option value="">Marital Status</option>
              <option value="married">Married</option>
              <option value="unmarried">Unmarried</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
          <div className='form-group-cx'>
            <input
              type='text'
              placeholder='Enter address'
              value={address}
              onChange={(e) => setAddress(e.target.value)} required
            />
          </div>
          <div className='form-grouptw'>
            <input
              type='text'
              placeholder='Enter state'
              value={state}
              onChange={(e) => setState(e.target.value)} required
            />
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)} required>
              <option value="">Country</option>
              <option value="india">India</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className='form-group footer'>
            <input
              type='text'
              placeholder='Enter city'
              value={city}
              onChange={(e) => setCity(e.target.value)} required
            />
            <input
              type='text'
              placeholder='Enter postal code'
              value={pcode}
              onChange={(e) => setPcode(e.target.value)} required
            />
          </div>
          <button type="submit" className='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
