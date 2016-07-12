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
        color: '#1e88e5'
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
      	marginTop: 0
      },
      shareButtonContainer: {
        marginTop: "50px"
      }
    }
    const { actions } = this.props
    return (
      <div className="row" style={styles.shareButtonContainer} >
        <div className="col m6 push-m3">
          <div className="right">
            <ul id="dropdown2" className="dropdown-content">
               <li>
               		<span>
               			<a 
               			target="_blank" 
               			href="https://www.facebook.com/sharer/sharer.php?u=http%3A//blockchainink.com/">
               				Facebook
               			</a>
               		</span>
               	</li>
               	<li>
           			<span>
           				<a 
           				  target="_blank"
           				  href="https://twitter.com/home?status=Check%20out%20my%20Blockchain%20Ink%3A%20http%3A//blockchainink.com/">
           				  	Twitter
           				 </a>
           			</span>
           		</li> 
   		    	<li>
   					<span>
   						<a 
   						target="_blank" 
   						href="mailto:">
   							Email
   						</a>
   					</span>
   				</li>
   				<li>
   					<span>
   						<a 
   						target="_blank"
   						 href="https://plus.google.com/share?url=http%3A//www.blockchainink.com/">
   						 	Google+
   						 </a>
   					</span>
   				</li>     
              </ul>
              <p style={styles.buttonContainer}>
              	<a className="white blue-text btn dropdown-button" data-activates="dropdown2">
              		<span style={styles.shareText}>Share</span>
              		<i className="material-icons" style={styles.icon}>send</i>
              	</a>
              </p>
          </div>
        </div>
      </div>
    )
  }
}
export default Header
