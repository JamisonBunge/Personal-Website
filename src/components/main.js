import React from 'react';
import Landing from "./landingpage"
import About from "./aboutme"
import Resume from "./resume"
import Contact from "./contacts"
import Projects from "./projects"
 
import { Switch, Route } from 'react-router-dom'

const Main = () => (
    <Switch>
        <Route exact path = '/' component={ Landing } />
        <Route path = "/aboutme" component = {About} />
        <Route path = "/resume" component = {Resume} />
        <Route path = "/projects" component = {Projects} />
        <Route path = "/contacts" component = {Contact} />
   </Switch>
)

// const Main = () => (
//         <div><h1>Hello</h1></div>
    
// )

export default Main;