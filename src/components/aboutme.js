import React, {Component } from 'react';
import { Grid, Cell, ProgressBar} from 'react-mdl';

class About extends Component {
    render() {
        return (
            <div classname = "about-body">
                <Grid className ="about-grid">
                    <Cell col = {6}>
                        <h2>Education</h2>
                        <Grid>
                            <Cell col={4} >
                                <div className='about-education-name'>
                                    <img src = "http://www.stickpng.com/assets/images/5842f74da6515b1e0ad75b26.png"
                                        alt = "columbia"
                                        />
                                    <p className="">Columbia<br/>University</p>
                                </div>
                            </Cell>
                            <Cell col={8} className="about-education-info"> 
                                <h4>Electrical Engineering</h4>
                                <h5>Expected May 2020</h5>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4} >
                                <div className='about-education-name'>
                                    <img src = "http://s3.amazonaws.com/ogden_images/www.post-journal.com/images/2019/01/12020445/fredonia-logo-840x840.jpg"
                                        alt = "fredonia"
                                        />
                                    <p className="">SUNY<br/>Fredonia</p>
                                </div>
                            </Cell>
                            <Cell col={8} className="about-education-info"> 
                                <h4>Computer Science</h4>
                                <h5>Completed May 2018</h5>
                            </Cell>
                        </Grid>
                    </Cell>
                    <Cell col = {6} style={{background: 'white'}}>
                        <h2>Skills</h2>
                        <Grid>
                            <Cell col={3} >
                                <div className='about-skills-name'>
                                    <img src = "https://www.sjpl.org/sites/default/files/events/images/2019/01/c.png"
                                        alt = "cplusplus"
                                        />
                                    <p className="about-skills-label">C++</p>
                                </div>
                            </Cell>
                            <Cell col={9} className="about-skills-prog-bar">
                                <ProgressBar progress={85} />
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={3}>
                                <div className='about-skills-name'>
                                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
                                        alt = "python"
                                        />
                                    <p className="about-skills-label">Python</p>
                                </div>
                            </Cell>
                            <Cell col={9} className="about-skills-prog-bar">
                                <ProgressBar progress={75} />
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={3}>
                                <div className='about-skills-name'>
                                    <img src = "http://www.sclance.com/pngs/javascript-logo-png/javascript_logo_png_728629.png"
                                        alt = "javascript"
                                        />
                                    <p className="about-skills-label">JS</p>
                                </div>
                            </Cell>
                            <Cell col={9} className="about-skills-prog-bar">
                                <ProgressBar progress={60} />
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={3}>
                                <div className='about-skills-name'>
                                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/1138px-Swift_logo.svg.png"
                                        alt = "swift"
                                        />
                                    <p className="about-skills-label">Swift</p>
                                </div>
                            </Cell>
                            <Cell col={9} className="about-skills-prog-bar">
                                <ProgressBar progress={60} />
                            </Cell>
                        </Grid>
                    </Cell>
                  
                </Grid>



            </div>
        )
    }
}

export default About;
