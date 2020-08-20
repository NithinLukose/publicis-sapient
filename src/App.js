import React,{useEffect} from 'react';
import {useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css';
import {fetchLaunches} from './actions'

const HeaderComp = styled(Header)`
  
  padding:10px;
  font-size:30px;
  font-weight:bold;
`
/*const MainComp = styled(Main)`
  
  
  flex-grow:3;
  background-color:yellow;
  display:flex;
  padding:10px;
  @media only screen and (max-width:700px){
    flex-direction:column;
    justify-conetent:center;
    align-items:center;
  }


`*/

const MainComp = styled(Main)`
  
  display:flex;
  flex-direction:column;
  padding:10px;
  @media only screen and (min-width:700px){
    flex-direction:row;
    flex-grow:3;
  }
`

const FooterComp = styled(Footer)`
  
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 20px;
  font-size:20px;

`

const App = () =>{
  
    let query = new URLSearchParams(useLocation().search);
    let year = query.get("year")
    let launchSuccess = query.get("launch_success")
    let landSuccess = query.get("land_success")
    //console.log(year + " " + launchSuccess + " " + landSuccess)
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchLaunches(year,launchSuccess,landSuccess))
    },[dispatch,year,launchSuccess,landSuccess])
  return(
    

      <section className="conatiner">
        <HeaderComp text="SpacEx Launch programs" />
        <MainComp />
        <FooterComp text="Developed by:Nithin Lukose"/>
      </section>

    
  )
}

export default App;
