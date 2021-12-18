import React, { Component } from "react";
import './styles.css';


class TextField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: props.labelValue
        }
    }
    render() {
        return (
            <div className="input-wrapper">
                <label htmlFor="">{this.state.label}</label>
                <input value={this.state.label} type='text' placeholder={this.props.placeholderText} />
                <span className="error">Shoudl not be empty</span>
            </div>
        )
    }
}

export default TextField;