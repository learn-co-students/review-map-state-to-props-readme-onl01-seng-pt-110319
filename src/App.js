import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // debugger;
  // return { orangePeel: ['a','b','c']}
  return { items: state.items }
}

export default connect(mapStateToProps)(App);

// export default connect( state => ({ items: state.items }) )(App);
//can change mapStateProps() to an arrow function
// if you console.log in console to hiit debugger and type  state...whats returned is items and users regardless if we only have
//items: state.items only. it returns the enitre state object or state of store.

// We understand that the connect() function calls the mapStateToProps() function
//  each time there is a change in state, and that mapStateToProps() receives state as its first argument.
// We also know that mapStateToProps() can happily ignore the store's state and return whatever
//  it likes. We know that connect() takes whatever the return value is of the mapStateToProps() function
//   and passes it to the component that is in those last set of parentheses (in this case, App).
// Because we are taking a part of the store's state and porting it to become props of the relevant
//  component, we say that we are mapping it as props to the component, thus the name mapStateToProps.