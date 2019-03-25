import React, { Component } from 'react';
import {Cell, Grid} from "react-mdl";
import selfie from './IMG_1143.jpeg';
import resume from './FuyaoWang.pdf';
import landingbackground from './landingbackground.jpg';
var back = {
    width: "100%",
    margin: 'auto',
};
class Landing extends Component{
    render(){
        return(
            <div style={{back}}>
                <Grid className='landing-grid'>
                    <Cell col={6}>
                        <img
                            src={selfie}
                            alt="selfie"
                            className="selfie-img"
                        />

                    </Cell>
                    <Cell col={6}>
                        <div className="banner-text">
                            <h1>Hi! I'm Freddie</h1>
                            <hr/>
                            <h2>Master's Student Majoring in Computer Engineering in Boston University</h2>
                            <a className="download-resume" href={resume} download="FuyaoWang.pdf">Download My Resume</a>
                            <hr/>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/fuyaowang" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/wfystx" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github" aria-hidden="true" />
                                </a>
                            </div>

                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}
export default Landing;