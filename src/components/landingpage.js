import React, { Component, } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render() {
        return (
           <div style = {{width: '100%',margin: 'auto'}}>
                <Grid className = "landing-grid">
                    <Cell col = {12}>
                        <img src = "https://avatars2.githubusercontent.com/u/32268142?s=460&v=4"
                            alt = "avatar"
                            className = "avatar-img"
                        />
                        <div className = "banner-text">
                            <h1>Jamison Bunge</h1>
                            <hr/> 
                            <p>My Skills | Swift | NodeJS | React | C++ | Python</p>
                                <div className = "social-links ">
                                    <a rel="noopener noreferrer" href = "https://github.com/jamisonbunge" target = "_blank">
                                        <i className = "fa fa-linkedin-square"  aria-hidden = "true"/>
                                    </a>

                                    <a rel="noopener noreferrer" href = "https://github.com/jamisonbunge" target = "_blank">
                                        <i className = "fa fa-github-square"  aria-hidden = "true"/>
                                    </a>

                                    <a rel="noopener noreferrer" href = "https://github.com/jamisonbunge" target = "_blank">
                                        <i className = "fa fa-youtube-square"  aria-hidden = "true"/>
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
