import React, { useState } from 'react';
import brand from '../../assets/image/eventnow.jpg';
import { Link } from 'react-router-dom';
import * as alertActions from '../../redux/alert/alert.action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as userAction from '../../redux/user/user.action';
import 'animate.css'; // Import Animate.css for animations

function Register() {

  let dispatch=useDispatch();
  let navigate=useNavigate();

  let [user,setUser]=useState({
    name:'',
    email:'',
    password:''
  });

  let[userError,setUserError]=useState({

      nameError:"",
      emailError:"",
      passwordError:""
  });

  let validateUserName=(event)=>{
    setUser({...user,name :event.target.value});
    let regExp=/^[a-zA-Z0-9]{3,20}$/;
    if(!regExp.test(event.target.value)){
      setUserError({...userError ,nameError:'Enter a proper UserName'});
    } else {
      setUserError({...userError,nameError:''});
    }
  }

  let validateEmail=(event)=>{
    setUser({...user,email:event.target.value});
    let regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    !regExp.test(event.target.value)?setUserError({...userError,emailError:'Enter a Proper Email'}):
    setUserError({...userError,emailError:''});
  }

  let validatePassword=(event)=>{
    setUser({...user,password:event.target.value});
    let regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    !regExp.test(event.target.value)?setUserError({...userError,passwordError:'Enter a Proper Password'}):
    setUserError({...userError,passwordError:''});
  }

  let submitRegister=(event)=>{
    event.preventDefault();
    if(user.name!==''&& user.email!==''&& user.password!==''){
      dispatch(userAction.registerUser(user,navigate));
    } else {
      dispatch(alertActions.setAlert('Please fill in the fields','danger'));
    }
  }

  return (
    <React.Fragment>
      <section className='py-5 animate__animated animate__zoomIn'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 m-auto'>
              <div className='card shadow'>
                <div className='card-header bg-teal text-white text-center py-3'>
                  <h4>Register Here</h4>
                </div>

                <div className='card-body bg-light-blue'>
                  <form onSubmit={submitRegister}>
                    <div className='mb-3'>
                      <label htmlFor='name' className='form-label'>
                        Name
                      </label>
                      <input type='text' onChange={validateUserName} className={`form-control ${userError.nameError.length>0?'is-invalid':''}`} id='name' name='name' value={user.name} placeholder='Enter your name'/>
                      {userError.nameError.length>0?<small className='text-danger'>{userError.nameError}</small>:''}
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='email' className='form-label'>
                        Email
                      </label>
                      <input type='email' name="email" value={user.email} onChange={validateEmail} className={`form-control ${userError.emailError.length>0?'is-invalid':''}`} id='email' placeholder='Enter your email'/>
                      {userError.emailError.length>0?<small className='text-danger'>{userError.emailError}</small>:''}
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='password' className='form-label'>
                        Password
                      </label>
                      <input type='password' name="password" value={user.password} onChange={validatePassword} className={`form-control ${userError.passwordError.length>0?'is-invalid':''}`} id='password' placeholder='Enter your password'/>
                      {userError.passwordError.length>0 ?<small className='text-danger'>{userError.passwordError}</small>:''}
                    </div>
                    <div className='d-grid'>
                      <input type='submit' value='Register' className='btn btn-teal btn-block' />
                    </div>
                    <small className='mt-3 d-block text-center'>
                      Already have an account? <Link to='/users/login' className='text-teal' style={{ fontSize: '18px' }}>Login</Link>
                    </small>
                  </form>
                </div>
                <div className='card-footer text-center py-3'>
                  <img src={brand} alt='EventNow' width='120' height='30' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Register;
