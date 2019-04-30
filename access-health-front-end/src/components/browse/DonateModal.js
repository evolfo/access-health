import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { CardElement, injectStripe } from 'react-stripe-elements';

import { connect } from 'react-redux';

import { donationModalOpen, donationModalClose } from '../../actions/modalActions'

import { withRouter } from "react-router-dom";

class DonateModal extends Component {

	// handleChange = (e) => {
	// 	this.setState({
	// 	  [e.target.type]: e.target.value
	// 	})
	// }

	// handleSubmit = (e) => {
	// 	e.preventDefault()
	// 	this.props.handleClose()
	// 	this.props.getAuth(this.state)
	// 	setTimeout(() => {
	// 		if(localStorage.token && localStorage.token != "undefined") {
	// 		  this.props.history.push('/')
	// 		  window.alert('You are signed in!')
	// 		} else {
	// 		  window.alert('Please try again')
	// 		}
	// 	}, 200)
	// }

	render() {
		return (
		<Dialog
		  open={this.props.open}
		  onClose={this.props.handleClose}
		  aria-labelledby="form-dialog-title"
		>
		  <DialogTitle id="form-dialog-title">Donate</DialogTitle>
		    <form>
			  <DialogContent>
			    <TextField
			      required
			      id="donationAmount"
			      autoFocus
			      margin="dense"
			      label="Amount"
			      type="number"
			      fullWidth
			      value={this.props.amount}
			      onChange={this.props.handleChange}
			    />
			    <TextField
			      required
			      id="donation-message"
			      autoFocus
			      margin="dense"
			      label="Message to the Campaign Owner"
			      type="text"
			      fullWidth
			      value={this.props.message}
			      onChange={this.handleChange}
			    />

			  </DialogContent>
			  <CardElement />
			</form>
		  <DialogActions>
		    <Button onClick={this.props.handleClose} color="primary">
		      Cancel
		    </Button>
		    <Button onClick={this.props.handleClick} color="primary">
		      Submit
		    </Button>
		  </DialogActions>
		</Dialog>
		)
	}
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { donationModalOpen, donationModalClose })(withRouter(DonateModal))