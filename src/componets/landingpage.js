import React, { Component } from 'react';
import {Cell, Grid} from "react-mdl";

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                            src="./IMG_1143.jpeg"
                            alt="selfie"
                            className="selfie-img"
                        />
                        <div className="banner-text">
                            <h1>Hi! I'm Freddie</h1>
                            <hr/>
                            <h2>Master's Student Majoring in Computer Engineering in Boston University</h2>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/fuyaowang" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
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