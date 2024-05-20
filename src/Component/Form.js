import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from './Action';
import { useNavigate, Link } from 'react-router-dom';
import Loader from '../Loader';
import Swal from 'sweetalert2';
import './Table.css';

const TodoForm = () => {
  const [titleOption, setTitleOption] = useState('');
  const [name, setName] = useState('');
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
  const [loading, setLoading] = useState(false);
  const [employeeid, setEmployeeid] = useState('');
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const nav = useNavigate();
 
  const Reset=()=>{
    setTitleOption("")
    setName("");
    setEmail("");
    setMobile("");
    setDate("");
    setAddress("");
    setState("");
    setCity("");
    setPcode("");
    setGender("");
    setMstatus("");
    setCountry("");
    setEmployeeid("");
  }
  const validateInputs = () => {
    const errors = {};

    if (!titleOption.trim()) errors.titleOption = 'Please select a title option!';
    if (!name.trim()) {
      errors.name = 'Please enter a name!';
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      errors.name = 'Name must contain only letters!';
    }
    if (!employeeid.trim()) errors.employeeid = 'Please enter an employee ID!';
    if (!date.trim()) errors.date = 'Please enter a date!';
    if (!mobile.trim()) {
      errors.mobile = 'Please enter a mobile number!';
    } else if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = 'Invalid mobile number format!';
    }
    if (!email.trim()) {
      errors.email = 'Please enter an email address!';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Invalid email format!';
    }
    if (!gender.trim()) errors.gender = 'Please select a gender!';
    if (!mstatus.trim()) errors.mstatus = 'Please select a marital status!';
    if (!address.trim()) errors.address = 'Please enter an address!';
    if (!state.trim()) errors.state = 'Please enter a state!';
    if (!country.trim()) errors.country = 'Please select a country!';
    if (!city.trim()) errors.city = 'Please enter a city!';
    if (!pcode.trim()) {
      errors.pcode = 'Please enter a postal code!';
    } else if (!/^\d{5,6}$/.test(pcode)) {
      errors.pcode = 'Invalid postal code format!';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    setLoading(true);
    dispatch(createTodo({
      titleOption, name, email, mobile, date, address, state, city, pcode, gender, mstatus, country, employeeid
    }))
      .then(() => {
        setLoading(false);
        Swal.fire({
          title: 'Success!',
          text: 'Employee registration successfully Submitted!',
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
          <h2 className='_qwet'>Register Form</h2>
          <div className='form-group-cx'>
            <div className='error'>
            <select
            className='title'
              value={titleOption}
              onChange={(e) => setTitleOption(e.target.value)}>
              <option value="">Title</option>
              <option value="Mr.">Mr.</option>
              <option value="Miss.">Miss.</option>
              <option value="Mrs.">Mrs.</option>
            </select>
            {errors.titleOption && <p className="error">{errors.titleOption}</p>}
            </div>
            <div className='error'>
            <input
            className='ename'
              type="text"
              placeholder=" Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className='error'>
            <input
              type='text'
              placeholder=' Employee id'
              value={employeeid}
              onChange={(e) => setEmployeeid(e.target.value)}
            />
            {errors.employeeid && <p className="error">{errors.employeeid}</p>}
            </div>
            <div className='error'>
            <input
            className='date'
              type='date'
              placeholder='mm-dd-yyyy'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            {errors.date && <p className="error">{errors.date}</p>}
            </div>
          </div>
          <div className='form-grouptw'>
            <div className='error'>
            <input
          className='phone'
              type="tel"
              placeholder="Mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            {errors.mobile && <p className="error">{errors.mobile}</p>}
            </div>
            <div className='error'>
            <input
            className='email'
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          </div>
          <div className='form-grouptw'>
            <div className='error'>
            <select
            className='phone'
              value={gender}
              onChange={(e) => setGender(e.target.value)} >
              <option value=""> Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="error">{errors.gender}</p>}
            </div>
            <div className='error'>
            <select
            className='email'
              value={mstatus}
              onChange={(e) => setMstatus(e.target.value)} >
              <option value="">Marital Status</option>
              <option value="married">Married</option>
              <option value="unmarried">Unmarried</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
            {errors.mstatus && <p className="error">{errors.mstatus}</p>}
            </div>
          </div>
          <div className='form-group-cx'>
            <div className='error'>
            <input
            className='addw'
              type='text'
              placeholder='Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)} 
            />
            {errors.address && <p className="error">{errors.address}</p>}
            </div>
          </div>
          <div className='form-grouptw'>
            <div className='error'>
            <input
            className='phone'
              type='text'
              placeholder='State'
              value={state}
              onChange={(e) => setState(e.target.value)} 
            />
            {errors.state && <p className="error">{errors.state}</p>}
            </div>
            <div className='error'>
            <select
            className='email'
              value={country}
              onChange={(e) => setCountry(e.target.value)} >
              <option value="">Country</option>
              <option value="india">India</option>
              <option value="others">Others</option>
            </select>
            {errors.country && <p className="error">{errors.country}</p>}
            </div>
          </div>
          <div className='form-group footer'>
            <div className='error'>
            <input
            className='phone'
              type='text'
              placeholder='City'
              value={city}
              onChange={(e) => setCity(e.target.value)} 
            />
            {errors.city && <p className="error">{errors.city}</p>}
            </div>
            <div className='error'>
            <input
            className='email'
              type='number'
              placeholder='Pin code'
              value={pcode}
              onChange={(e) => setPcode(e.target.value)} 
            />
            {errors.pcode && <p className="error">{errors.pcode}</p>}            </div>
          </div>
          <div className='we-er'>
          <button type="submit" className='submit'>Submit</button>
          <button type='button'className='reset' onClick={Reset}>Reset</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TodoForm;