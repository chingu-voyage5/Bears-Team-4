export default (state = {
    center:{
        lat: 51.505,
        lng: -0.09
    }
}, action) => {
    switch(action.type){
        case "NEW_PLACE":{
            return {
                ...state,
                center: action.payload
            }
        }
        default:
            return state;
    }
}