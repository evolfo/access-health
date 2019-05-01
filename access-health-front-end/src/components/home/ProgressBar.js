import React from 'react'
import Filler from './Filler'
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'

const ProgressBar = props => {

  const campaign = props.campaigns.campaigns.find(campaign => {
  	return campaign.id === props.campaignId
  })
  // Home page progress bar
  if (props.unique) {
	  return (
	  	<div className="progress-bar">
	  	  <Filler percentComplete={campaign.percent_complete} />

	  	  <span>{campaign.current_amount ? `$${campaign.current_amount}/$${campaign.goal} goal` : <p>$0/${campaign.goal}</p>} </span>
	  	</div>
	  )
  // Campaign page progress bar
  } else if (campaign) {
  	  return (
	  	<div className="progress-bar">
	  	  <Filler percentComplete={campaign.percent_complete} />
	  	  <Typography variant="h6">
	  	    {campaign.percent_complete}% done
	  	  </Typography>
	  	  <span>{campaign.current_amount ? `$${campaign.current_amount}/$${campaign.goal} goal` : <p>$0/${campaign.goal}</p>} </span>
	  	</div>
	  )
  } else {
  	  return (null)
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(ProgressBar)