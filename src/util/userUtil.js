//to find user is logged in or not
export const isLoggedIn=()=>{

    if(localStorage.getItem('events-token'))//if the token is available
    {

        return true;
    }
    else

        return false;
}

//to find the token

export const getToken=()=>{

    return localStorage.getItem('events-token');
}


