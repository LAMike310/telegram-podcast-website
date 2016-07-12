import React, { Component } from 'react'
import { Link } from 'react-router';

class BlockchainText extends Component {
  componentDidMount() {
  }
  constructor(props) {
      super(props);
  }
  render() {
  	let styles = {
  		text: {
  			fontWeight: 500
  		}
  	}
	return (
		<p className="center" style={styles.text}>{this.props.transactionText}</p>
	)
  }
}
export default BlockchainText
