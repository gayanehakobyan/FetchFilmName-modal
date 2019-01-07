import React, { Component } from 'react';
import { BrowserRouter as Router,StaticRouter, Route, Link } from "react-router-dom";
import App from './App.js'

function Names({ match }) {
    return (
      <div>
        <ul>
          <li>
            <Link to={`${match.url}/CastleInTheSky`}>Castle In The Sky</Link>
          </li><br/>
          <li>
            <Link to={`${match.url}/GraveoftheFireflies`}>Grave of the Fireflies</Link>
          </li><br/>
          <li>
            <Link to={`${match.url}/MyNeighborTotoro`}>My Neighbor Totoro</Link>
          </li><br/>
          <li>
            <Link to={`${match.url}/KikisDeliveryService`}>Kiki's Delivery Service</Link>
          </li><br/>
          <li>
            <Link to={`${match.url}/OnlyYesterday`}>Only Yesterday</Link>
          </li><br/>
          <li>
            <Link to={`${match.url}/PorcoRosso`}>Porco Rosso</Link>
          </li><br/>
          <li>
            <Link to={`${match.url}/PomPoko`}>Pom Poko</Link>
          </li>
        </ul>
        <Route path={`${match.path}/:filmId`} component={App} />
      </div>
    );
  }
  
  function MyExample() {
    return (
      <Router>
        <div> 
          <Link to="/films" className="films">Please click here to see all the films</Link>
          <Route path="/films" component={Names} />
        </div>
      </Router>
    );
  }

  export default MyExample;