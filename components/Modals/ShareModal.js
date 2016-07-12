import React, { Component } from 'react'

class ShareModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      top: "15%",
      zIndex: 1,
      padding: "10px",
      maxHeight: "75%"
    }
  }

  componentWillMount() {
    this.props.openbtn || this.showModal();
  }

  showModal() {
    this.setState({ display: 'inline-block' });
  }

  hideModal() {
    this.setState({ display: 'none' });
  }

  closeOnBackground(e) {
    if( e.target.id == 'modal') {
      this.hideModal();
    }
  }
  render() {
    let styles = {
      closeModal: {
        cursor: "pointer",
      },
      shareText: {
        position: "relative",
        bottom: "4px"
      },
      icon: {
        position: "relative",
        left: "15px"
      },
      buttonContainer: {
        marginTop: "30px"
      },
      modal: {
        background: "white"
      },
      socialIcon: {
        maxWidth: "65px"
      },
      listItemMargin: {
        margin: "0 5px"
      }

    }
  var button;
   if (this.props.openbtn) { 
    var button = 
      <p style={styles.buttonContainer} className="right"> 
        <a className="white blue-text btn" onClick={(e) => this.showModal(e)}>
          <span style={styles.shareText}>
            {this.props.opentext || 'Share'}
          </span> 
          <i className="material-icons" style={styles.icon}>send</i> 
        </a> 
      </p> }
    return (
      <div className="row">
          <div className="col s12 m6 push-m3">
              {button}
              <div id="modal" style={styles.modal} className="modal open" style={this.state} onClick={(e) => this.closeOnBackground(e)}>
              <i onClick={(e) => this.hideModal(e)} className="material-icons right black-text" style={styles.closeModal}>clear</i>
                <div className="container">
                  <ul className="row">
                    <li style={styles.listItemMargin} className="left col s3 m4"> <a target="_blank" href={`https://twitter.com/home?status=https%3A//blockchainink.firebaseapp.com/%23/view/${this.props.txid}`}> <img style={styles.socialIcon} src="http://imgur.com/obqN9kB.png" alt="twitter"/></a></li>
                    <li style={styles.listItemMargin} className="left col s3 m4"> <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=https%3A//blockchainink.firebaseapp.com/%23/view/${this.props.txid}`}> <img style={styles.socialIcon} src="http://imgur.com/aw2UlYr.png" alt="facebook"/></a></li>
                    <li style={styles.listItemMargin} className="left col s3 m4"> <a target="_blank" href={`https://plus.google.com/share?url=https%3A//blockchainink.firebaseapp.com/%23/view/${this.props.txid}`}> <img style={styles.socialIcon} src="http://imgur.com/OI4bIHi.png" alt="google plus"/></a></li>
                  </ul>
                </div>
              </div>
         </div>
      </div>
    );
  }
}
export default ShareModal