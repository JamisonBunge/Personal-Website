import React, {Component } from 'react';
//import { tsConstructorType } from '@babel/types';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};   
    }


    toggleCategories() {
        if( this.state.activeTab === 0) {
            return (
                // Shape Magic!
                <div className="projects-grid">
                    <Card shadow = {5} style = {{minwidth: '450', margin: 'auto'}}>
                        <CardTitle style = {{color: 'black', height: '176px', background: 'url(https://developer.apple.com/swift/images/swift-og.png) center / cover'}}>Shape Magic!</CardTitle>
                        <CardText> 
                            Childrens Shape matching game. Developed in Swift using MVC archetecture 
                        </CardText>
                        <CardActions border>
                            <Button colored target="_blank" href="https://github.com/JamisonBunge/Shape-Matching-App">GitHub</Button>
                            {/* <Button colored>App Store</Button>
                            <Button colored> YT Demo</Button> */}
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name = "share"/>
                        </CardMenu>
                    </Card>
                </div>
                

                // Coming Soon!
                
            )
        } else if( this.state.activeTab === 1) {
            return (
                // Shape Magic!
                <div className="projects-grid">
                    {/* //Coming Soon! */}
                    <Card shadow = {5} style = {{minwidth: '450', margin: 'auto'}}>
                        <CardTitle style = {{color: 'black', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/2100/1*Q5EUk28Xc3iCDoMSkrd1_w.png) center / cover'}}> API Backend using Flask </CardTitle>
                        <CardText> 
                            API Backend using Flask 
                        </CardText>
                        <CardActions border>
                            <Button colored target="_blank" href="https://github.com/JamisonBunge/BackendAPIForRestaurants">GitHub</Button>
                            {/* <Button colored>App Store</Button>
                            <Button colored> YT Demo</Button> */}
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name = "share"/>
                        </CardMenu>
                    </Card>
                

                         {/* //Coming Soon! */}
                         <Card shadow = {5} style = {{minwidth: '450', margin: 'auto'}}>
                         <CardTitle style = {{color: 'black', height: '176px', background: 'url(https://sap.github.io/ui5-webcomponents/images/react.svg) center / cover'}}> This website </CardTitle>
                         <CardText> 
                             This website
                         </CardText>
                         <CardActions border>
                             <Button colored target="_blank" href="https://github.com/JamisonBunge/Personal-Website">GitHub</Button>
                             {/* <Button colored >App Store</Button>
                             <Button colored> YT Demo</Button> */}
                         </CardActions>
                         <CardMenu style={{color: '#fff'}}>
                             <IconButton name = "share"/>
                         </CardMenu>
                     </Card>
                 </div>
                

                // Coming Soon!
                
            )
        }
        else if( this.state.activeTab === 2) {
            return (
                // Shape Magic!
                <div className="projects-grid">

                    {/* //Coming Soon! */}
                    <Card shadow = {5} style = {{minwidth: '450', margin: 'auto'}}>
                        <CardTitle style = {{color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png) center / cover'}}>Proxy Server</CardTitle>
                        <CardText> 
                        Cacheing Proxy Server
                        </CardText>
                        <CardActions border>
                            <Button colored target="_blank" href="https://github.com/JamisonBunge/Caching-Proxy-Server-">GitHub</Button>
                            {/* <Button colored>App Store</Button>
                            <Button colored> YT Demo</Button> */}
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name = "share"/>
                        </CardMenu>
                    </Card>

                    {/* //Coming Soon! */}
                    <Card shadow = {5} style = {{minwidth: '450', margin: 'auto'}}>
                        <CardTitle style = {{color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png) center / cover'}}>File Compression Command Line Tool</CardTitle>
                        <CardText> 
                            File Compression Command Line Tool
                        </CardText>
                        <CardActions border>
                            <Button colored target="_blank" href="https://github.com/JamisonBunge/textCompressionProject">GitHub</Button>
                            {/* <Button colored>App Store</Button>
                            <Button colored> YT Demo</Button> */}
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name = "share"/>
                        </CardMenu>
                    </Card>
                </div>
                

                // Coming Soon!
                
            )
        }
    }
 

    render() {
        return (
            <div className = "catagory-tabs ">
                <Tabs activeTab = {this.state.activeTab} onChange ={(tabId) => this.setState({activeTab: tabId})} ripple >
                    <Tab>iOS</Tab>
                    <Tab>Web</Tab>
                    <Tab>Misc</Tab>
                </Tabs>
        
                <Grid>
                    <Cell col = {12}>
                        <div className = "content"> {this.toggleCategories()} </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;
