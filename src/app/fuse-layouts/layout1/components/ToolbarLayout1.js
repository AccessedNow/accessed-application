import FuseSearch from '@fuse/core/FuseSearch';
import { ThemeProvider } from '@mui/material/styles';
import FuseShortcuts from '@fuse/core/FuseShortcuts';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import Toolbar from '@mui/material/Toolbar';
import ChatPanelToggleButton from 'app/fuse-layouts/shared-components/chatPanel/ChatPanelToggleButton';
import NavbarToggleButton from 'app/fuse-layouts/shared-components/NavbarToggleButton';
import QuickPanelToggleButton from 'app/fuse-layouts/shared-components/quickPanel/QuickPanelToggleButton';
import UserMenu from 'app/fuse-layouts/shared-components/UserMenu';
import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectToolbarTheme } from 'app/store/fuse/settingsSlice';
import AdjustFontSize from '../../shared-components/AdjustFontSize';
import FullScreenToggle from '../../shared-components/FullScreenToggle';
import LanguageSwitcher from '../../shared-components/LanguageSwitcher';
import NotificationPanelToggleButton from '../../shared-components/notificationPanel/NotificationPanelToggleButton';

function ToolbarLayout1(props) {
  const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
  const navbar = useSelector(({ fuse }) => fuse.navbar);
  const toolbarTheme = useSelector(selectToolbarTheme);
  const user = useSelector(({ auth }) => auth.user);

  return (
    <ThemeProvider theme={toolbarTheme}>
      <AppBar
        id="fuse-toolbar"
        className={clsx('flex relative z-20 shadow-md', props.className)}
        color="default"
        sx={{ backgroundColor: toolbarTheme.palette.background.paper }}
        position="static"
      >
        {user.data.id ?
          <Toolbar className="p-0 min-h-48 md:min-h-64">
            <div className="flex flex-1 px-16">
              {config.navbar.display && config.navbar.position === 'left' && (
                <>
                  <Hidden lgDown>
                    {(config.navbar.style === 'style-3' ||
                      config.navbar.style === 'style-3-dense') && (
                      <NavbarToggleButton className="w-40 h-40 p-0 mx-0"/>
                    )}

                    {config.navbar.style === 'style-1' && !navbar.open && (
                      <NavbarToggleButton className="w-40 h-40 p-0 mx-0"/>
                    )}
                  </Hidden>

                  <Hidden lgUp>
                    <NavbarToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8"/>
                  </Hidden>
                </>
              )}

              <Hidden lgDown>
                <FuseShortcuts/>
              </Hidden>
            </div>

            <div className="flex items-center px-8 h-full overflow-x-auto">
              <LanguageSwitcher/>

              <AdjustFontSize/>

              <FullScreenToggle/>

              <FuseSearch/>

              <Hidden lgUp>
                <ChatPanelToggleButton/>
              </Hidden>

              <QuickPanelToggleButton/>

              <NotificationPanelToggleButton/>

              <UserMenu/>
            </div>

            {config.navbar.display && config.navbar.position === 'right' && (
              <>
                <Hidden lgDown>
                  {!navbar.open && <NavbarToggleButton className="w-40 h-40 p-0 mx-0"/>}
                </Hidden>

                <Hidden lgUp>
                  <NavbarToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8"/>
                </Hidden>
              </>
            )}
          </Toolbar>
          :
          <Toolbar className="flex justify-center p-0 min-h-48 md:min-h-64">

            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
              maxWidth={{ sm: 720, md: 1236 }}
              width={1}
              margin={'0 auto'}
              paddingX={2}
              className="flex items-center h-full overflow-x-auto"
            >
              <Box
                display={'flex'}
                component="a"
                href="/"
                title="Accessed"
                width={{ xs: 100, md: 120 }}
              >
                <Box
                  component={'img'}
                  src="assets/images/logos/accessed_horizontal.svg"
                  height={1}
                  width={1}
                />
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
                <Box marginLeft={4}>
                  <Button
                    variant="outlined"
                    color="primary"
                    component="a"
                    target="blank"
                    href="/register"
                    size="large"
                    className="mr-10"
                  >
                    Join
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    component="a"
                    target="blank"
                    href="/login"
                    size="large"
                  >
                    Sign in
                  </Button>
                </Box>
              </Box>

            </Box>

          </Toolbar>
        }
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(ToolbarLayout1);
