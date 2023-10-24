import React from "react";

//Navigation class
export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="navBar">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>
      </nav>
    );
  }
}
