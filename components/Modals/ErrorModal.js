import React, { Component } from 'react'
import { Link } from 'react-router';

class ErrorModal extends Component {
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
  return (
      <div>
          <div>
            <div id="modal" className="modal open" style={this.state} onClick={(e) => this.closeOnBackground(e)}>
              <p>
                We could not find this transaction! Maybe it is still waiting to be confirmed by the Blockchain.
              </p>
          </div>
         </div>
      </div>
  )
  }
}
export default ErrorModal