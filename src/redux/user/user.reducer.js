import * as userAction from './user.action';
export const userFeatureKey='users';


let initialState={

    loading:false,
    errorMessage:'',
    token:'',
    user:{},
    isAuthenticated:false
}

const reducer=(state=initialState,action)=>{

    let{type,payload}=action;

    switch(type){

        case userAction.REGISTER_USER_REQUEST:
            return{

                ...state,
                loading:true
            };
        case userAction.REGISTER_USER_SUCCESS:
            return{

                ...state,
                loading:false
            };
        case userAction.REGISTER_USER_FAILURE:
            return{

                ...state,
                loading:false,
                errorMessage:payload
            };


        case userAction.LOGIN_USER_REQUEST:
            return{

                ...state,
                loading:true,
            }

        case userAction.LOGIN_USER_SUCCESS:
            localStorage.setItem('events-token',payload.token);
            return{

                ...state,
                loading:false,
                token:payload.token,
                user:payload.user,
                isAuthenticated:true

            };
        case userAction.LOGIN_USER_FAILURE:
            return{

                ...state,
                loading:false,
                errorMessage:payload,
                token:'',
                user:{},
                isAuthenticated:false
            }


            case userAction.GET_USER_INFO_REQUEST:
                return{

                    ...state,
                    loading:true
                };
            case userAction.GET_USER_INFO_SUCCESS:
                return{

                    ...state,
                    loading:false,
                    user:payload.user
                }

            case userAction.GET_USER_INFO_FAILURE:
                return{

                    ...state,
                    loading:false,
                    user:{}
                }

        case userAction.LOGOUT_USER:
            localStorage.removeItem('events-token');
            return{
                token:'',
                user:{},
                isAuthenticated:false

            }


            default:return state;
    }
}

export {reducer};