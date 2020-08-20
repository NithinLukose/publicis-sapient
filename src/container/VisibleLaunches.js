import {connect} from 'react-redux'
import Content from '../components/Content'

const mapStateToProps = (state) => {
    
    
    return{
        launchList:state.launches.launchList,
        isFetching:state.launches.isFetching
    }
    
}

export default connect(mapStateToProps)(Content)