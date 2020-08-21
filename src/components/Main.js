import React,{useEffect} from 'react'
import FilterSection from './FilterSection'
import Content from '../container/VisibleLaunches'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import {fetchLaunches} from '../actions'



const FilterSectionComp = styled(FilterSection)`
    margin-bottom:5px;  
    
    @media only screen and (min-width:700px){
        margin:bottom:0;
        margin-right:5px;
        flex-basis:40%;
    }
    @media only screen and (min-width:1024px){
        margin-bottom:0;
        flex-basis:15%;
    }
`


const ContentComp = styled(Content)`
    
    margin-top:5px;
    display:flex;
    flex-direction:column;
    flex-wrap:nowrap;
    
    @media only screen and (min-width:700px){
        margin-top:0;
        margin-left:5px;
        flex-basis:60%;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
    }
    @media only screen and (min-width:1024px){
    
        flex-basis:85%;
        margin-top:0;
    }

`


const Main = ({className,year,launchSuccess,landSuccess}) => {

    
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchLaunches(year,launchSuccess,landSuccess))
    },[dispatch,year,launchSuccess,landSuccess])
    return(
        <main className={className}>
            <FilterSectionComp year={year} launchSuccess={launchSuccess} landSuccess={landSuccess}/>
            <ContentComp year={year} launchSuccess={launchSuccess} landSuccess={landSuccess} />
        </main>
    )
}

export default Main