import {connect} from 'react-redux'
import Main from '../components/Main'

const mapStateToProps = (state) => ({
    year:state.launches.launch_year,
    launchSuccess:state.launches.launch_success,
    landSuccess:state.launches.landing_success
})

export default connect(mapStateToProps)(Main)