import React from 'react'
import FilterYear from '../container/FiterYear'
import styled,{css} from 'styled-components'
import Header from './Header'

const FlexSection = styled.section`
    display:flex;
`

const ColumnFlexSection = styled(FlexSection)`
    flex-direction:column
`

const FilterValueComp = styled(FilterYear)`
    background-color:rgb(163, 233, 163);
    border:none;
    padding:5px 10px;
    font-size:15px;
    margin: 5px;
    border-radius:5px;
    text-decoration:none;
    color:black;

    ${
        props => props.active&&css`
            background-color:green;
        `
    }
`
const LaunchYearFilter = ({launchYear}) => {
    const years = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
    launchYear = Number(launchYear)
    return(
        <ColumnFlexSection>
            <FlexSection className="jcc bb m10 p2">
                <Header text="Launch year"/>
            </FlexSection>
            <FlexSection className="fw ">
                {years.map(year=>{
                    
                    if(year === launchYear){
                        
                       return  <FlexSection key={year} className="fb50 jcc"><FilterValueComp active filterValue={year}/></FlexSection>
                    }
                    return <FlexSection key={year} className="fb50 jcc"><FilterValueComp  filterValue={year}/></FlexSection>
                } )}
                
            </FlexSection>
        </ColumnFlexSection>
    )
}

export default LaunchYearFilter