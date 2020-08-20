import {connect} from 'react-redux'
import {setlaunchSuccessFilter} from '../actions'
import FilterLaunchSuccess from '../components/FilterLaunchSucces'

const mapStateToProps = (state) => ({
    year:state.launches.launch_year,
    landSuccess:state.launches.landing_success
})

const mapDispatchToProps = (dispatch) => ({
    setFilter: (data) => dispatch(setlaunchSuccessFilter(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(FilterLaunchSuccess)