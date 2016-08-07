import React from "react"

class Change extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.actions.buttonClick();
  }

  render() {
    return (
      <button onClick={this.handleClick} >change</button>
    );
  }
}

export default Change