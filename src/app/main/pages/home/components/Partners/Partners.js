import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Partners = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
        {[
          'assets/svg/logos/airbnb-original.svg',
          'assets/svg/logos/amazon-original.svg',
          'assets/svg/logos/fitbit-original.svg',
          'assets/svg/logos/netflix-original.svg',
          'assets/svg/logos/google-original.svg',
          'assets/svg/logos/paypal-original.svg',
        ].map((item, i) => (
          <Box maxWidth={90} marginTop={2} marginRight={4} key={i}>
            <Box
              component="img"
              height={1}
              width={1}
              src={item}
              alt="..."
              sx={{
                filter:
                  theme.palette.mode === 'dark'
                    ? 'brightness(0) invert(0.7)'
                    : 'none',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Partners;
