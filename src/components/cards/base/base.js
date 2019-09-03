import React from "react";

export default class CardBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }


  render() {
    const baseStyle = {
      height: "100%",
      borderRadius: 12,
      backgroundColor: "white",
      boxShadow: "0px 1.5px 1.5px -1px black"
    };

    if (!this.props.interactive) {
      return <div style={baseStyle}>{this.props.children}</div>;
    }

    const extraStyle = this.state.hover
      ? {
        "boxShadow": "0px 3px 12px -2px rgba(0, 0, 0, 0.65)"
      }
      : {};

    const combinedStyles = {...baseStyle, ...extraStyle};


    return (<div onMouseEnter={() => {
      console.log("mouse enter");
      return this.setState({hover: true})
    }}
                 onMouseLeave={() => {
                   console.log("mouse leave");
                   return this.setState({hover: false})
                 }}
                 style={combinedStyles}
    > {this.props.children} </div>)
  }
}


