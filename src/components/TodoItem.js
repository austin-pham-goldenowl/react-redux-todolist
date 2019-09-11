import React from 'react';
import PropTypes from 'prop-types'
//MUI
// import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
// import { sizing } from '@material-ui/system';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEraser } from '@fortawesome/free-solid-svg-icons'
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

//                  onClick passed down from TodoList
export default function TodoItem({onItemClick, onDeleteClick, completed, deleted, item, date, note}) {
  // const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

	return (<div>
			<Grid xs={12}>
		        <Badge badgeContent={date} 
		        color={completed ? "primary" : "secondary"}
		        style={{display: deleted ? 'none' : 'inline-block'}}>
					<ExpansionPanel expanded={expanded === 'panel'}
					onChange={handleChange('panel')}
					square={false}
					rounded
					style={{display: deleted ? 'none' : 'inline-block',
							width: 320
						}}
					>
					        <ExpansionPanelSummary
					          expandIcon={<ExpandMoreIcon />}
					          aria-controls="panelbh-content"
					          id="panelbh-header"
					          style={{textDecoration: completed ? 'line-through' : 'none',}}
					        >
					          	<Typography>
							    	{item}
							   	</Typography>
					        </ExpansionPanelSummary>
					        <Divider />

					        <ExpansionPanelDetails
					        style={{display: !note ? 'none' : 'block',}}>
					          <Typography noWrap={true}>
					          	{note}
					          </Typography >
					        </ExpansionPanelDetails>
					        <Divider />
					        <div>
					          <Button color="primary" onClick={onItemClick}>
					          	{!completed ? 'complete' : 'incomplete'}
						      </Button>
						      <Button color="secondary" onClick={onDeleteClick}>
						        Delete
						      </Button>
						    </div>
			      	</ExpansionPanel>
			    </Badge>
			</Grid>

{/*		      <FontAwesomeIcon 
		    	icon={faEraser} 
		    	border
		    	onClick={onDeleteClick} 
		   		style={{
		   			display: 'flex',
		   			alignItems: 'center',
		   			marginLeft: 20,
		     		display: deleted ? 'none' : 'inline'}}
		     />*/}
		</div>)
}

TodoItem.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  deleted: PropTypes.bool.isRequired,
  item: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  note: PropTypes.string
}