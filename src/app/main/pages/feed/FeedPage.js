import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import FeedList from './FeedList';
import FeedSidebarContent from './FeedSidebarContent';
import RightSidebarContent from './RightSidebarContent';


function FeedPage() {
	const [selectedTab, setSelectedTab] = useState(0);

	function handleTabChange(event, value) {
		setSelectedTab(value);
	}

	return (
		<FusePageSimple
      classes={{
        leftSidebar: 'w-300 border-0'
      }}

      content={
        <div className="w-full">
					<FuseAnimate animation="transition.slideUpIn">
						<div className="flex flex-col md:flex-row sm:p-8 container">
							<div className="flex flex-1 flex-col min-w-0 p-20">
								<FeedList />
							</div>
							<div className="flex flex-wrap w-full md:w-320 p-20">
								<RightSidebarContent />
							</div>
						</div>
					</FuseAnimate>
				</div>

      }
      leftSidebarContent={
        <div className="flex flex-1 p-20">
      		<FeedSidebarContent />
				</div>
			}

		/>
	);
}

export default FeedPage;
