import React from 'react'
import {Link} from 'react-router-dom'

const FilterYear = ({filterValue,className,setFilter,launchSuccess,landSuccess}) => {
    const handleClick = () => {
        setFilter(filterValue)
        
    }
    return(
        <Link className={className} onClick={handleClick} to={`/launches?year=${filterValue}&launch_success=${launchSuccess}&land_success=${landSuccess}`}>
            {filterValue}
        </Link>
    )
}

export default FilterYear
