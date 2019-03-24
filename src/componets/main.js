import React from 'react';

import LandingPage from './landingpage';
import { Switch, Route } from 'react-router-dom';
import Aboutme from './aboutme';
import Projects from './projects';
import Contact from './contactme';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />

    </Switch>
)
export default Main;