import React from 'react';

import LandingPage from './landingpage';
import { Switch, Route } from 'react-router-dom';
import Aboutme from './aboutme';
import Photos from './photos';
import Contact from './contactme';
import Project1 from './project1';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/photos" component={Photos} />
        <Route path="/contact" component={Contact} />
        <Route path="/p1" componet={Project1} />

    </Switch>
)
export default Main;