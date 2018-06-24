export function selectPlace(latlng){
    return function(dispatch){
        dispatch({
            type:"NEW_PLACE",
            payload:latlng
        });
    };    
}


export function showMarkerPopUp(props){
    return function(dispatch){
        dispatch({
            type:"SHOW_MARKER_POPUP",
            payload:props
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

export function scrollTo(id){
    return function(dispatch){
        dispatch({
            type:"SCROLL_TO",
            payload:id
        })
    }
}