// _error.js

import React from "react";

export default class Error extends React.Component {
  static getInitialProps({ res, xhr }) {
    const statusCode = res ? res.statusCode : xhr ? xhr.status : null;
    return { statusCode };
  }

  render() {
    return (
      <p>
        {this.props.statusCode
          ? `Dude, error ${this.props.statusCode} occurred`
          : "An error occurred on client"}
      </p>
    );
  }
}
