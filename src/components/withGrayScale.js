import React, { Component } from "react";

export default function (WrappedComponent, grayscale) {
  return class extends Component {
    constructor(props) {
      console.log(props);
      super(props);
      this.state = {
        isHover: true
      };
    }
    onMouseEnter() {
      this.setState({
        isHover: true
      });
    }
    onMouseLeave() {
      this.setState({
        isHover: false
      });
    }
    render() {
      return (
        <div
          style={{
            filter: this.state.isHover ? grayscale : "grayscale(0)"
          }}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
        >
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}
