import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
	listItem: {
		color: 'inherit!important',
		textDecoration: 'none!important',
		height: 40,
		borderRadius: '0 20px 20px 0',
		paddingLeft: 24,
		paddingRight: 12,
		'&.active': {
			backgroundColor: theme.palette.secondary.main,
			color: `${theme.palette.secondary.contrastText}!important`,
			pointerEvents: 'none',
			'& .list-item-icon': {
				color: 'inherit'
			}
		},
		'& .list-item-icon': {
			marginRight: 16
		}
	}
}));

function FeedSidebarContent(props) {
	// const user = useSelector(({ contactsApp }) => contactsApp.user);

	const dispatch = useDispatch();

	const classes = useStyles(props);


	return (
    <FuseAnimateGroup
      enter={{
        animation: 'transition.slideUpBigIn'
      }}
    >
			<Paper className="rounded-1 shadow-none lg:rounded-4 lg:shadow-1 my-20">
				<List className="pt-0">
					<ListItem
						button
						component={NavLinkAdapter}
						to="/apps/contacts/all"
						activeClassName="active"
						className={classes.listItem}
					>
						<Icon className="list-item-icon text-16" color="action">
							star
						</Icon>
						<ListItemText className="truncate" primary="Latest News" disableTypography />
					</ListItem>
					<ListItem
						button
						component={NavLinkAdapter}
						to="/apps/contacts/frequent"
						activeClassName="active"
						className={classes.listItem}
					>
						<Icon className="list-item-icon text-16" color="action">
							restore
						</Icon>
						<ListItemText className="truncate" primary="Suggestions" disableTypography />
					</ListItem>
					<ListItem
						button
						component={NavLinkAdapter}
						to="/apps/contacts/starred"
						activeClassName="active"
						className={classes.listItem}
					>
						<Icon className="list-item-icon text-16" color="action">
							people
						</Icon>
						<ListItemText className="truncate" primary="Friends Update" disableTypography />
					</ListItem>
					<ListItem
						button
						component={NavLinkAdapter}
						to="/apps/contacts/starred"
						activeClassName="active"
						className={classes.listItem}
					>
						<Icon className="list-item-icon text-16" color="action">
							star
						</Icon>
						<ListItemText className="truncate" primary="Search News" disableTypography />
					</ListItem>
					<ListItem
						button
						component={NavLinkAdapter}
						to="/apps/contacts/starred"
						activeClassName="active"
						className={classes.listItem}
					>
						<Icon className="list-item-icon text-16" color="action">
							star
						</Icon>
						<ListItemText className="truncate" primary="Comments" disableTypography />
					</ListItem>
				</List>
			</Paper>

			{/*
			<Card className="rounded-4	">
				<AppBar position="static" elevation={0}>
					<Toolbar className="px-8">
						<Typography variant="subtitle1" color="inherit" className="flex-1 px-12">
							Latest Activity
						</Typography>
						<Button color="inherit" size="small">
							See All
						</Button>
					</Toolbar>
				</AppBar>
				<CardContent className="p-0">
					<List>
						{activities.map(activity => (
							<ListItem key={activity.id} className="px-12">
								<Avatar className="mx-4" alt={activity.user.name} src={activity.user.avatar} />
								<ListItemText
									className="flex-1 mx-4"
									primary={
										<div className="flex">
											<Typography
												className="font-medium whitespace-no-wrap"
												color="primary"
												paragraph={false}
											>
												{activity.user.name}
											</Typography>

											<Typography className="px-4 truncate" paragraph={false}>
												{activity.message}
											</Typography>
										</div>
									}
									secondary={activity.time}
								/>
							</ListItem>
						))}
					</List>
				</CardContent>
			</Card>

			*/}


		</FuseAnimateGroup>



	);
}

export default FeedSidebarContent;
