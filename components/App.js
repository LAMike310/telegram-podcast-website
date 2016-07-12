import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import Home from './Home'
import Header from './Header'
import Transaction from './Transaction/Transaction'
import { Router, Route, Link, IndexRoute, hashHistory, history } from 'react-router';
class App extends Component {
  render() {
    let { actions } = this.props
    const Container = (props) => <div>
      <Header params={props.params} actions={actions}> </Header>
      {props.children}
    </div>
    const HomeContainer = (props) => <div> <Home actions={actions} props={this.props} /> </div>
    const transactionContainer = (props) => 
      <div>
        <Transaction props={this.props} actions={actions} params={props.params} />
      </div>
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Container}>
          <IndexRoute component={HomeContainer} />
          <Route path="/listen/:showName" component={transactionContainer}></Route>
        </Route>
      </Router>
    )
  }

}

function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
