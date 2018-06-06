export default (state = {
    center:{
        lat: 51.505,
        lng: -0.09
    },
    places:[],
    itinerary:[],
    activeMarker:{},
    selectedPlace:{},
    showMarkerPopUp:false,
    showInfoPopUp:false,
    type:'default'
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
                places:action.payload,
                showMarkerPopUp:false,
                showInfoPopUp:false
            };
        }
        case "CHANGE_TYPE":{
            return{
                ...state,
                type:action.payload
            };
        }
        case "ADD_ITINERARY":{
            return{
                ...state,
                itinerary:[...state.itinerary,action.payload]
            };
        }
        case "SHOW_MARKER_POPUP":{
            return{
                ...state,
                showMarkerPopUp:true,
                activeMarker:action.payload.marker,
                selectedPlace:action.payload.props
                
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