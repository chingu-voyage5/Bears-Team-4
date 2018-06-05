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