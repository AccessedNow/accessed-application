import '@fake-db';
import FuseAuthorization from '@fuse/core/FuseAuthorization';
import FuseLayout from '@fuse/core/FuseLayout';
import FuseTheme from '@fuse/core/FuseTheme';
import history from '@history';
import { Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { useSelector } from 'react-redux';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { selectCurrLangDir } from 'app/store/i18nSlice';
import withAppProviders from './withAppProviders';
import { Auth } from './auth';

// import 'react-lazy-load-image-component/src/effects/blur.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'react-image-lightbox/style.css';
// import 'aos/dist/aos.css';


// import axios from 'axios';
/**
 * Axios HTTP Request defaults
 */
// axios.defaults.baseURL = "";
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

// if(!window.navigator.onLine) {
//   window.location.href = "http://www.w3schools.com";
// }

const emotionCacheOptions = {
  rtl: {
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
    prepend: true,
  },
  ltr: {
    key: 'muiltr',
    stylisPlugins: [],
    prepend: true,
  },
};

const App = () => {
  const langDirection = useSelector(selectCurrLangDir);

  return (
    <CacheProvider value={createCache(emotionCacheOptions[langDirection])}>
      <Auth>
        <Router history={history}>
          <FuseAuthorization>
            <FuseTheme>
              <SnackbarProvider
                maxSnack={5}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                classes={{
                  containerRoot: 'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99',
                }}
              >
                <FuseLayout />
              </SnackbarProvider>
            </FuseTheme>
          </FuseAuthorization>
        </Router>
      </Auth>
    </CacheProvider>
  );
};

export default withAppProviders(App)();
