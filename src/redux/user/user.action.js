import axios from "axios";
import * as alertAction from '../alert/alert.action';
import * as userUtil from '../../util/userUtil';
import * as tokenUtil from '../../util/tokenUtil';

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const LOGIN_USER_REQUEST='LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS='LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE='LOGIN_USER_FAILURE';


export const GET_USER_INFO_REQUEST='GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS='GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAILURE='GET_USER_INFO_FAILURE';


export const LOGOUT_USER='LOGOUT_USER';

export const registerUser = (user, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
      let dataURL = 'http://127.0.0.1:5000/api/users/register';
      let response = await axios.post(dataURL, user); // Use await to wait for the promise to resolve

      dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });

      dispatch(alertAction.setAlert(response.data.msg, 'success'));
      navigate('/users/login');
    } catch (error) {
      console.error(error);
      dispatch({ type: REGISTER_USER_FAILURE, payload: error.response.data });
    }
  };
};




export const loginUser = (user, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_USER_REQUEST });
      let dataURL = 'http://127.0.0.1:5000/api/users/login';
      let response = await axios.post(dataURL, user);

      dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
      dispatch(alertAction.setAlert(response.data.msg, 'success'));
      navigate('/events/pro');
    } catch (error) {
      dispatch({ type: LOGIN_USER_FAILURE, payload: error.response.data });
    }
  };
};


export const getUserInfo=()=>{

  return async(dispatch)=>{
    if(userUtil.getToken()){

      tokenUtil.setAuthToken(userUtil.getToken());
    }

    try{

      dispatch({type:GET_USER_INFO_REQUEST});
      let dataURL='http://127.0.0.1:5000/api/users/';
      let response=await axios.get(dataURL);
      dispatch({type:GET_USER_INFO_SUCCESS,payload:response.data});


    }
    catch(error){
      console.error(error);
      dispatch({type:GET_USER_INFO_FAILURE,payload:error});


    }


  }
}

export const logoutUser=(navigate)=>{

  return (dispatch=>{

    dispatch({type:LOGOUT_USER})
    navigate('/');
  });
};