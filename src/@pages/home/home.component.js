import React, { PureComponent } from 'react';
import './home.styles.scss';

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <h1 className="home-heading">Welcome to React-Redux quick start hoem page!</h1>
      </div>
    );
  }
}
