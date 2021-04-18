import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PhotosVideosTab() {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get('/api/profile/photos-videos').then(res => {
			setData(res.data);
		});
	}, []);

	if (!data) {
		return null;
	}

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
                  Company Photos
                </Typography>
              </Toolbar>
            </AppBar>

            <CardContent>
							{data.map(period => (
								<div key={period.id} className="mb-48">
									<ListSubheader component="div" className="flex items-center px-0 mb-24">
										<Typography variant="h6">{period.name}</Typography>
										<Typography className="mx-16" variant="subtitle1" color="textSecondary">
											{period.info}
										</Typography>
									</ListSubheader>

									<GridList className="" spacing={8} cols={0}>
										{period.media.map(media => (
											<GridListTile
												classes={{
													root: 'w-full sm:w-1/2 md:w-1/4',
													tile: 'rounded-4'
												}}
												key={media.preview}
											>
												<img src={media.preview} alt={media.title} />
												<GridListTileBar
													title={media.title}
													actionIcon={
														<IconButton>
															<Icon className="text-white opacity-75">info</Icon>
														</IconButton>
													}
												/>
											</GridListTile>
										))}
									</GridList>
								</div>
							))}
						</CardContent>
					</Card>
				</FuseAnimateGroup>
	);
}

export default PhotosVideosTab;
