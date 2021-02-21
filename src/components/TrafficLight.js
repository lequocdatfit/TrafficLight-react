import React, { Component } from 'react';
import './TrafficLight.css';
const classnames = require('classnames');


const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class TrafficLight extends Component{
    constructor() {
        super();
        this.state = {
            'currentColor' : RED,
        };
        
        setInterval(() => {
            this.setState({
                'currentColor' : this.getNextColor(this.state.currentColor)
            })
        }, 1000)  
    }

    getNextColor(color) {
        switch (color) {
            case RED:
                return YELLOW;
            case YELLOW:
                return GREEN;
            case GREEN:
                return RED;
            default:
                return RED;
        }
    }
    render() {
        return(
            <div className="TrafficLight">
                <div className={classnames('light', 'red', {
                    active: this.state.currentColor === RED
                })}></div>
                <div className={classnames('light', 'yellow', {
                    active: this.state.currentColor === YELLOW
                })}></div>
                <div className={classnames('light', 'green', {
                    active: this.state.currentColor === GREEN
                })}></div>
                
            </div>
        )
    }
}

export default TrafficLight;