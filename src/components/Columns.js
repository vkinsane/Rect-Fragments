import React, { Component } from "react";

class Columns extends Component {
  render() {
    return (
      <React.Fragment>
        <td style={{ fontSize: "75px" }}>🖱️</td>
        <td style={{ fontSize: "75px" }}>🖨️ </td>
        <td style={{ fontSize: "75px" }}>⌨️ </td>
      </React.Fragment>
    );
  }
}

export default Columns;
