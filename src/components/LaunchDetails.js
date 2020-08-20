import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const FigureComp = styled.figure`
    width:100%;
    height:250px;
    margin:0;
    align-self:center;
    background-color: rgb(227, 233, 227);   
`

const Img = styled.img`
    width:100%;
    height:100%;
`
const HeaderComp = styled(Header)`
    font-size: 17px;
    font-weight: bold;
    margin:10px 0;
`

const LaunchDetails = ({className,launch}) => {
    //console.log(launch)
    return(
        <section className={className}>
            <FigureComp>
                <Img src={launch.links.mission_patch_small} alt="mission_patch"/>
            </FigureComp>
            <HeaderComp text={`${launch.mission_name} #${launch.flight_number}`} />
            <span>Mission Ids:</span>
            {
                launch.mission_id.length>0?
                <ul>
                    {launch.mission_id.map(mission=> <li key={mission}>{mission}</li>)}
                </ul>: "-"
            }
            <span><b>Launch Year:</b>{launch.launch_year}</span>
            <span><b>Successful Launch:</b>{launch.launch_success?'True':'False'}</span>
            <span><b>Successful Landing:</b>{
            launch.rocket.first_stage.cores.filter(item=>item.land_success===null||item.landSuccess===false).length>0?"False":"True"
            }</span>
        </section>
    )
}

export default LaunchDetails