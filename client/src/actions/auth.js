import axios from 'axios';

export function logIn(user){
    return function(dispatch){
        dispatch({
            type:"LOGGED_IN",
            payload:user
        });
    };    
}

export function logOut(){
    return function(dispatch){
        dispatch({
            type:"LOGGED_OUT"
        });
    };    
}

export function checkUser(config){
    return function(dispatch){
        axios.get('/access',config)
        .then(function(response){
            dispatch({
                type:"LOGGED_IN",
                payload:response.data.username
            });
        }).catch(function(err){
            console.log(err);
        });
    }
    
}