import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AboutTab(props) {
	const [data, setData] = useState(null);
  const {company} = props;

	useEffect(() => {
		axios.get('/api/profile/about').then(res => {
			setData(res.data);
		});
	}, []);

  let photos = [
    {
      type: 'photo',
      title: 'Lago di Sorapis',
      preview: 'assets/images/profile/lago-di-sorapis-small.jpg'
    },
    {
      type: 'photo',
      title: 'Morain Lake',
      preview: 'assets/images/profile/morain-lake-small.jpg'
    },
    {
      type: 'photo',
      title: 'Never Stop Changing',
      preview: 'assets/images/profile/never-stop-changing-small.jpg'
    },
    {
      type: 'photo',
      title: 'Reaching',
      preview: 'assets/images/profile/reaching-small.jpg'
    },
    {
      type: 'photo',
      title: 'Yosemite',
      preview: 'assets/images/profile/yosemite-small.jpg'
    },
    {
      type: 'photo',
      title: 'A Walk Amongst Friends',
      preview: 'assets/images/profile/a-walk-amongst-friends-small.jpg'
    },
    {
      type: 'photo',
      title: 'Braies Lake',
      preview: 'assets/images/profile/braies-lake-small.jpg'
    }
  ];

	if (!data) {
		return null;
	}

	const { general, work, contact, groups, friends } = data;

	return (
			<FuseAnimateGroup
				enter={{
					animation: 'transition.slideUpBigIn'
				}}
			>
				<Card className="w-full mb-16 rounded-4">
					<AppBar position="static" elevation={0} className="bg-transparent">
						<Toolbar className="px-8">
							<Typography variant="subtitle1" color="primary" className="flex-1 px-12">
								About
							</Typography>
						</Toolbar>
					</AppBar>

					<CardContent>
						<div className="mb-24">
							<Typography className="font-bold mb-4 text-15">About</Typography>
							<Typography>{}</Typography>
						</div>

						<div className="mb-24">
							<Typography className="font-bold mb-4 text-15">Mission</Typography>
							<Typography>{}</Typography>
						</div>

						<div className="mb-24">
							<Typography className="font-bold mb-4 text-15">Locations</Typography>

							{general.locations.map(location => (
								<div className="flex items-center" key={location}>
									<Typography>{location}</Typography>
									<Icon className="text-16 mx-4" color="action">
										location_on
									</Icon>
								</div>
							))}
						</div>

						<div className="mb-24">
							<Typography className="font-bold mb-4 text-15">About</Typography>
							<Typography>{general.about}</Typography>
						</div>
					</CardContent>
				</Card>

				<Card className="w-full mb-16 rounded-4">
					<AppBar position="static" elevation={0} className="bg-transparent">
						<Toolbar className="px-8">
							<Typography variant="subtitle1" color="primary" className="flex-1 px-12">
								Company Photos
							</Typography>
						</Toolbar>
					</AppBar>

					<CardContent>
                <GridList className="" spacing={8} cols={0}>
                  {photos.map(media => (
                    <GridListTile
                      classes={{
                        root: 'w-full sm:w-1/2 md:w-1/4',
                        tile: 'rounded-4'
                      }}
                      key={media.preview}
                    >
                      <img src={media.preview} alt={media.title} />
                    </GridListTile>
                  ))}
                </GridList>
					</CardContent>
				</Card>

				<Card className="w-full mb-16 rounded-4">
					<AppBar position="static" elevation={0} className="bg-transparent">
						<Toolbar className="px-8">
							<Typography variant="subtitle1" color="primary" className="flex-1 px-12">
								Contact
							</Typography>
						</Toolbar>
					</AppBar>

					<CardContent>
						<div className="mb-24">
							<Typography className="font-bold mb-4 text-15">Address</Typography>
							<Typography>{contact.address}</Typography>
						</div>

						<div className="mb-24">
							<Typography className="font-bold mb-4 text-15">Tel.</Typography>

							{contact.tel.map(tel => (
								<div className="flex items-center" key={tel}>
									<Typography>{tel}</Typography>
								</div>
							))}
						</div>

						<div className="mb-24">
							<Typography className="font-bold mb-4 text-15">Website</Typography>

							{contact.websites.map(website => (
								<div className="flex items-center" key={website}>
									<Typography>{}</Typography>
								</div>
							))}
						</div>

						<div className="mb-24">
							<Typography className="font-bold mb-4 text-15">Emails</Typography>

							{contact.emails.map(email => (
								<div className="flex items-center" key={email}>
									<Typography>{}</Typography>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</FuseAnimateGroup>
	);
}

export default AboutTab;
