import React from 'react';
import { Link } from 'react-router-dom';
import brand from '../../../assets/image/eventnow.jpg';
import * as userUtils from '../../../util/userUtil';
import * as userAction from '../../../redux/user/user.action';
import * as userReducer from '../../../redux/user/user.reducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Navbars() {
  let dispatch=useDispatch();
  let navigate=useNavigate();

  let userInfo=useSelector((state)=>{

    return state[userReducer.userFeatureKey];
  });

  let{user}=userInfo;

  let clickLogout=()=>{

    dispatch(userAction.logoutUser(navigate));




  }


  let beforeLoginLinks=(

    <React.Fragment>
      <li className='nav-item'>
              <Link to="/users/login" className='nav-link'>
              <i className="bi bi-box-arrow-in-right fs-3"/>Login</Link>
            </li>
            <li className='nav-item'>
              <Link to="/users/register" className='nav-link'>
              <i className="bi bi-person-circle fs-3"/> Register</Link>
            </li>

    </React.Fragment>
  );

  let afterLoginLinks=(

    <React.Fragment>
      <li className='nav-item'>
              <Link to="#" className='nav-link' >
              <img src={user?.avatar} width="25" height="25" className='rounded-circle'/>{user?.name}</Link>
            </li>
  <li className='nav-item'>
              <Link to="/#" className='nav-link' onClick={clickLogout}>
              <i className="fa fa-sign-out text-muted"/>Logout</Link>
            </li>
    </React.Fragment>
  )
  return (
    <nav className='navbar navbar-light bg-light navbar-expand-sm'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          <img src={brand} alt=""/>
        </Link>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to="/events/free" className='nav-link'>FreeEvents</Link>
            </li>
            <li className='nav-item'>
              <Link to="/events/pro" className='nav-link'>ProEvents</Link>
            </li>
            <li className='nav-item'>
              <Link to="/events/upload" className='nav-link'>Upload</Link>
            </li>
          </ul>
          <ul className='navbar-nav ml-auto'>

            {

              userUtils.isLoggedIn()?afterLoginLinks:beforeLoginLinks
            }
          
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbars;
