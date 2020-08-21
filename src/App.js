import React,{useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import Header from './components/Header'
import Main from './container/mainContainer'
import Footer from './components/Footer'
import './App.css';
import {fetchLaunches} from './actions'

const HeaderComp = styled(Header)`
  
  padding:10px;
  font-size:30px;
  font-weight:bold;
`

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
  
   
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchLaunches("all","all","all"))
    },[dispatch])
  return(
    
      <Router>
        <Switch>
          <Route path="/">
            <section className="conatiner">
              <HeaderComp text="SpacEx Launch programs" />
              <MainComp />
              <FooterComp text="Developed by:Nithin Lukose"/>
            </section>
          </Route>
        </Switch>
      </Router>
      
      

    
  )
}

export default App;
