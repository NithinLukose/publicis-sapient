

export const SET_YEAR_FILTER = "SET_YEAR_FILTER"
export const SET_LAUNCH_SUCCESS_FILTER = "SET_LAUNCH_SUCCESS_FILTER"
export const SET_LAND_SUCCESS_FILTER = "SET_LAND_SUCCESS_FILTER"
export const REQUEST_LAUNCHES = "REQUEST_LAUNCHES"
export const RESPONSE_LAUNCHES = "RESPONSE_LAUNCHES"

export const setYearFilter = (year) => ({
    type:SET_YEAR_FILTER,
    payload:year
})

export const setlaunchSuccessFilter = (success) => ({
    type:SET_LAUNCH_SUCCESS_FILTER,
    payload:success
})

export const setlandSuccessFilter = (success) => ({
    type:SET_LAND_SUCCESS_FILTER,
    payload:success
})

const requestLaunches = () => ({
    type: REQUEST_LAUNCHES
})

const responseLaunches = (data) => ({
    type:RESPONSE_LAUNCHES,
    payload:data
})

export const fetchLaunches = (year,launchSuccess,landSuccess) => {
    return async dispatch => {
        dispatch(requestLaunches())
        year = year!==null?year.toLowerCase():"all"
        launchSuccess = launchSuccess!==null?launchSuccess.toLowerCase():"all"
        landSuccess = landSuccess!==null?landSuccess.toLowerCase():"all"
        let launches = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100${year==="all"?"":`&launch_year=${year}`}${landSuccess==="all"?"":`&land_success=${landSuccess}`}${launchSuccess==="all"?"":`&launch_success=${launchSuccess}`}`)
                                .then(res=>res.json())
        //console.log(launches)
        return dispatch(responseLaunches(launches))
    }
}