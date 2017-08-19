import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AnyOne.css';

export default class AnyOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regex: '',
      text: '',
      exclusive: false
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
  }

  handleChangeText(e) {
    const text = e.target.value;
    const regex = `[${text}]`;
    this.setState({
      regex: regex,
      text: text,
    });
    this.props.onChangeedRegex(e.target.id, regex);
  }

  handleSelectChange(e) {
    const value = e.target.value;
    const regex = `[${value}]`;
    this.setState({
      regex: regex,
      text: value
    });
    this.props.onChangeedRegex(e.target.id, regex);
  }

  onChangeCheckBox(e) {
    const exclusive = this.state.exclusive === true ? false : true;
    const regex = exclusive ? `[^${this.state.text}]` : `[${this.state.text}]`;
    this.setState({
      regex: regex,
      exclusive: exclusive
    });
  }

  render() {
    return (
      <div className="any-one-character">
        <input id={this.props.id}
          onChange={this.handleChangeText} placeholder="any one character"
          value={this.state.text}
        />
        <select id={this.props.id} onChange={this.handleSelectChange}>
          <option value="">custom</option>
          <option value="a-z">a-z</option>
          <option value="A-Z">A-Z</option>
          <option value="0-9">0-9</option>
          <option value="a-z0-9">a-z0-9</option>
          <option value="a-z0-9">A-Z0-9</option>
        </select>
        ^:
        <input type="checkbox" onChange={this.onChangeCheckBox} />
      </div>
    )
  }
}

AnyOne.propTypes = {
  regex: PropTypes.string,
  text: PropTypes.string,
  exclusive: PropTypes.bool
}