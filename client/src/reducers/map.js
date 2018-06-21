export default (state = {
    center:{
        lat: 51.505,
        lng: -0.09
    },
    markerPosition:{
        lat: 51.505,
        lng: -0.09
    },
    selectedPlace:{},
    showMarkerPopUp:false,
    showInfoPopUp:false,
}, action) => {
    switch(action.type){
        case "NEW_PLACE":{
            return {
                ...state,
                center: action.payload
            };
        }
        case "NEW_SUGGESTIONS":{
            return{
                ...state,
                showMarkerPopUp:false,
                showInfoPopUp:false
            };
        }
        case "SHOW_MARKER_POPUP":{
            return{
                ...state,
                showMarkerPopUp:true,
                selectedPlace:action.payload,
                markerPosition:action.payload.position
                
            }
        }
        case "CLOSE_MARKER_POPUP":{
            return{
                ...state,
                showMarkerPopUp:false
            }
        }
        case "SHOW_INFO_POPUP":{
            return{
                ...state,
                showInfoPopUp:true
            }
        }
        case "CLOSE_INFO_POPUP":{
            return{
                ...state,
                showInfoPopUp:false
            }
        }
        default:
            return state;
    }
};