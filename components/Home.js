import React, { Component } from 'react'
import { Link } from 'react-router'
import uuid from 'uuid'
import { Router } from 'react-router';
import ErrorModal from './Modals/ErrorModal'

class Home extends Component {
  constructor(props) {
      super(props);
      // this.props.actions.getTX(this.props.params.podcast)
      this.props.actions.getPopular()
      this.props.actions.clearCurrentPodcast()
  }
  render() {
    const { actions } = this.props
    const { podcasts } = this.props.props

    var listItems = podcasts.map(function(item) {
          let showName = item.showName
          let firebaseName = "/listen/" + showName.replace(/\s+/g, '-').replace(/\:/g, '').replace(/\(/g, '').replace(/\)/g, '').replace(/\'/g, '').replace(/\?/g, '').replace(/\./g, '').toLowerCase();

          return (
            <li key={uuid.v1()}>
              <Link to={firebaseName}>{item.showName}</Link>
            </li>
          );
        });
        return (
            <ul>
              {listItems}
            </ul>
        );
    }
}
export default Home
