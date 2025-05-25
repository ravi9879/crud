import Home from './files/Home';
import Create from './files/Create';
import Update from './files/Update';
import Delete from './files/Delete';
// import './Style.css';
import Login from './files/Login';
import Signin from './files/Sign-in';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>

        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/studs' element={<Home />}></Route>
          <Route path='/update' element={<Update />}></Route>
          <Route path='/delete' element={<Delete />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/si' element={<Signin />}></Route>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
