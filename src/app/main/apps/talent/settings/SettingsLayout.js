import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import React, { useRef } from 'react';

import FuseNavigation from '@fuse/core/FuseNavigation/FuseNavigation';
import FusePageSimple from '@fuse/core/FusePageSimple/FusePageSimple';
import FuseSuspense from '@fuse/core/FuseSuspense';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

import SettingsNavigation from './SettingsNavigation';
import SettingsBreadcrumb from './SettingsBreadcrumb';
import SettingsHeader from './SettingsHeader';
import {makeStyles} from "@material-ui/core/styles/index";


const useStyles = makeStyles(theme => ({
  item: {
    height: 70,
    width: 'calc(100% - 16px)',
    borderRadius: '0 20px 20px 0'
  }
}));



function SettingsLayout({ content, route }) {
	const pageLayout = useRef(null);
  const classes = useStyles();

	return (
		<FusePageSimple
			classes={{
				root: 'h-full',
				contentWrapper: 'p-0',
				content: 'flex flex-col h-full',
				leftSidebar: 'w-320 pt-8',
				header: 'h-64 min-h-64',
				wrapper: 'min-h-0'
			}}
			header={<SettingsHeader />}
			content={
				<div className="max-w-2xl min-h-full flex flex-auto flex-col">
					<div className="flex flex-col flex-1 relative">
						<FuseSuspense>{renderRoutes(route.routes)}</FuseSuspense>
					</div>
				</div>
			}
			leftSidebarContent={
				<FuseNavigation className={clsx('navigation')} navigation={SettingsNavigation.children} />
			}
			sidebarInner
			ref={pageLayout}
		/>
	);
}

export default SettingsLayout;
