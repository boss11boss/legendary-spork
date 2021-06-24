import React, { Component,Fragment } from 'react';
import Nav from "./Components/Nav";
import ActiveCard from "./Components/ActiveCard";
import AllCard from "./Components/AllCard/AllCard";
import { connect } from 'react-redux';
import { readAction } from "./Store/Action";

class App extends Component {
  render() {
    this.props.readAction()
    return (
      <Fragment>
          <Nav/>
          <ActiveCard/>
          <AllCard/>
      </Fragment>
    )
  }
}

const mapDispatchToProps=({
  readAction
})



export default connect(null,mapDispatchToProps)(App);