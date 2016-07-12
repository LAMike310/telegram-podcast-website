import React, { Component } from 'react'

class JoinGameModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      top: "15%",
      zIndex: 1,
      padding: "10px"
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
    let { txid } = this.props
  	let styles = {
  		confirm: {
  			fontSize: "13px",
        cursor: "pointer",
        textDecoration: "underline",
        marginTop: "12px",
        cursor: "pointer",
        textDecoration: "underline",
  		},
      statusBubbleConfirmed: {
        margin: "0 5px",
        height: "20px",
        width: "20px",
        background: "green"
      },
      confirmMessage: {
        fontSize: "15px"
      },
      closeModal: {
        cursor: "pointer",
      }

  	}
	var button;
	if (this.props.openbtn) { var button = <span style={styles.confirm} onClick={(e) => this.showModal(e)}>{this.props.opentext || 'Confirmed'}</span>}
    return (
      <div>
  			<div className="left circle" style={styles.statusBubbleConfirmed}></div>
        {button}
  	        <div>
  	        	<div id="modal" className="modal open center" style={this.state} onClick={(e) => this.closeOnBackground(e)}>
                <i onClick={(e) => this.hideModal(e)} className="material-icons right black-text" style={styles.closeModal}>clear</i>
                <p style={styles.confirmMessage}>Your message has been saved on the Bitcoin Blockchain! <br /> Check it out here:</p>
                <ul>
                  <li>
                    <a target="_blank" href={`https://live.blockcypher.com/btc/tx/${txid}`}>BlockCypher</a>
                  </li>
                  <li>
                    <a target="_blank" href={`https://www.smartbit.com.au/tx/${txid}`}>SmartBit</a>
                  </li>
                  <li>
                    <a target="_blank" href={`https://www.blocktrail.com/BTC/tx/${txid}#tx_messages`}>BlockTrail</a>
                  </li>
                  <li>
                    <a target="_blank" href={`https://bitcoinchain.com/block_explorer/tx/${txid}`}>Bitcoin Chain</a>
                  </li>
                </ul>
  	        </div>
  	     </div>
      </div>
    );
  }
}
export default JoinGameModal