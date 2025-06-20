
import Create from './components/Create';
import Update from './components/Update';
import Delete from './components/Delete'; 
import Login from './components/Login';
import Signin from './components/Sign-in';
import Error from './components/Error'
import Student from './components/Student'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import AddMarks from './components/AddMarks';
import Teacher from './components/Teacher';
import Admin from './components/Admin'
import CreateCourse from './components/CreateCourse';
import Result from './components/Result';

function App() {

  return (
    <div>
      <Router>

        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/update' element={<Update />}></Route>
          <Route path='/delete' element={<Delete />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/si' element={<Signin />}></Route>
          <Route path='/error' element={<Error />}></Route>
          <Route path='/add-marks' element={<AddMarks />}></Route>
          <Route path='/teacher' element={<Teacher />}></Route>
          <Route path='/student' element={<Student />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/create-course' element={<CreateCourse />}></Route>
          <Route path='/Result' element={<Result />}></Route>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
