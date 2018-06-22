export default (state = {
    user: null
}, action) => {
    switch(action.type){
        case "LOGGED_IN":{
            return{
                ...state,
                user:action.payload
            }
        }
        case "LOGGED_OUT":{
            return{
                ...state,
                user:null
            }
        }
        case "SIGNED_UP":{
            return{
                ...state,
                user:action.payload
            }            
        }
        default:
            return state;
    }
}