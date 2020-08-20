import React from 'react'
import styled from 'styled-components'
import LaunchDetails from './LaunchDetails'
import Header from './Header'

/*const LaunchDetailsComp = styled(LaunchDetails)`
    
    flex-basis:24%;
    background-color:blue;
    margin-bottom:10px;
    display:flex;
    flex-direction:column;
    padding:15px;
    margin-left:10px;

    
`*/

const LaunchDetailsComp = styled(LaunchDetails)`
    background-color: rgb(244, 248, 250);
    margin-bottom:10px;
    display:flex;
    flex-direction:column;
    padding:15px;
    font-size:14px;
    @media only screen and (min-width:700px){
        flex-basis:48%;
        margin:0 4px 4px 4px;
    }
    @media only screen and (min-width:1024px){
    
        flex-basis:22%;
        margin-left:2%;
        margin-bottom:10px;
        
    }
`

const HeaderComp = styled(Header)`
    font-size:20px;
    font-weight:bold;
    color:green;
`

const Content = ({className,isFetching,launchList,landSuccess}) => {
    console.log(isFetching)
    
    if(!isFetching&&launchList.length>0){
        //console.log(launchList)
        return(
            <section className={className}>
                {launchList.map(launch=><LaunchDetailsComp key={launch.flight_number} launch={launch} 
                landSuccess={landSuccess}/>)}
            </section>
        )
    }
    else if(isFetching){
        return <section className="fb85 df jcc aic"><HeaderComp text="loading ..."/></section>
    }
    return <section className="fb85 df jcc aic"><HeaderComp text="No data"/></section>
    
}

export default Content