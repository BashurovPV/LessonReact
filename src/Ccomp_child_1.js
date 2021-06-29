import React, { Component } from 'react'

export default class Ccomp_child_1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Button pressed!'
        }
    }

    render() {

        return (
            <div>
                <h1>Name child_1: </h1>
                <input 
                  value={this.props.input} 
                  onChange={this.props.hndlChange} />

                <button onClick={() => {this.props.updateData(this.state.name)}}>Press button</button>  
            </div>
        )
    }
}
