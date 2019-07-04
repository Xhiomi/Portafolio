import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import photo from "../assets/images/0.jpg"

import styled from 'styled-components';

const RoutingComponentStyles = styled.section`
  .link{
    display: flex;
    margin: auto;
  }
  .mainNavBar {
    background-image: url('https://static.platzi.com/media/blog/mern-stack-284eedb6-ee6b-4441-b181-5064a453a15a.png')
    margin: auto;
    display: flex;
    background-color: lightpink;
    height: 100px;
    width: 100vw;
    vertical-align: middle;
  }
  .icon {
    justify-content: center;
    text-align: center;
    height: 70%;
    vertical-align: middle;
    margin-top: 10%;
    align-item:center;
    margin: auto;
  }
  .icon {

  }
  .images {
     margin: auto;
     vertical-align: middle;
  }
  .photo {
    border-radius: 50%;
    justify-content: center;
    align-item: center;
    margin: auto;
    /* margin-left: 300px;
    margin-right: 300px; */
    margin-top: 100px;
  }
  p{
    margin-top: 30px;
    text-align: center;
    font-size: 30px;
  }
  .centraal{
    display: inline-block;
    width: 300px;
    margin: auto;
    margin-top: 80px;
  }
  .images{
    display: flex;
  }
  .mern{
    width: 100%;
    margin: auto;
  }
`;

// import HomeComponent from './HomeComponent';
// import ControlledCarousel from './CatComponent';
// import UserComponent from './UserComponent';
// import LogInComponent from './LogInComponent';
// import NavComponent from './NavComponent';
// import HealthComponent from './HealthComponent';

// import CatsComponent from './CatsComponent';
// import ApiComponent from './ApiComponent';
// import RMComponent from './RMComponent';
// import ElementsComponent from './ElementsComponent';
// import PoroComponent from './PoroComponent';

// <Route path="/razas_de_gatitos" exact component={CatsComponent} />
// <Route path="/api-project/" component={ApiComponent} />
// <Route path="/r&M_project/" component={RMComponent} />
// <Route path="/elements_game/" component={ElementsComponent} />
// <Route path="/poro_game/" component={PoroComponent} />

class RoutingComponent extends Component {
  render() {
    return (
      <RoutingComponentStyles>
        <div className="mainNavBar">

          <a className="icon" href="https://xhiomi.github.io/Cat_project/" target="_blank" >
          <img className="images" src="https://img.icons8.com/nolan/64/000000/1-circle.png" /></a>
          <a className="icon" href="https://xhiomi.github.io/StarWars_project/" target="_blank" >
          <img className="images" src="https://img.icons8.com/nolan/64/000000/medal-second-place.png" /></a>
          <a className="icon" href="https://xhiomi.github.io/RM_project/" target="_blank" >
          <img className="images" src="https://img.icons8.com/color/48/000000/css3.png" /></a>
          <a className="icon" href="https://xhiomi.github.io/Elements_game/" target="_blank" >
          <img className="images" src="https://img.icons8.com/dusk/64/000000/4k.png" /></a>
          <a className="icon" href="https://xhiomi.github.io/Poro_game/" target="_blank" >
          <img className="images" src="https://img.icons8.com/color/48/000000/html-5.png" /></a>

        </div>



          <img className="mern" src="https://static.platzi.com/media/blog/mern-stack-284eedb6-ee6b-4441-b181-5064a453a15a.png" alt=""/>


      </RoutingComponentStyles>
    );
  }
}

export default RoutingComponent;
