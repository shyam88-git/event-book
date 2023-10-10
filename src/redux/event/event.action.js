import axios from "axios";
import * as alertAction from '../alert/alert.action';
import * as userUtil from '../../util/userUtil';
import * as tokenUtil from '../../util/tokenUtil';

export const UPLOAD_EVENT_REQUEST = 'UPLOAD_EVENT_REQUEST';
export const UPLOAD_EVENT_SUCCESS = 'UPLOAD_EVENT_SUCCESS';
export const UPLOAD_EVENT_FAILURE = 'UPLOAD_EVENT_FAILURE';


export const FREE_EVENT_REQUEST='FREE_EVENT_REQUEST';
export const FREE_EVENT_SUCCESS='FREE_EVENT_SUCCESS';
export const FREE_EVENT_FAILURE='FREE_EVENT_FAILURE';


export const PRO_EVENT_REQUEST='PRO_EVENT_REQUEST';
export const PRO_EVENT_RESPONSE='PRO_EVENT_RESPONSE';
export const PRO_EVENT_FAILURE='PRO_EVENT_FAILURE';

export const uploadEvent = (events, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPLOAD_EVENT_REQUEST });
      let dataURL = 'http://127.0.0.1:5000/api/events/upload';
      let response = await axios.post(dataURL, events);
      
      dispatch({ type: UPLOAD_EVENT_SUCCESS, payload: response.data });
      dispatch(alertAction.setAlert('Upload Success', 'success'));

      if (events.type === 'FREE') {
        navigate('/events/free');
      }

      if (events.type === 'PRO') {
        navigate('/events/pro');
      }
    } catch (error) {
      dispatch({ type: UPLOAD_EVENT_FAILURE });
    }
  };
};

export const freeEvent=()=>{

  return async (dispatch)=>{

    try{
      dispatch({type:FREE_EVENT_REQUEST});
    let dataURL='http://127.0.0.1:5000/api/events/free';
    let response=await axios.get(dataURL);
    dispatch({type:FREE_EVENT_SUCCESS,payload:response.data});
    


    }
    catch(error){

      dispatch({type:FREE_EVENT_FAILURE,payload:error.message});
    }
  }
}

export const proEvent=()=>{

  return async(dispatch)=>{

   try{

    if(userUtil.getToken()){

      tokenUtil.setAuthToken(userUtil.getToken());
    }
    dispatch({type:PRO_EVENT_REQUEST});
    let dataURL='http://127.0.0.1:5000/api/events/pro';
    let response=await axios.get(dataURL);
    dispatch({type:PRO_EVENT_RESPONSE,payload:response.data});

   }
   catch(error){
    dispatch({type:PRO_EVENT_FAILURE,payload:error.message});

   }

  }
}
