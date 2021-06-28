import React, { Component } from 'react';
import { Rfcomponents } from './Rfcomponents';

export default class Ccomponents extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          name: "Pasha"   
        }
    }
    
    
    render() {
        return (
            <div>
                <h1>Class component {this.props.numbers.join(',')}</h1>
                <Rfcomponents />
            </div>
        )
    }
}
