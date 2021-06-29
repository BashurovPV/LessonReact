import React, { Component } from 'react';
import Ccomp_child_1 from './Ccomp_child_1';
import Ccomp_child_2 from './Ccomp_child_2';


export default class Ccomponents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '123',
            st_name: 'Button NOT pressed!'
        };

        this.handleChange = this.handleChange.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    handleChange(event) {
        this.setValue({
            inputValue: event.target.value
        })
    }

    updateData = (value) => {
      this.setState({
          st_name: value
      })  
    }

    render() {
        return (
            <div>
                <p>State : {this.state.name}</p>
                <Ccomp_child_1
                    input={this.state.inputValue}
                    hndlChange={this.handleChange}
                    updateData={this.updateData} />

                <Ccomp_child_2 input={this.state.inputValue} />

            </div>
        );
    }

}
