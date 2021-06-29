import React, { Component } from 'react';
import { Rfcomponents } from './Rfcomponents';
import Cinput_form from './Cinput_form'

export default class Ccomponents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            word: "Hi, world!!!",
            visibility: false,
            count: 0
        };

        this.handleClick = this.handleClick.bind(this);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.resetCrement = this.resetCrement.bind(this);
    }

    handleClick() {

        this.setState(state => ({
            visibility: !state.visibility
        }))
    }

    increment() {

        this.setState(state => ({
            count: state.count + 1
        }));
    }

    decrement() {

        this.setState(state => ({
            count: state.count - 1
        }));
    }

    resetCrement() {

        this.setState({
            count: 0
        });
    }


    render() {

        const lvWord = this.state.word;
        const lvCount = this.state.count;

        if (this.state.visibility) {
            return (
                <div>
                    {/* <h1>Class component {this.props.numbers.join(',')}</h1>
                    <h1>Доступ к state через "this.state": {this.state.word}</h1>
                    <h1>Доступ к state через "const": {lvWord}</h1> */}
                    
                    <h1>Now you see me!</h1>
                    <h2>Count = {lvCount}</h2>
                    <button onClick={this.handleClick}>Click</button>

                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.resetCrement}>Reset</button>

                    <Rfcomponents />
                    <Cinput_form />
                </div>
            );

        }
        else {
            return (
                <div>
                    <h1>Now you not see me!</h1>
                    <button onClick={this.handleClick}>Click</button>
                    <Rfcomponents />
                </div>
            )
        }
    }
}
