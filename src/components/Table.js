import React, { Component } from "react";
import Columns from "./Columns.js";
class Table extends Component {
  render() {
    return (
      <table className="table custom-table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Column 1</th>
            <th scope="col">Column 2</th>
            <th scope="col">Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
