import React from 'react'
import {Link} from 'react-router-dom'

const FilterLaunchSuccess = ({filterValue,className,setFilter,year,landSuccess}) => {
    //console.log(filterValue)
    const handleClick = () => {
        setFilter(filterValue)
        
    }
    return(
        <Link className={className} onClick={handleClick} to={`/launches?launch_success=${filterValue}&year=${year}&land_success=${landSuccess}`}>
            {filterValue}
        </Link>
    )
}

export default FilterLaunchSuccess
