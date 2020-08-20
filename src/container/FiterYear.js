import {connect} from 'react-redux'
import {setYearFilter} from '../actions'
import FilterYear from '../components/FilterYear'

const mapStateToProps = (state) => ({
    launchSuccess:state.launches.launch_success,
    landSuccess:state.launches.landing_success
})

const mapDispatchToProps = (dispatch) => ({
    setFilter: (data) => dispatch(setYearFilter(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(FilterYear)