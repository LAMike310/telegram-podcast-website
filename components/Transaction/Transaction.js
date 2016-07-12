import React, { Component } from 'react'
import { Link } from 'react-router';
import ErrorModal from '../Modals/ErrorModal'
import ShareModal from '../Modals/ShareModal'
import moment from 'moment'
import ReactAudioPlayer from 'react-audio-player'

class Transaction extends Component {
  constructor(props) {
    super(props);
    let { showName } = this.props.params
    console.log("Podcast URL", showName)
    this.props.actions.getLatestPodcast(showName)
  }
  render() {
    let { actions } = this.props
    let { showName } = this.props.params
    let { currentPodcast } = this.props.props
    if(currentPodcast != {}) {
      return (
            <div>
              { currentPodcast.title } <br/>
              <ReactAudioPlayer
                src={ currentPodcast.url } 
                autoPlay="true"
              />
              <ShareModal openbtn={true} />
            </div>
        )
    } else {
      return (
        <div>Loading</div>
      )
    }
  }
}
export default Transaction
