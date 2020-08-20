import {connect} from 'react-redux'
import {setlandSuccessFilter} from '../actions'
import FilterLandSuccess from '../components/FilterLandSuccess'

const mapStateToProps = (state) => ({
    year:state.launches.launch_year,
    launchSuccess:state.launches.launch_success
})

const mapDispatchToProps = (dispatch) => ({
    setFilter: (data) => dispatch(setlandSuccessFilter(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(FilterLandSuccess)