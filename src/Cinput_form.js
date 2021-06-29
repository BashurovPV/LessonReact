import React, { Component } from 'react';
import './Css/Style_h5.css';
import Button from '@material-ui/core/Button';

export default class Cinput_form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            inputSubmit: '',
            submit: "",
            items: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSubmit = this.handleChangeSubmit.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    handleChangeSubmit(event) {
        this.setState({
            inputSubmit: event.target.value
        })
    }

    handleSubmit(event) {
        // предотвратим обновление страницы
        event.preventDefault();

        this.setState({
            submit: this.state.inputSubmit,
            inputSubmit: this.state.inputSubmit,
            items: [...this.state.items, this.state.inputSubmit]
        });
    }

    render() {
        return (
            <div>
                <h5 className="h5_style" >Input and push Submit:</h5>
                {/* <h5 style={{ color:"yellow", backgroundColor: "green", fontSize: 30 }}>Input and push Submit:</h5> */}

                <Button variant="contained" color="primary">
                    Primary
                </Button>

                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.inputSubmit} onChange={this.handleChangeSubmit} />
                    <button type="submit">Submit</button>
                </form>

                <h3>{this.state.submit}</h3>

                <ul>
                    {this.state.items.map((items, index) => (
                        <li key={index}>{items}</li>
                    ))}
                </ul>

                <input onChange={this.handleChange} />
                <h5>Controlled input:</h5>
                <h3>{this.state.input}</h3>

            </div>
        )
    }
}
