import React from 'react'
import FilterLanding from '../container/FilterLandingSuccess'
import Header from './Header'
import styled,{css} from 'styled-components'

const FlexSection = styled.section`
    display:flex;
`

const ColumnFlexSection = styled(FlexSection)`
    flex-direction:column
`

const FilterValueComp = styled(FilterLanding)`
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

const SuccessfulLandingFilter = ({landSuccess}) => {
    let success = ["True","False"]
    //console.log(landSuccess)
    return(
        <ColumnFlexSection>
            <FlexSection className="jcc  bb m10 p2">
                <Header text="Successful Landing"/>
            </FlexSection>
            <FlexSection className="fw ">
                {success.map(item=>{
                    if(item === landSuccess){
                        return <FlexSection key={item} className="fb50 jcc"><FilterValueComp active filterValue={item}/></FlexSection>
                    }
                    return <FlexSection key={item} className="fb50 jcc"><FilterValueComp filterValue={item}/></FlexSection>
                })
                }
                
            </FlexSection>
        </ColumnFlexSection>
    )
}

export default SuccessfulLandingFilter