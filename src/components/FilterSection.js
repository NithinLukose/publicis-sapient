import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import LaunchYearFilter from './LaunchYear'
import SuccessfulLaunchFilter from './SuccessfulLaunch'
import SuccessfulLandingFilter from './SuccessfulLanding'



const HeaderComp = styled(Header)`
    font-size: 17px;
    font-weight: bold;
`


const FilterSection = ({className,year,launchSuccess,landSuccess}) => {
    return(
        <nav className={className}>
            <section className="df fdc w p10">
                <HeaderComp text="Filters" />
                <LaunchYearFilter launchYear={year}/>
                <SuccessfulLaunchFilter launchSuccess={launchSuccess} />
                <SuccessfulLandingFilter landSuccess={landSuccess} />
            </section>
        </nav>
    )
}

export default FilterSection