import React from 'react';
import Home from './components/Home/Home'
import Lessons from './components/Lessons/Lessons'
import Facts from './components/Facts/Facts'
import Works from './components/Works/Works.js'
import Safety from './components/Safety/Safety'

import './App.css';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/Counter/counter.actions';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
max-width: 1000px;
margin: 0px auto;
`

function App(props) {
   return (
      /*
      <div className='App'>
        <div>Count: {props.count}</div>
        <button onClick={() => props.increaseCounter()}>Increase        Count</button>
        <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
     </div>
     */
      <Wrapper>
         <Router>
            <div>
               <nav style={{height: "40px"}}>
                  <ul className="menu">
                     <li className="menu-item">
                        <Link to="/" className="menu-link">Главная</Link>
                     </li>
                     <li className="menu-item">
                        <Link to="/lessons" className="menu-link">Занятия</Link>
                     </li>
                     <li className="menu-item">
                        <Link to="/facts" className="menu-link">Факты</Link>
                     </li>
                     <li className="menu-item">
                        <Link to="/works" className="menu-link">Работы учеников</Link>
                     </li>
                     <li className="menu-item">
                        <Link to="/safety" className="menu-link">Техника безопасности</Link>
                     </li>
                  </ul>
               </nav>
               <Switch>
                  <Route path="/lessons">
                     <Lessons />
                  </Route>
                  <Route path="/facts">
                     <Facts />
                  </Route>
                  <Route path="/works">
                     <Works />
                  </Route>
                  <Route path="/safety">
                     <Safety />
                  </Route>
                  <Route path="/">
                     <Home />
                  </Route>
               </Switch>
            </div>
         </Router>
      </Wrapper>
   );
}
const mapStateToProps = (state) => {
   return {
     
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      increaseCounter: () => dispatch(increaseCounter()),
      decreaseCounter: () => dispatch(decreaseCounter()),
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);