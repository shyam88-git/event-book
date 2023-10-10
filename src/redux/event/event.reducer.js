import * as eventAction from '../event/event.action';

export const eventFeatureKey = 'events';

const initialState = {
  loading: false,
  events: [], // Change this to your actual initial event data structure
  errorMessage: ''
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case eventAction.UPLOAD_EVENT_REQUEST:
      return {
        ...state,
        loading: true
      };

    case eventAction.UPLOAD_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
       
      };

    case eventAction.UPLOAD_EVENT_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload
      };


      case eventAction.FREE_EVENT_REQUEST:
        return{

          ...state,
          loading:true
        }
        case eventAction.FREE_EVENT_SUCCESS:
          return{

            ...state,
            loading:false,
            events:payload.events
          };
        case eventAction.FREE_EVENT_FAILURE:
          return{

            ...state,
            loading:false,
            errorMessage:payload
          };

        case eventAction.PRO_EVENT_REQUEST:
          return{

            ...state,
            loading:true
          };
        case eventAction.PRO_EVENT_RESPONSE:
          return{

            ...state,
            loading:false,
            events:payload.events
          };
        case eventAction.PRO_EVENT_FAILURE:
          return{

            ...state,
            loading:false,
            errorMessage:payload
          };

    default:
      return state;
  }
};

export {reducer};
