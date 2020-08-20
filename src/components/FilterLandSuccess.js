import React from 'react'
import {Link} from 'react-router-dom'

const FilterLandSuccess = ({filterValue,className,setFilter,year,launchSuccess}) => {
    const handleClick = () => {
        setFilter(filterValue)
        
    }
    return(
        <Link className={className} onClick={handleClick} to={`/launches?land_success=${filterValue}&year=${year}&launch_success=${launchSuccess}`}>
            {filterValue}
        </Link>
    )
}

export default FilterLandSuccess
