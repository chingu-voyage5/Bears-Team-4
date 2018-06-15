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


export function changeType(type){
    return function(dispatch){
        dispatch({
            type:"CHANGE_TYPE",
            payload:type
        });
    }; 
}

export function nextDay(day){
   return function(dispatch){
        dispatch({
            type:"NEXT_DAY",
            payload:day
        });
    };  
}

export function prevDay(day){
   return function(dispatch){
        dispatch({
            type:"PREV_DAY",
            payload:day
        });
    };  
}

export function addItinerary(place,datetime){
    return function(dispatch){
        dispatch({
            type:"ADD_ITINERARY",
            payload:{place,datetime}
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

export function changeTime(time,id){
    return function(dispatch){
        dispatch({
            type:"CHANGE_SCHEDULE_TIME",
            payload:{time,id}
        });
    };
}

export function deletePlace(id){
    return function(dispatch){
        dispatch({
            type:"DELETE_PLACE",
            payload:id
        });
    };
}