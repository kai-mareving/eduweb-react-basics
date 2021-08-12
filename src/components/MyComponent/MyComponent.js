import React from 'react';

class MyComponent extends React.Component {
  //or OLD SYNTAX:
  //constructor(props) {
    //super(props);
    //this.state = { text: '', }
    //this.handleChange = this.handleChange.bind(this);
  //}
  //handleChange(e){this.setState({text: e.target.value.toUpperCase()});

  //* New syntax without constructor (@babel/plugin-proposal-class-components):
  state = {
    text: '',
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value.toUpperCase() });
    console.log(this.state);
  }

  render() {
    return (
      <> {/* <React.Fragment> */}
        <input placeholder='your text'
          onChange={this.handleChange}
          value={this.state.text}/>
        <h1>{this.state.text} </h1>
      </>
    )
  }
}

export default MyComponent;
