import React from 'react'
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CampaignCard from './CampaignCard'

const HomeSupportCampaign = props => {

  let homeCampaigns = []
  let homeCampaignsGenerator

  for (let i = 0; i < 3; i++) {
  	homeCampaigns.push(props.campaigns.campaigns[i])
  }

  if ((homeCampaigns[0] && homeCampaigns[1])) {

	  homeCampaignsGenerator = homeCampaigns.map(campaign => {
	  	let urlEnding = campaign.title.split(' ').join('-').toLowerCase()

	  	return (
	  	  <Link to={`/browse/${urlEnding}`} key={campaign.id}>
	  	    <CampaignCard key={campaign.id} campaign={campaign} />
	  	  </Link>
	  	)
	  })
    }

  return (
  	<React.Fragment>
  	  <Grid className="campaigns-to-support" container spacing={24}>
	  	  <Grid item xs={12}>
	  	    <Typography variant="h4">Campaigns to Support</Typography>
	  	    <Grid id="campaigns-to-support" item xs={10}>
	  	      {homeCampaignsGenerator}
	  	    </Grid>
	  	  </Grid>
	  	</Grid>
    </React.Fragment>
  )
}

export default HomeSupportCampaign