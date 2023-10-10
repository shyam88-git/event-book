// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import PrivateRoute from './util/PrivateRoute';
import Home from './root/layout/home/Home';
import FreeEvents from './events/free/FreeEvents';
import ProEvents from './events/pro/ProEvents';
import UploadEvents from './events/upload/UploadEvents';
import Login from './users/login/Login';
import Register from './users/register/Register';
import Navbars from './root/layout/navbar/Navbars';
import Alert from './root/util/alert/Alert';
import * as userAction from './redux/user/user.action';
import * as userUtil from './util/userUtil';
import { useDispatch } from 'react-redux';

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    if (userUtil.getToken()) {
      dispatch(userAction.getUserInfo());
    }
  });

  return (
    <Router>
      <Navbars />
      <Alert />
       <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/events/free" element={<FreeEvents />} />
      <Route path="/events/pro" element={<ProEvents />} />
       <Route path="/events/upload" element={<UploadEvents />} />
      <Route path="/users/login" element={<Login />} />
      <Route path="/users/register" element={<Register />} />
       </Routes>
    </Router>
  );
}

export default App;
