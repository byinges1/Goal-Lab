import React, { Component } from 'react';
import "firebase/auth"

export default class HomeNav extends Component {
  render() {
    return(
      <nav className="navbar is-transparent is-hidden-touch is-fixed-top is-spaced">
        <div className="navbar-brand">
          <a className="navbar-item" href="test.html" data-balloon="We're GoalLab 🤭" data-balloon-pos="right">
            <img id="logo-img" src="img/logo.png" alt="logo" />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="#demo">
              <span>Demo</span>
            </a>
            <a className="navbar-item" href="#features">
              <span>Features</span>
            </a>
            <a className="navbar-item" href="#why">
              <span>Why One Profile?</span>
            </a>
            <a className="navbar-item" href="/index.html">
              <span>Login</span>
            </a>
            <div className="navbar-item" id="nav-divider">
              <span className="has-text-grey-light">|</span>
            </div>
            <div className="navbar-item">
              <a href="/index.html" className="button button-special box-shadow-lift is-rounded">
                <span className="icon has-text-discord">
                  <i className="fad fa-magic"></i>
                </span>
                <span> Sign Up</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
