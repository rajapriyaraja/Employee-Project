import './App.css';
import Form from './Component/Form';
import Update from './Component/Reducer';
import { Route,Routes,Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Table from './Component/Table';
import FormEdit from './Component/Edit';
function App() {
  return (
    
      <BrowserRouter>     
    <Routes>
        <Route path='/'element={<Form/>}></Route>
        <Route path='/table'element={<Table/>}></Route>
        <Route path='/user/:id/edit'element={<FormEdit/>}></Route>
      </Routes>
      
      <ToastContainer></ToastContainer></BrowserRouter>
    
  );
}
export default App;