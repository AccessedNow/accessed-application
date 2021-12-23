import React, { useState } from "react";
import { styled, useTheme } from '@mui/material/styles';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from "react-slideshow-image";



const Root = styled('div')(({ theme }) => ({
  height: '100%',
  '& div': {
    width: '100%',
    height: '100%'
  },

  '& .each-fade': {
    display: 'flex',
    width: '100%',
    height: '100%',


    '& .slider-bg': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      backgroundSize: 'cover',
      backgroundAttachment: 'scroll',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat',
      backgroundOrigin: 'content-box',
    },
    '& .slider-bg:before': {
      content: '""',
      background: '#12233e',
      opacity: '.9'
    },



    '& p': {
      width: '25%',
      fontSize: '1em',
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
      background: '#adceed'
    }
  },

}));



const Slideshow = (props) => {
  const fadeImages = [
    "assets/images/backgrounds/group.jpg",
    "assets/images/backgrounds/group2.jpg",
    "assets/images/backgrounds/skyscraper.jpg"
  ];

  return (
    <Root  className="slide-container">
      <Fade {...props} canSwipe={true} arrows={false} indicators={true}>
        {fadeImages.map( (image) => (
        <div className="each-fade">
          <div className="slider-bg" style={{backgroundImage: `url(${image})`}}>

          </div>
          {/*<img src={image} />*/}
        </div>
        ))}
      </Fade>
    </Root>
  );
};

export default Slideshow;
