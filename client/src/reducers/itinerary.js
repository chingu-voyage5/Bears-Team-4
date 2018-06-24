import moment from 'moment';

export default (state = {
    startdate:moment().startOf('day'),
    enddate:moment().startOf('day'),
    activeday:0,
    places:[],
    itinerary:{},
    type:'default',
    scrollto:null
}, action) => {
    switch(action.type){
        case "NEXT_DAY" :{
            return {
                ...state,
                activeday: action.payload
            }; 
        }
        case "PREV_DAY" :{
            return {
                ...state,
                activeday: action.payload
            }; 
        }
        case "START_DATE":{
            return {
                ...state,
                startdate: action.payload,
                activeday:0
            };
        }
        case "END_DATE":{
            return {
                ...state,
                enddate: action.payload,
                activeday:0
            };
        }
        case "NEW_PLACE":{
            return {
                ...state,
                center: action.payload
            };
        }
        case "NEW_SUGGESTIONS":{
            return{
                ...state,
                places:action.payload
            };
        }
        case "CHANGE_TYPE":{
            return{
                ...state,
                type:action.payload
            };
        }
        case "ADD_ITINERARY":{
            if (state.activeday in state.itinerary)
                return {
                    ...state,
                    itinerary:{...state.itinerary,[state.activeday]:[...state.itinerary[state.activeday],action.payload]},
                };
            else
                return {
                    ...state,
                    itinerary:{...state.itinerary,[state.activeday]:[action.payload]}
                };
        }
        case "CHANGE_SCHEDULE_TIME":{
            return{
                ...state,
                itinerary:Object.assign({},state.itinerary,{
                    [state.activeday]:state.itinerary[state.activeday].map(p=>p.place.place_id===action.payload.id?
                    {...p,datetime:action.payload.time}
                    :p)
                })
            };
        }
        case "DELETE_PLACE":{
            return{
                ...state,
                itinerary:Object.assign({},state.itinerary,{
                    [state.activeday]:state.itinerary[state.activeday].filter(p=>p.place.place_id!==action.payload)
                })
            };
        }
        case "SCROLL_TO":{
            return{
                ...state,
                scrollto:action.payload
            }
        }
        default:
            return state;
    }
};