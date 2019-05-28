import React, {Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return (
            <div className = "contact-body">
                <Grid className = "contact-grid">
                    <Cell col = {6}>
                        <h2>Jamison Bunge</h2>
                        <img src = "https://avatars2.githubusercontent.com/u/32268142?s=460&v=4"
                            alt = "avatar"
                            style = {{height: '250px'}}
                        />
                        <p style = {{width: '75%', margin: 'auto', paddingTop: '1em' }}>
                        An engineering and computer science student with heavy interest in development technology, astronomy, and all things math related.
                        
                        </p>
                    
                    </Cell>
                    <Cell col = {6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        
                        <div className="contact-list" >
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '35px', fontFamily: 'Anton'}} >
                                        <i className="fa fa-phone-square"/>
                                        (716) 467-7807
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '35px', fontFamily: 'Anton'}} >
                                        <i className="fa fa-envelope-square"/>
                                        j.bunge@columbia.edu
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '35px', fontFamily: 'Anton'}} >
                                        <i className="fa fa-skype"/>
                                        JamisonBunge
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
