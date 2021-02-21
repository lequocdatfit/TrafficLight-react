import React, { Component } from 'react';
import './TrafficLight.css';
const classnames = require('classnames');


class TrafficLight extends Component{
    render() {
        const currentColor = this.props.state;
        return(
            <div className="TrafficLight">
                <div className={classnames('light', 'red', {
                    active: currentColor === 0
                })}></div>
                <div className={classnames('light', 'yellow', {
                    active: currentColor === 1
                })}></div>
                <div className={classnames('light', 'green', {
                    active: currentColor === 2
                })}></div>
                
            </div>
        )
    }
}

export default TrafficLight;