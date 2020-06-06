import React from "react";
import "./Button.css";

class ButtonParent extends React.Component {
    constructor(props) {    
      super(props)
      this.state = {
        condition: false
      }
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      this.setState({
        condition: !this.state.condition
      });

      this.state.condition ? this.props.onRowsSelect(this.props.index, false) : this.props.onRowsSelect(this.props.index, true);      
    }
    render() {
      return (
        <ButtonChild        
          className={ this.state.condition ? "button toggled" : "button" }
          toggleClassName={ this.handleClick }
        >
          {this.state.condition ? "Selected" : "Select"}
        </ButtonChild>
      )
    }
  }
  
  class ButtonChild extends React.Component {
    render() {
      return (
        <div
          className={ this.props.className }
          onClick={ this.props.toggleClassName }
        >
          { this.props.children }
        </div>
      )    
    }
  }

  export default ButtonParent;