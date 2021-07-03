import React, { Component } from 'react';
import Header from '../../component/header';
import Footer from '../../component/footer';
import './App.css';

import PropTypes from 'prop-types';

const propTypes = {
};
const defaultProps = {
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Praveen',
      age:  27,
      address:'India'
    };
  }

  addHandle = () => {
    const { age } = this.state;
    this.setState({
      age: age+1,
    })
  }

  render() {
    const { name, age, address } = this.state;
    return (
      <div className="AppLayout">
        <div className="AppLayout__view">
          <Header />

          <Footer
            name1={name}
            age={age}
            address={address}
            addHandle={this.addHandle}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;
export default App;
