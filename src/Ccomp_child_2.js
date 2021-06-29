import React, { Component } from 'react'

export default class Ccomp_child_2 extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h1>Render input:</h1>
                <p>{this.props.input}</p>
            </div>
        )
    }
}
