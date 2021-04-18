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

function SalaraiesTab() {
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
                  Salaries
                </Typography>
              </Toolbar>
            </AppBar>

            <CardContent>

						</CardContent>
					</Card>
				</FuseAnimateGroup>
	);
}

export default SalaraiesTab;
