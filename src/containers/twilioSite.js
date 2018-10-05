import React, { Component } from 'react';

import classes from './twilioSite.css';

class TwilioSite extends Component {
    clickHandler = () => {
        console.log("hello")
    } 

    render() {
        return (
            <div className={classes.TwilioSite}>
                <button className={classes.Button} onClick={this.clickHandler}>Fire Twilio!</button>
            </div>
        );
    }
}

export default TwilioSite;