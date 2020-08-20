import React from 'react'
import FilterLaunch from '../container/FilterLauchSuccess'
import styled,{css} from 'styled-components'
import Header from './Header'

const FlexSection = styled.section`
    display:flex;
`

const ColumnFlexSection = styled(FlexSection)`
    flex-direction:column
`

const FilterValueComp = styled(FilterLaunch)`
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

const SuccessfulLaunchFilter = ({launchSuccess}) => {

    //console.log(launchSuccess)
    let success = ["True","False"]
    return(
        <ColumnFlexSection>
            <FlexSection className="jcc  bb m10 p2">
                <Header text="Successful Launch"/>
            </FlexSection>
            <FlexSection className="fw ">
                {success.map(item=>{
                    if(item === launchSuccess){
                        return <FlexSection key={item} className="fb50 jcc"><FilterValueComp active filterValue={item}/></FlexSection>
                    }
                    return <FlexSection key={item} className="fb50 jcc"><FilterValueComp filterValue={item}/></FlexSection>
                })
                }
            </FlexSection>
        </ColumnFlexSection>
    )
}

export default SuccessfulLaunchFilter