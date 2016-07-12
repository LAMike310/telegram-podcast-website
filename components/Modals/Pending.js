import React, { Component } from 'react'

class PendingModal extends Component {
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
      pending: {
        fontSize: "13px",
        marginTop: "12px",
        cursor: "pointer",
        textDecoration: "underline",
      },
      statusBubblePending: {
        margin: "0 5px",
        height: "20px",
        width: "20px",
        background: "#ff9800"
      },
      proLink: {
        marginTOp: 0
      },
      closeModal: {
        cursor: "pointer",
      }
    }
  var button;
  if (this.props.openbtn) { var button = <span style={styles.pending} onClick={(e) => this.showModal(e)}>{this.props.opentext || 'Pending'}</span>}
    return (
      <div>
        <div className="left circle" style={styles.statusBubblePending}></div>
        {button}
            <div>
              <div id="modal" className="modal open" style={this.state} onClick={(e) => this.closeOnBackground(e)}>
                <i onClick={(e) => this.hideModal(e)} className="material-icons right black-text" style={styles.closeModal}>clear</i>
                <p>
                Transactions should take 4-8 hours to confirm. 
                It's waiting for the Bitcoin miners to see it. 
                Here's a video on how Bitcoin mining works:</p>
                <iframe width="100%" height="300" src="https://www.youtube.com/embed/nQryTXfoNJ0" frameBorder="0" allowFullScreen></iframe>
                <p style={styles.proLink}>
                  Want faster confirmations + higher limits? 
                  <a href="mailto:mvg210@gmail.com"> Contact us </a> 
                  for early access to Blockchain Ink Pro.</p>
            </div>
         </div>
      </div>
    );
  }
}
export default PendingModal