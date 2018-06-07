export function selectStartDate(date){
    return function(dispatch){
        dispatch({
            type:"START_DATE",
            payload:date
        });
    };
}

export function selectEndDate(date){
    return function(dispatch){
        dispatch({
            type:"END_DATE",
            payload:date
        });
    };    
}

export function selectPlace(latlng){
    return function(dispatch){
        dispatch({
            type:"NEW_PLACE",
            payload:latlng
        });
    };    
}

export function showSuggestions(places){
    return function(dispatch){
        dispatch({
            type:"NEW_SUGGESTIONS",
            payload:places
        });
    };  
}

export function changeType(type){
    return function(dispatch){
        dispatch({
            type:"CHANGE_TYPE",
            payload:type
        });
    }; 
}

export function addItinerary(place){
    return function(dispatch){
        dispatch({
            type:"ADD_ITINERARY",
            payload:place
        });
    }; 
}

export function showMarkerPopUp(props,marker){
    return function(dispatch){
        dispatch({
            type:"SHOW_MARKER_POPUP",
            payload:{props,marker}
        })
    }
}
export function closeMarkerPopUp(){
    return function(dispatch){
        dispatch({
            type:"CLOSE_MARKER_POPUP"
        })
    }    
}

export function showInfoPopUp(){
    return function(dispatch){
        dispatch({
            type:"SHOW_INFO_POPUP"
        })
    }
}

export function closeInfoPopUp(){
    return function(dispatch){
        dispatch({
            type:"CLOSE_INFO_POPUP"
        })
    }
}