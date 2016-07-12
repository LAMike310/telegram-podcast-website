import React, { Component } from 'react'
import { Link } from 'react-router';
import PendingModal from '../Modals/Pending'
import ConfirmModal from '../Modals/Confirm'

class BlockchainText extends Component {
  componentDidMount() {
  }
  constructor(props) {
      super(props);
      this.showPendingModal = this.showPendingModal.bind(this)
      this.showConfirmedModal = this.showConfirmedModal.bind(this)
  }
  showPendingModal(){
  	console.log("Pending")
  }
  showConfirmedModal(){
  	console.log("Confirmed")
  }
  render() {
  	let styles = {
  		container: {
  			position: "relative",
  			right: "15px"
  		}
  	}
  	let { status, txid } = this.props
  	if(status == null){
  		return (
  			<div className="right" style={styles.container}>
  				<div className="left circle" style={styles.statusBubblePending}></div>
  				<PendingModal openbtn="false" />
  			</div>
  		)
  	} else {
		return (
			<div className="right" style={styles.container}>
				<ConfirmModal txid={ txid } openbtn="false" />
			</div>
		)
  	}
	
  }
}
export default BlockchainText
