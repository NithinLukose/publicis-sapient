import {SET_LAUNCH_SUCCESS_FILTER,SET_YEAR_FILTER,SET_LAND_SUCCESS_FILTER,
    REQUEST_LAUNCHES,RESPONSE_LAUNCHES} from '../actions'

const launches = (state={
    isFetching:false,
    launchList:[],
    launch_year:"all",
    launch_success:"all",
    landing_success:"all"
},action) => {
    //console.log(action.payload)
    switch(action.type){
        case SET_LAND_SUCCESS_FILTER:
            return {...state,isFetching:true,landing_success:action.payload}
        case SET_LAUNCH_SUCCESS_FILTER:
            return {...state,isFetching:true,launch_success:action.payload}
        case SET_YEAR_FILTER:
            return {...state,isFetching:true,launch_year:action.payload}
        case REQUEST_LAUNCHES:
            return {...state,isFetching:true}
        case RESPONSE_LAUNCHES:
            return {...state,isFetching:false,launchList:action.payload}
        default:
            return state;
    }   

}

export default launches