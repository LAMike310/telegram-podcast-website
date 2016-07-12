import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link, browserHistory } from 'react-router'
import LazyLoad from 'react-lazyload'
import Radium from 'radium'
class Header extends Component {
  componentDidMount() {
    const { loggedIn } = this.props
  }
  componentDidUpdate(){
  }
  constructor(props) {
    super(props);
  }
  render() {
    var styles = {
      headerStyle:{
        background: '#white'
      },
      siteName: {
        fontSize: '32px',
        marginLeft: '10px',
        color: '#1e88e5',
        cursor: 'pointer'
      }
    }
    const { actions } = this.props
    return (
      <nav style={styles.headerStyle} className="white">
        <div className="nav-wrapper">
          <Link to="#" style={styles.siteName}>PodcastBot</Link>
        </div>
      </nav>
    )
  }
}
export default Header
