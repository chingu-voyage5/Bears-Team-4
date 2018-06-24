export default (state = {
    center:{
        lat: 51.505,
        lng: -0.09
    },
    markerLat: 51.505,
    markerLng: -0.09,
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
            const {lat,lng,...place} = action.payload;
            return{
                ...state,
                showMarkerPopUp:true,
                selectedPlace:place,
                markerLat:lat,
                markerLng:lng
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