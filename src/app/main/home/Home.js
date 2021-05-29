import FuseAnimate from '@fuse/core/FuseAnimate';
import { useForm } from '@fuse/hooks';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import clsx from 'clsx';
import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useScript from '../../utils/hooks/useScript';

import './css/font-icons.min.css'
// import './css/theme-vendors.min.css'
import './css/style.css'
import './css/responsive.css'
import './revolution/css/settings.css'
import './revolution/css/layers.css'
import './revolution/css/navigation.css'

import {appendScript} from '../../utils/appendScript';
import {removeScript} from '../../utils/removeScript';


const useStyles = makeStyles(theme => ({
	root: {
		background: `linear-gradient(to left, ${theme.palette.primary.dark} 0%, ${darken(
			theme.palette.primary.dark,
			0.5
		)} 100%)`,
		color: theme.palette.primary.contrastText
	},
	leftSection: {},
	rightSection: {
		background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
			theme.palette.primary.dark,
			0.5
		)} 100%)`,
		color: theme.palette.primary.contrastText
	}
}));

function Home() {
	const classes = useStyles();
  // useScript('https://use.typekit.net/foobar.js');

  // appendScript("/assets/vendor/js/jquery.min.js");
  appendScript("/assets/vendor/js/theme-vendors.min.js");
  appendScript("/assets/vendor/js/main.js");
  appendScript("/assets/vendor/revolution/js/jquery.themepunch.tools.min.js");
  appendScript("/assets/vendor/revolution/js/jquery.themepunch.revolution.min.js");
  appendScript("/assets/vendor/js/load.js");




	return (
    <div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 p-24 md:flex-row md:p-0')}>

      <section className="p-0 example home-startup bg-dark-slate-blue">
        <article className="content">
          <div id="rev_slider_26_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="mask-showcase" data-source="gallery">
            <div id="rev_slider_26_1" className="rev_slider fullscreenbanner" style={{display:"none"}} data-version="5.4.1">
              <ul>
                <li data-index="rs-73" data-transition="zoomout" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="1500"  data-thumb="http://works.themepunch.com/revolution_5_3/wp-content/"  data-rotate="0"  data-saveperformance="off"  data-title="01" data-param1="01" data-description="">
                  <img src="https://placehold.it/1920x1100" alt="" data-bgcolor="#262b32" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />

                    <div className="overlay-bg bg-extra-dark-gray" style={{opacity: 0.5}}></div>

                    <div className="tp-caption tp-resizeme alt-font text-white font-weight-600 text-center"
                         id="slide-411-layer-01"
                         data-frames='[{"delay":200,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[-100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                         data-type="text"
                         data-whitespace="nowrap"
                         data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                         data-y="['middle','middle','middle','middle']" data-voffset="['-50','-50','-115','-65']"
                         data-width="auto"
                         data-height="auto"
                         data-fontsize="['70','53','60','35']"
                         data-lineheight="['70','59','70','39']"
                         data-letterspacing="['-2','-1','-1','-1']"
                         data-responsive="off"
                         data-responsive_offset="off"
                         data-paddingtop="['0','0','0','0']"
                         data-paddingbottom="['15','8','8','8']"
                         data-paddingright="['0','0','0','0']"
                         data-paddingleft="['0','0','0','0']"
                         style={{textShadow: '0 0 20px rgba(0,0,0,0.3)'}}>Start your online <br />business today</div>

                    <div className="tp-caption tp-resizeme alt-font text-white font-weight-300 text-center"
                         id="slide-411-layer-02"
                         data-frames='[{"delay":1200,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[-100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                         data-type="text"
                         data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                         data-y="['middle','middle','middle','middle']" data-voffset="['65','100','-5','15']"
                         data-width="auto"
                         data-height="auto"
                         data-fontsize="['19','16','19','14']"
                         data-lineheight="['28','14','23','20']"
                         data-letterspacing="['0.5','0.5','0.5','0.5']"
                         data-responsive="off"
                         data-responsive_offset="on">The best way to promote your business</div>

                    <a className="tp-caption tp-resizeme rs-btn btn btn-rounded d-flex align-items-center justify-content-center"
                       href="contact-us-classic.html"
                       id="slide-411-layer-03"
                       data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                       data-y="['middle','middle','middle','middle']" data-voffset="['152','130','82','80']"
                       data-whitespace="nowrap"
                       data-type="button"
                       data-responsive="off"
                       data-responsive_offset="off"
                       data-frames='[{"delay":1200,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[-100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                       data-textalign="['center','center','center','center']"
                       data-paddingtop="['8','8','8','8']"
                       data-paddingbottom="['8','8','8','8']"
                       data-paddingright="['7','7','7','7']"
                       data-paddingleft="['34','34','34','34']"
                       style={{backgroundColor: '#00B057', color: '#fff', fontSize: '15px'}}>Get started now
                      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '38px', height: '38px', borderRadius: '50%', background: '#007C3E', marginReft: '19px'}}>
                        <i className="fas fa-play" style={{color: '#fff', fontSize: '12px', lineHeight: '15px', marginTop: '2px', marginLeft: '3px'}}></i>
                      </div>
                    </a>
                </li>
                <li data-index="rs-74" data-transition="zoomout" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="1500"  data-thumb="http://works.themepunch.com/revolution_5_3/wp-content/"  data-rotate="0"  data-saveperformance="off"  data-title="02" data-param1="02" data-description="">
                  <img src="https://placehold.it/1920x1100" alt="" data-bgcolor="#262b32" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />

                    <div className="overlay-bg bg-extra-dark-gray" style={{opacity: 0.5}}></div>

                    <div className="tp-caption tp-resizeme alt-font text-white font-weight-600 text-center"
                         id="slide-411-layer-04"
                         data-frames='[{"delay":200,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[-100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                         data-type="text"
                         data-whitespace="nowrap"
                         data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                         data-y="['middle','middle','middle','middle']" data-voffset="['-50','-50','-115','-65']"
                         data-width="auto"
                         data-height="auto"
                         data-fontsize="['70','53','60','35']"
                         data-lineheight="['70','59','70','39']"
                         data-letterspacing="['-2','-1','-1','-1']"
                         data-responsive="off"
                         data-responsive_offset="off"
                         data-paddingtop="['0','0','0','0']"
                         data-paddingbottom="['15','8','8','8']"
                         data-paddingright="['0','0','0','0']"
                         data-paddingleft="['0','0','0','0']"
                         style={{textShadow: '0 0 20px rgba(0,0,0,0.3)'}}>Combine thinking<br /> and technical</div>

                    <div className="tp-caption tp-resizeme alt-font text-white font-weight-300 text-center"
                         id="slide-411-layer-05"
                         data-frames='[{"delay":1200,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[-100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                         data-type="text"
                         data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                         data-y="['middle','middle','middle','middle']" data-voffset="['65','100','-5','15']"
                         data-width="auto"
                         data-height="auto"
                         data-fontsize="['19','13','19','14']"
                         data-lineheight="['28','14','23','20']"
                         data-letterspacing="['0.5','0.5','0.5','0.5']"
                         data-responsive="off"
                         data-responsive_offset="on">The best way to promote your business</div>

                    <a className="tp-caption tp-resizeme rs-btn btn btn-rounded d-flex align-items-center justify-content-center"
                       href="contact-us-classic.html"
                       id="slide-411-layer-06"
                       data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                       data-y="['middle','middle','middle','middle']" data-voffset="['152','130','82','80']"
                       data-whitespace="nowrap"
                       data-type="button"
                       data-responsive="off"
                       data-responsive_offset="off"
                       data-frames='[{"delay":1200,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[-100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                       data-textalign="['center','center','center','center']"
                       data-paddingtop="['8','8','8','8']"
                       data-paddingbottom="['8','8','8','8']"
                       data-paddingright="['7','7','7','7']"
                       data-paddingleft="['34','34','34','34']"
                       style={{backgroundColor: '#00B057', color: '#fff', fontSize: '15px'}}>Get started now
                      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '38px', height: '38px', borderRadius: '50%', background: '#007C3E', marginLeft: '19px'}}>
                        <i className="fas fa-play" style={{color: '#fff', fontSize: '12px', lineHeight: '15px', marginTop: '2px', marginLeft: '3px'}}></i>
                      </div>
                    </a>
                </li>

                <li data-index="rs-75" data-transition="zoomout" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="1500"  data-thumb="http://works.themepunch.com/revolution_5_3/wp-content/"  data-rotate="0"  data-saveperformance="off"  data-title="03" data-param1="03" data-description="">
                  <img src="https://placehold.it/1920x1100" alt="" data-bgcolor="#262b32" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />

                    <div className="overlay-bg bg-extra-dark-gray" style={{opacity: 0.5}}></div>

                    <div className="tp-caption tp-resizeme alt-font text-white font-weight-600 text-center"
                         id="slide-411-layer-07"
                         data-frames='[{"delay":200,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[-100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                         data-type="text"
                         data-whitespace="nowrap"
                         data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                         data-y="['middle','middle','middle','middle']" data-voffset="['-50','-50','-115','-65']"
                         data-width="auto"
                         data-height="auto"
                         data-fontsize="['70','53','60','35']"
                         data-lineheight="['70','59','70','39']"
                         data-letterspacing="['-2','-1','-1','-1']"
                         data-responsive="off"
                         data-responsive_offset="off"
                         data-paddingtop="['0','0','0','0']"
                         data-paddingbottom="['15','8','8','8']"
                         data-paddingright="['0','0','0','0']"
                         data-paddingleft="['0','0','0','0']"
                         style={{textShadow: '0 0 20px rgba(0,0,0,0.3)'}}>Delivering creative<br /> digital products</div>

                    <div className="tp-caption tp-resizeme alt-font text-white font-weight-300 text-center"
                         id="slide-411-layer-08"
                         data-frames='[{"delay":1200,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[-100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                         data-type="text"
                         data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                         data-y="['middle','middle','middle','middle']" data-voffset="['65','100','-5','15']"
                         data-width="auto"
                         data-height="auto"
                         data-fontsize="['19','13','19','14']"
                         data-lineheight="['28','14','23','20']"
                         data-letterspacing="['0.5','0.5','0.5','0.5']"
                         data-responsive="off"
                         data-responsive_offset="on">The best way to promote your business</div>

                    <a className="tp-caption tp-resizeme rs-btn btn btn-rounded d-flex align-items-center justify-content-center"
                       href="contact-us-classic.html"
                       id="slide-411-layer-09"
                       data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                       data-y="['middle','middle','middle','middle']" data-voffset="['152','130','82','80']"
                       data-whitespace="nowrap"
                       data-type="button"
                       data-responsive="off"
                       data-responsive_offset="off"
                       data-frames='[{"delay":1200,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[-100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                       data-textalign="['center','center','center','center']"
                       data-paddingtop="['8','8','8','8']"
                       data-paddingbottom="['8','8','8','8']"
                       data-paddingright="['7','7','7','7']"
                       data-paddingleft="['34','34','34','34']"
                       style={{backgroundColor: '#00B057', color: '#fff', fontSize: '15px'}}>Get started now
                      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '38px', height: '38px', borderRadius: '50%', background: '#007C3E', marginLeft: '19px'}}>
                        <i className="fas fa-play" style={{color: '#fff', fontSize: '12px', lineHeight: '15px', marginTop: '2px', marginLeft: '3px'}}></i>
                      </div>
                    </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section className="extra-big-section cover-background overflow-visible"
               style={{backgroundImage: "url('https://placehold.it/1920x733')"}}>
        <div className="container">
          <div className="row">
            <div className="col-12 overlap-section md-no-margin-top md-margin-70px-bottom sm-margin-50px-bottom">
              <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center">
                <div className="col col-sm-8 md-margin-30px-bottom xs-margin-15px-bottom">
                  <div
                    className="feature-box h-100 feature-box-left-icon-middle padding-3-rem-all bg-white box-shadow-small box-shadow-large-hover border-radius-4px overflow-hidden last-paragraph-no-margin lg-padding-2-half-rem-tb lg-padding-2-rem-lr md-padding-4-rem-all">
                    <div className="feature-box-icon margin-30px-right lg-margin-25px-right">
                      <i className="line-icon-Cursor-Click2 icon-medium text-green"></i>
                    </div>
                    <div className="feature-box-content">
                      <div className="text-slate-blue font-weight-500 text-large margin-5px-bottom">Innovative
                        business
                      </div>
                      <span>Easy to customize</span>
                    </div>
                  </div>
                </div>
                <div className="col col-sm-8 md-margin-30px-bottom xs-margin-15px-bottom">
                  <div
                    className="feature-box h-100 feature-box-left-icon-middle padding-3-rem-all bg-white box-shadow-small box-shadow-large-hover border-radius-4px overflow-hidden last-paragraph-no-margin lg-padding-2-half-rem-tb lg-padding-2-rem-lr md-padding-4-rem-all">
                    <div className="feature-box-icon margin-30px-right lg-margin-25px-right">
                      <i className="line-icon-Bakelite icon-medium text-green"></i>
                    </div>
                    <div className="feature-box-content">
                      <div className="text-slate-blue font-weight-500 text-large margin-5px-bottom">Expertly marketing
                      </div>
                      <span>High quality services</span>
                    </div>
                  </div>
                </div>
                <div className="col col-sm-8">
                  <div
                    className="feature-box h-100 feature-box-left-icon-middle padding-3-rem-all bg-white box-shadow-small box-shadow-large-hover border-radius-4px overflow-hidden last-paragraph-no-margin lg-padding-2-half-rem-tb lg-padding-2-rem-lr md-padding-4-rem-all">
                    <div className="feature-box-icon margin-30px-right lg-margin-25px-right">
                      <i className="line-icon-Boy icon-medium text-green"></i>
                    </div>
                    <div className="feature-box-content">
                      <div className="text-slate-blue font-weight-500 text-large margin-5px-bottom">Engaging audiences
                      </div>
                      <span>Build perfect websites</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-end">
            <div
              className="col-12 col-lg-3 col-md-6 order-1 text-center text-lg-right last-paragraph-no-margin md-margin-50px-bottom wow animate__fadeInLeft">
              <div
                className="title-large-2 text-green alt-font line-height-70px letter-spacing-minus-3px font-weight-600">175+
              </div>
              <span
                className="alt-font text-extra-dark-gray font-weight-500 text-uppercase letter-spacing-2px d-block margin-15px-bottom sm-margin-5px-bottom">Worldwide offices</span>
              <p className="w-90 d-inline-block sm-w-60 xs-w-80">Lorem ipsum dolor sit consectetur do eiusmod tempor
                incididunt</p>
            </div>
            <div className="col-12 col-lg-6 order-3 order-lg-2 text-center z-index-0 wow animate__fadeIn">
              <div className="tilt-box"
                   data-tilt-options='{ "maxTilt": 20, "perspective": 1000, "easing": "cubic-bezier(.03,.98,.52,.99)", "scale": 1, "speed": 500, "transition": true, "reset": true, "glare": false, "maxGlare": 1 }'>
                <span
                  className="text-extra-big-2 alt-font text-uppercase text-green font-weight-600 letter-spacing-minus-10px image-mask cover-background"
                  style={{backgroundImage: "url('https://placehold.it/807x847')"}}>20</span>
                <span
                  className="alt-font text-extra-large text-extra-dark-gray letter-spacing-4px font-weight-600 text-uppercase margin-5px-top d-block">Years of experience</span>
              </div>
            </div>
            <div
              className="col-12 col-lg-3 col-md-6 order-2 text-center text-lg-left order-lg last-paragraph-no-margin md-margin-50px-bottom wow animate__fadeInRight">
              <div
                className="title-large-2 text-green alt-font line-height-70px letter-spacing-minus-3px font-weight-600">200+
              </div>
              <span
                className="alt-font text-extra-dark-gray font-weight-500 text-uppercase letter-spacing-2px d-block margin-15px-bottom sm-margin-5px-bottom">High skilled people</span>
              <p className="w-90 d-inline-block sm-w-60 xs-w-80">Lorem ipsum dolor sit consectetur do eiusmod tempor
                incididunt</p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-visible pt-md-0 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center overlap-section wow animate__zoomIn">
              <img
                className="rounded-circle box-shadow-large w-170px h-170px border-all border-width-10px border-color-white"
                src="https://placehold.it/340x340" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center wow animate__fadeIn">
            <div
              className="col-12 col-lg-5 col-sm-9 text-center text-lg-left md-margin-40px-bottom sm-margin-15px-bottom xs-margin-20px-bottom">
              <h5 className="alt-font text-extra-dark-gray font-weight-600 w-95 lg-w-100">We provide advanced solutions
                to growin your online business</h5>
            </div>
            <div className="col-12 col-lg-6 offset-lg-1 wow animate__fadeIn" data-wow-duration="0.3">
              <div className="row row-cols-1 row-cols-sm-2">
                <div className="col text-center text-sm-left xs-margin-30px-bottom">
                  <div className="last-paragraph-no-margin">
                    <span
                      className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray xs-margin-5px-bottom">Build perfect websites</span>
                    <p className="w-85 lg-w-100 xs-w-75 mx-auto mx-sm-0">Lorem ipsum dolor consectetur adipiscing elit
                      eiusmod tempor elit eiusmod tempor.</p>
                  </div>
                </div>
                <div className="col text-center text-sm-left">
                  <div className="last-paragraph-no-margin">
                    <span
                      className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray xs-margin-5px-bottom">Unique experiences</span>
                    <p className="w-85 lg-w-100 xs-w-75 mx-auto mx-sm-0">Lorem ipsum dolor consectetur adipiscing elit
                      eiusmod tempor elit eiusmod tempor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 margin-8-rem-top md-margin-6-rem-top">
              <div className="outside-box-right">
                <div className="swiper-container white-move"
                     data-slider-options='{"loop": true, "slidesPerView": 1, "spaceBetween": 30, "autoplay": { "delay": 3000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "992": { "slidesPerView": 3 }, "768": { "slidesPerView": 2 } } }'>
                  <div className="swiper-wrapper">
                    <div className="swiper-slide interactive-banners-style-07">
                      <div className="interactive-banners-box bg-dark-slate-blue border-radius-6px">
                        <div className="interactive-banners-box-image">
                          <img src="https://placehold.it/800x618" alt=""/>
                          <div className="overlay-bg bg-gradient-dark-slate-blue-transparent"></div>
                        </div>
                        <div className="fancy-text-content padding-65px-lr md-padding-55px-lr xs-padding-30px-lr">
                          <div className="text-white opacity-6 margin-10px-bottom">High quality services</div>
                          <div
                            className="alt-font text-extra-large text-white margin-15px-bottom w-60 lg-w-90 sm-w-50 xs-w-90 md-margin-5px-bottom">We
                            are delivering beautiful products
                          </div>
                          <a href="what-we-offers.html"
                             className="btn btn-fancy btn-very-small btn-green btn-round-edge margin-15px-top">View
                            information</a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide interactive-banners-style-07">
                      <div className="interactive-banners-box bg-dark-slate-blue border-radius-6px">
                        <div className="interactive-banners-box-image">
                          <img src="https://placehold.it/800x618" alt=""/>
                          <div className="overlay-bg bg-gradient-dark-slate-blue-transparent"></div>
                        </div>
                        <div className="fancy-text-content padding-65px-lr md-padding-55px-lr xs-padding-30px-lr">
                          <div className="text-white opacity-6 margin-10px-bottom">Build perfect websites</div>
                          <div
                            className="alt-font text-extra-large text-white margin-15px-bottom w-60 lg-w-90 sm-w-50 xs-w-90 md-margin-5px-bottom">Bundle
                            of layout type Different layout
                          </div>
                          <a href="what-we-offers.html"
                             className="btn btn-fancy btn-very-small btn-green btn-round-edge margin-15px-top">View
                            information</a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide interactive-banners-style-07">
                      <div className="interactive-banners-box bg-dark-slate-blue border-radius-6px">
                        <div className="interactive-banners-box-image">
                          <img src="https://placehold.it/800x618" alt=""/>
                          <div className="overlay-bg bg-gradient-dark-slate-blue-transparent"></div>
                        </div>
                        <div className="fancy-text-content padding-65px-lr md-padding-55px-lr xs-padding-30px-lr">
                          <div className="text-white opacity-6 margin-10px-bottom">Unique experiences</div>
                          <div
                            className="alt-font text-extra-large text-white margin-15px-bottom w-60 lg-w-90 sm-w-50 xs-w-90 md-margin-5px-bottom">Digital
                            studio craft experiences
                          </div>
                          <a href="what-we-offers.html"
                             className="btn btn-fancy btn-very-small btn-green btn-round-edge margin-15px-top">View
                            information</a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide interactive-banners-style-07">
                      <div className="interactive-banners-box bg-dark-slate-blue border-radius-6px">
                        <div className="interactive-banners-box-image">
                          <img src="https://placehold.it/800x618" alt=""/>
                          <div className="overlay-bg bg-gradient-dark-slate-blue-transparent"></div>
                        </div>
                        <div className="fancy-text-content padding-65px-lr md-padding-55px-lr xs-padding-30px-lr">
                          <div className="text-white opacity-6 margin-10px-bottom">High quality code</div>
                          <div
                            className="alt-font text-extra-large text-white margin-15px-bottom w-60 lg-w-90 sm-w-50 xs-w-90 md-margin-5px-bottom">We
                            are delivering beautiful products
                          </div>
                          <a href="what-we-offers.html"
                             className="btn btn-fancy btn-very-small btn-green btn-round-edge margin-15px-top">View
                            information</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="container">
          <div className="row justify-content-center wow animate__fadeIn">
            <div
              className="col-12 col-lg-8 col-sm-10 text-center margin-5-rem-bottom md-margin-3-rem-bottom xs-margin-5-rem-bottom">
              <span
                className="alt-font text-green text-extra-medium d-block margin-20px-bottom font-weight-500 sm-margin-10px-bottom">Amazing design services</span>
              <h5 className="alt-font font-weight-600 text-extra-dark-gray d-inline-block">Beautiful and easy to use
                professional animations and drag & drop feature</h5>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center">
            <div className="col col-sm-8 md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn"
                 data-wow-delay="0.2s">
              <div
                className="feature-box feature-box-show-hover box-shadow-large-hover border-radius-6px feature-box-bg-white-hover border-all border-color-medium-gray overflow-hidden last-paragraph-no-margin">
                <div className="feature-box-move-bottom-top padding-3-rem-all">
                  <i className="line-icon-Android-Store icon-medium text-green margin-25px-bottom"></i>
                  <div className="feature-box-content last-paragraph-no-margin">
                    <span className="text-extra-dark-gray font-weight-500 d-block margin-10px-bottom alt-font">eCommerce development</span>
                    <p>Lorem ipsum dolor sit consectetur adipiscing elit eiusmod incididunt.</p>
                  </div>
                  <div className="move-bottom-top margin-15px-top">
                    <a href="what-we-offers.html" className="btn btn-link thin btn-large text-green">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-sm-8 md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn"
                 data-wow-delay="0.4s">
              <div
                className="feature-box feature-box-show-hover box-shadow-large-hover border-radius-6px feature-box-bg-white-hover border-all border-color-medium-gray overflow-hidden last-paragraph-no-margin">
                <div className="feature-box-move-bottom-top padding-3-rem-all">
                  <i className="line-icon-Bakelite icon-medium text-green margin-25px-bottom"></i>
                  <div className="feature-box-content last-paragraph-no-margin">
                    <span className="text-extra-dark-gray font-weight-500 d-block margin-10px-bottom alt-font">Design and development</span>
                    <p>Lorem ipsum dolor sit consectetur adipiscing elit eiusmod incididunt.</p>
                  </div>
                  <div className="move-bottom-top margin-15px-top">
                    <a href="what-we-offers.html" className="btn btn-link thin btn-large text-green">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-sm-8 wow animate__fadeIn" data-wow-delay="0.6s">
              <div
                className="feature-box feature-box-show-hover box-shadow-large-hover border-radius-6px feature-box-bg-white-hover border-all border-color-medium-gray overflow-hidden last-paragraph-no-margin">
                <div className="feature-box-move-bottom-top padding-3-rem-all">
                  <i className="line-icon-Archery-2 icon-medium text-green margin-25px-bottom"></i>
                  <div className="feature-box-content last-paragraph-no-margin">
                    <span className="text-extra-dark-gray font-weight-500 d-block margin-10px-bottom alt-font">Social media marketing</span>
                    <p>Lorem ipsum dolor sit consectetur adipiscing elit eiusmod incididunt.</p>
                  </div>
                  <div className="move-bottom-top margin-15px-top">
                    <a href="what-we-offers.html" className="btn btn-link thin btn-large text-green">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row wow animate__fadeIn" data-wow-delay="0.8s">
            <div className="col-12 text-center margin-6-rem-top">
              <a href="our-services.html" className="btn btn-fancy btn-medium btn-white btn-round-edge btn-box-shadow">See
                all services</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-xl-5 col-lg-6 col-md-10 md-margin-50px-bottom">
              <div className="col-12 p-0 margin-3-rem-bottom wow animate__fadeIn">
                <span
                  className="alt-font font-weight-500 text-green text-extra-medium d-block margin-20px-bottom sm-margin-10px-bottom">Business process</span>
                <h5
                  className="alt-font font-weight-600 text-extra-dark-gray d-inline-block w-90 lg-w-80 sm-w-100">Understand
                  and apply the business process</h5>
              </div>
              <div className="col-12 p-0">
                <div className="col-12 p-0 process-step-style-02 wow animate__fadeIn" data-wow-delay="0.2s">
                  <div className="process-step-item">
                    <div className="process-step-icon-wrap">
                      <div
                        className="process-step-icon text-center border-all border-color-green border-width-2px bg-green alt-font font-weight-500">1
                      </div>
                      <span className="process-step-item-box-bfr bg-medium-gray"></span>
                    </div>
                    <div className="process-content last-paragraph-no-margin">
                      <span className="alt-font d-block font-weight-500 text-extra-dark-gray margin-5px-bottom">Unlimited power customization</span>
                      <p className="w-80 xs-w-100">Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt
                        ut labore.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 p-0 process-step-style-02 wow animate__fadeIn" data-wow-delay="0.4s">
                  <div className="process-step-item">
                    <div className="process-step-icon-wrap">
                      <div
                        className="process-step-icon text-center border-all border-color-green border-width-2px bg-green alt-font font-weight-500">2
                      </div>
                      <span className="process-step-item-box-bfr bg-medium-gray"></span>
                    </div>
                    <div className="process-content last-paragraph-no-margin">
                      <span className="alt-font d-block font-weight-500 text-extra-dark-gray margin-5px-bottom">Pixel perfect design and code</span>
                      <p className="w-80 xs-w-100">Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt
                        ut labore.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 p-0 process-step-style-02 wow animate__fadeIn" data-wow-delay="0.6s">
                  <div className="process-step-item">
                    <div className="process-step-icon-wrap">
                      <div
                        className="process-step-icon text-center border-all border-color-green border-width-2px bg-green alt-font font-weight-500">3
                      </div>
                    </div>
                    <div className="process-content last-paragraph-no-margin">
                      <span className="alt-font d-block font-weight-500 text-extra-dark-gray margin-5px-bottom">Beautifully handcrafted templates</span>
                      <p className="w-80 xs-w-100">Lorem ipsum amet consectetur adipiscing do eiusmod tempor incididunt
                        ut labore.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-xl-1 wow animate__fadeInRight">
              <div className="outside-box-right position-relative">
                <img src="images/home-startup-business-process.jpg" className="overflow-hidden" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-40px-top md-no-padding-top">
        <div className="container">
          <div className="row justify-content-center wow animate__fadeIn">
            <div className="col-12 col-xl-5 col-lg-6 col-sm-7 text-center margin-5-rem-bottom md-margin-3-rem-bottom">
              <span
                className="alt-font font-weight-500 text-green text-extra-medium d-block margin-20px-bottom sm-margin-10px-bottom">Simple pricing packages</span>
              <h5
                className="alt-font font-weight-600 text-extra-dark-gray d-inline-block letter-spacing-minus-1-half">Choose
                one of our plans get access to plugins for free</h5>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10 col-lg-11 tab-style-04">
              <ul
                className="nav nav-tabs text-uppercase justify-content-center text-center alt-font margin-7-half-rem-bottom sm-margin-20px-bottom wow animate__fadeIn">
                <li className="nav-item bg-white border-color-extra-light-gray"><a className="nav-link active"
                                                                                   data-toggle="tab"
                                                                                   href="#monthly-tab">Monthly</a><span
                  className="tab-bg-active bg-green"></span></li>
                <li className="nav-item bg-white border-color-extra-light-gray"><a className="nav-link"
                                                                                   data-toggle="tab"
                                                                                   href="#yearly-tab">Yearly</a><span
                  className="tab-bg-active bg-green"></span></li>
              </ul>
              <div className="tab-content">
                <div id="monthly-tab" className="tab-pane fade in active show">
                  <div className="row row-cols-1 row-cols-md-3 align-items-center">
                    <div
                      className="col pricing-table-style-02 text-center px-md-0 sm-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeInRight"
                      data-wow-delay="0.4s">
                      <div className="pricing-table bg-white border-all border-color-medium-gray border-radius-6px">
                        <div className="pricing-header bg-light-gray padding-20px-tb">
                          <div
                            className="alt-font font-weight-500 text-small text-extra-dark-gray text-uppercase letter-spacing-minus-1-half">Basic
                            plan
                          </div>
                        </div>
                        <div className="pricing-body padding-40px-tb">
                          <i className="line-icon-Administrator icon-medium text-green margin-20px-bottom"></i>
                          <h4
                            className="font-weight-500 text-extra-dark-gray letter-spacing-minus-2px margin-15px-bottom">$9.99</h4>
                          <ul className="list-style-03">
                            <li className="border-color-medium-gray"><span
                              className="text-extra-dark-gray font-weight-500">5</span> Domains
                            </li>
                            <li className="border-color-medium-gray"><span
                              className="text-extra-dark-gray font-weight-500">2 GB</span> File upload
                            </li>
                            <li className="border-color-medium-gray"><span
                              className="text-extra-dark-gray font-weight-500">20 GB</span> Secure storage
                            </li>
                            <li><span className="text-extra-dark-gray font-weight-500">Unlimited</span> bandwidth</li>
                          </ul>
                        </div>
                        <div className="pricing-footer margin-55px-bottom">
                          <a className="btn btn-medium btn-transparent-dark-gray btn-round-edge"
                             href="pricing-packages.html">Register now</a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col pricing-table-style-02 text-center px-md-0 sm-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn z-index-1">
                      <div className="pricing-table pricing-popular bg-white box-shadow-large border-radius-6px">
                        <div className="pricing-header bg-extra-dark-gray padding-20px-tb">
                          <div
                            className="alt-font font-weight-500 text-small text-white text-uppercase letter-spacing-minus-1-half">Standard
                            plan
                          </div>
                        </div>
                        <div className="pricing-body padding-60px-tb">
                          <i className="line-icon-Business-ManWoman icon-medium text-green margin-20px-bottom"></i>
                          <h4
                            className="font-weight-500 text-extra-dark-gray letter-spacing-minus-2px margin-15px-bottom">$19.99</h4>
                          <ul className="list-style-03">
                            <li className="border-color-medium-gray"><span
                              className="text-extra-dark-gray font-weight-500">10</span> Domains
                            </li>
                            <li className="border-color-medium-gray"><span
                              className="text-extra-dark-gray font-weight-500">2 GB</span> File upload
                            </li>
                            <li className="border-color-medium-gray"><span
                              className="text-extra-dark-gray font-weight-500">40 GB</span> Secure storage
                            </li>
                            <li><span className="text-extra-dark-gray font-weight-500">Unlimited</span> bandwidth</li>
                          </ul>
                        </div>
                        <div className="pricing-footer margin-5px-top margin-55px-bottom">
                          <a className="btn btn-medium btn-dark-gray btn-round-edge" href="pricing-packages.html">Register
                            now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col pricing-table-style-02 text-center px-md-0 wow animate__fadeInLeft"
                         data-wow-delay="0.4s">
                      <div className="pricing-table bg-white border-all border-color-medium-gray border-radius-6px">
                        <div className="pricing-header bg-light-gray padding-20px-tb">
                          <div
                            className="alt-font font-weight-500 text-small text-extra-dark-gray text-uppercase letter-spacing-minus-1-half">Premium
                            plan
                          </div>
                        </div>
                        <div className="pricing-body padding-40px-tb">
                          <i className="line-icon-Business-Mens icon-medium text-green margin-20px-bottom"></i>
                          <h4
                            className="font-weight-500 text-extra-dark-gray letter-spacing-minus-2px margin-15px-bottom">$29.99</h4>
                          <ul className="list-style-03">
                            <li className="border-color-medium-gray"><span
                              className="text-extra-dark-gray font-weight-500">20</span> Domains
                            </li>
                            <li className="border-color-medium-gray"><span
                              className="text-extra-dark-gray font-weight-500">4 GB</span> File upload
                            </li>
                            <li className="border-color-medium-gray"><span
                              className="text-extra-dark-gray font-weight-500">60 GB</span> Secure storage
                            </li>
                            <li><span className="text-extra-dark-gray font-weight-500">Unlimited</span> bandwidth</li>
                          </ul>
                        </div>
                        <div className="pricing-footer margin-55px-bottom">
                          <a className="btn btn-medium btn-transparent-dark-gray btn-round-edge"
                             href="pricing-packages.html">Register now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="yearly-tab" className="tab-pane fade">
                  <div className="row row-cols-1 row-cols-md-3 align-items-center">
                    <div
                      className="col pricing-table-style-02 text-center px-md-0 sm-margin-30px-bottom xs-margin-15px-bottom">
                      <div className="pricing-table bg-white border-all border-color-medium-gray border-radius-6px">
                        <div className="pricing-header bg-light-gray padding-20px-tb">
                          <div
                            className="alt-font font-weight-500 text-small text-extra-dark-gray text-uppercase letter-spacing-minus-1-half">Basic
                            plan
                          </div>
                        </div>
                        <div className="pricing-body padding-40px-tb">
                          <i className="line-icon-Administrator icon-medium text-green margin-20px-bottom"></i>
                          <h4
                            className="font-weight-500 text-extra-dark-gray letter-spacing-minus-2px margin-15px-bottom">$90.99</h4>
                          <ul className="list-style-03">
                            <li className="border-color-medium-gray"><span
                              className="text-extra-dark-gray font-weight-500">5</span> Domains
                            </li>
                            <li className="border-color-medium-gray"><span
                              className="text-extra-dark-gray font-weight-500">2 GB</span> File upload
                            </li>
                            <li className="border-color-medium-gray"><span
                              className="text-extra-dark-gray font-weight-500">20 GB</span> Secure storage
                            </li>
                            <li><span className="text-extra-dark-gray font-weight-500">Unlimited</span> bandwidth</li>
                          </ul>
                        </div>
                        <div className="pricing-footer margin-55px-bottom">
                          <a className="btn btn-medium btn-transparent-dark-gray btn-round-edge"
                             href="pricing-packages.html">Register now</a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col pricing-table-style-02 text-center px-md-0 sm-margin-30px-bottom xs-margin-15px-bottom">
                      <div className="pricing-table pricing-popular bg-white box-shadow-medium border-radius-6px">
                        <div className="pricing-header bg-extra-dark-gray padding-20px-tb">
                          <div
                            className="alt-font font-weight-500 text-small text-white text-uppercase letter-spacing-minus-1-half">Standard
                            plan
                          </div>
                        </div>
                        <div className="pricing-body padding-60px-tb">
                          <i className="line-icon-Business-ManWoman icon-medium text-green margin-20px-bottom"></i>
                          <h4
                            className="font-weight-500 text-extra-dark-gray letter-spacing-minus-2px margin-15px-bottom">$199.99</h4>
                          <ul className="list-style-03">
                            <li className="border-color-medium-gray"><span
                              className="text-extra-dark-gray font-weight-500">10</span> Domains
                            </li>
                            <li className="border-color-medium-gray"><span
                              className="text-extra-dark-gray font-weight-500">2 GB</span> File upload
                            </li>
                            <li className="border-color-medium-gray"><span
                              className="text-extra-dark-gray font-weight-500">40 GB</span> Secure storage
                            </li>
                            <li><span className="text-extra-dark-gray font-weight-500">Unlimited</span> bandwidth</li>
                          </ul>
                        </div>
                        <div className="pricing-footer margin-5px-top margin-55px-bottom">
                          <a className="btn btn-medium btn-dark-gray btn-round-edge" href="pricing-packages.html">Register
                            now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col pricing-table-style-02 text-center px-md-0">
                      <div className="pricing-table bg-white border-all border-color-medium-gray border-radius-6px">
                        <div className="pricing-header bg-light-gray padding-20px-tb">
                          <div
                            className="alt-font font-weight-500 text-small text-extra-dark-gray text-uppercase letter-spacing-minus-1-half">Premium
                            plan
                          </div>
                        </div>
                        <div className="pricing-body padding-40px-tb">
                          <i className="line-icon-Business-Mens icon-medium text-green margin-20px-bottom"></i>
                          <h4
                            className="font-weight-500 text-extra-dark-gray letter-spacing-minus-2px margin-15px-bottom">$290.99</h4>
                          <ul className="list-style-03">
                            <li className="border-color-medium-gray"><span
                              className="text-extra-dark-gray font-weight-500">20</span> Domains
                            </li>
                            <li className="border-color-medium-gray"><span
                              className="text-extra-dark-gray font-weight-500">4 GB</span> File upload
                            </li>
                            <li className="border-color-medium-gray"><span
                              className="text-extra-dark-gray font-weight-500">60 GB</span> Secure storage
                            </li>
                            <li><span className="text-extra-dark-gray font-weight-500">Unlimited</span> bandwidth</li>
                          </ul>
                        </div>
                        <div className="pricing-footer margin-55px-bottom">
                          <a className="btn btn-medium btn-transparent-dark-gray btn-round-edge"
                             href="pricing-packages.html">Register now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-gray">
        <div className="container">
          <div className="row justify-content-center wow animate__fadeIn">
            <div
              className="col-12 col-xl-4 col-lg-5 col-sm-6 text-center margin-3-half-rem-bottom md-margin-2-rem-bottom">
              <span
                className="alt-font font-weight-500 text-green text-extra-medium d-block margin-20px-bottom sm-margin-10px-bottom">Latest blogs</span>
              <h5
                className="alt-font font-weight-600 text-extra-dark-gray d-inline-block letter-spacing-minus-1-half">Attractive
                articles updated daily basis</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12 blog-content sm-no-padding-lr">
              <ul
                className="blog-masonry blog-wrapper grid grid-loading grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-double-extra-large">
                <li className="grid-sizer"></li>
                <li className="grid-item wow animate__fadeIn">
                  <div className="blog-post border-radius-5px bg-white">
                    <div className="d-flex align-items-center font-weight-500 padding-30px-lr padding-15px-tb">
                      <a href="blog-masonry.html" className="text-small mr-auto text-slate-blue text-green-hover">24
                        February 2020</a>
                      <a href="blog-post-layout-01.html" className="blog-like text-extra-small text-green-hover"><i
                        className="far fa-heart"></i><span>28</span></a>
                      <a href="blog-post-layout-01.html" className="blog-comment text-extra-small text-green-hover"><i
                        className="far fa-comment"></i><span>52</span></a>
                    </div>
                    <div className="blog-post-image">
                      <a href="blog-post-layout-01.html" title=""><img src="https://placehold.it/720x522" alt="" /></a>
                      <div className="alt-font blog-category"><a href="blog-masonry.html"
                                                                 className="text-uppercase text-green text-extra-dark-gray-hover">Fashion</a>
                      </div>
                    </div>
                    <div
                      className="post-details padding-3-rem-lr padding-2-half-rem-tb lg-padding-2-rem-all md-padding-2-half-rem-tb md-padding-3-rem-lr">
                      <a href="blog-post-layout-01.html"
                         className="alt-font font-weight-500 text-extra-medium text-extra-dark-gray text-green-hover d-block margin-15px-bottom">Recognizing
                        the need is the primary condition design</a>
                      <p>Lorem ipsum is simply dummy text of printing and typesetting industry lorem ipsum been
                        dummy...</p>
                    </div>
                  </div>
                </li>
                <li className="grid-item wow animate__fadeIn" data-wow-delay="0.2s">
                  <div className="blog-post border-radius-5px bg-white">
                    <div className="d-flex align-items-center font-weight-500 padding-30px-lr padding-15px-tb">
                      <a href="blog-masonry.html" className="text-small mr-auto text-slate-blue text-green-hover">10
                        February 2020</a>
                      <a href="blog-post-layout-02.html" className="blog-like text-extra-small text-green-hover"><i
                        className="far fa-heart"></i><span>28</span></a>
                      <a href="blog-post-layout-02.html" className="blog-comment text-extra-small text-green-hover"><i
                        className="far fa-comment"></i><span>40</span></a>
                    </div>
                    <div className="blog-post-image">
                      <a href="blog-post-layout-02.html" title=""><img src="https://placehold.it/720x522" alt="" /></a>
                      <div className="alt-font blog-category"><a href="blog-masonry.html" className="text-uppercase text-green text-extra-dark-gray-hover">Lifestyle</a>
                      </div>
                    </div>
                    <div
                      className="post-details padding-3-rem-lr padding-2-half-rem-tb lg-padding-2-rem-all md-padding-2-half-rem-tb md-padding-3-rem-lr">
                      <a href="blog-post-layout-02.html"
                         className="alt-font font-weight-500 text-extra-medium text-extra-dark-gray text-green-hover d-block margin-15px-bottom">Computers
                        are to design as microwaves are to cooking</a>
                      <p>Lorem ipsum is simply dummy text of printing and typesetting industry lorem ipsum been
                        dummy...</p>
                    </div>
                  </div>
                </li>
                <li className="grid-item wow animate__fadeIn" data-wow-delay="0.4s">
                  <div className="blog-post border-radius-5px bg-white">
                    <div className="d-flex align-items-center font-weight-500 padding-30px-lr padding-15px-tb">
                      <a href="blog-masonry.html" className="text-small mr-auto text-slate-blue text-green-hover">18
                        January 2020</a>
                      <a href="blog-post-layout-03.html" className="blog-like text-extra-small text-green-hover"><i
                        className="far fa-heart"></i><span>30</span></a>
                      <a href="blog-post-layout-03.html" className="blog-comment text-extra-small text-green-hover"><i
                        className="far fa-comment"></i><span>42</span></a>
                    </div>
                    <div className="blog-post-image">
                      <a href="blog-post-layout-03.html" title=""><img src="https://placehold.it/720x522" alt="" /></a>
                      <div className="alt-font blog-category"><a href="blog-masonry.html" className="text-uppercase text-green text-extra-dark-gray-hover">Design</a>
                      </div>
                    </div>
                    <div
                      className="post-details padding-3-rem-lr padding-2-half-rem-tb lg-padding-2-rem-all md-padding-2-half-rem-tb md-padding-3-rem-lr">
                      <a href="blog-post-layout-03.html"
                         className="alt-font font-weight-500 text-extra-medium text-extra-dark-gray text-green-hover d-block margin-15px-bottom">Fashion
                        and interior design are one and the same</a>
                      <p>Lorem ipsum is simply dummy text of printing and typesetting industry lorem ipsum been
                        dummy...</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cover-background sm-overflow-visible wow animate__fadeIn"
               style={{backgroundImage: "url('images/home-startup-footer-top-bg.jpg')"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-7 col-md-10 text-center">
              <span className="alt-font font-weight-500 text-green text-extra-medium d-block margin-20px-bottom sm-margin-10px-bottom">Love to work together</span>
              <h4 className="alt-font font-weight-600 text-extra-dark-gray d-inline-block">Are you ready to work with us? Let's grow your business.</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 col-md-9 text-center">
              <div className="newsletter-style-04 position-relative d-inline-block w-80 alt-font margin-3-rem-top md-w-100 sm-margin-15px-top">
                <form action="email-templates/subscribe-newsletter.php" method="post">
                  <input className="main-font box-shadow border-radius-6px large-input border-all border-color-transparent no-margin required" name="email" placeholder="Enter your email address" type="email" />
                  <input type="hidden" name="redirect" value="" />
                  <button className="btn text-small letter-spacing-1px btn-green font-weight-400 submit" type="submit">Subscribe now</button>
                  <div className="form-results border-radius-6px position-absolute d-none lg-line-height-normal lg-margin-10px-top"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-startup footer-light background-position-right background-no-repeat" style={{backgroundImage: "url('images/home-startup-footer-down-bg.jpg')"}}>
        <div className="footer-separate">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 h-65px lg-h-30px background-position-center-top background-no-repeat" style={{backgroundImage: "url('images/home-startup-footer-shadow.png')"}}>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top padding-four-tb lg-padding-seven-tb md-padding-50px-bottom md-padding-30px-top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3 col-sm-6 sm-margin-40px-bottom xs-margin-25px-bottom">
                <span className="alt-font font-weight-500 d-block text-extra-dark-gray text-medium margin-20px-bottom xs-margin-10px-bottom">Company</span>
                <ul>
                  <li><a href="about-us.html">About company</a></li>
                  <li><a href="our-services.html">Our services</a></li>
                  <li><a href="our-team.html">Job opportunities</a></li>
                  <li><a href="contact-us-classic.html">Contact us</a></li>
                </ul>
              </div>
              <div className="col-12 col-md-3 col-sm-6 sm-margin-40px-bottom xs-margin-25px-bottom">
                <span className="alt-font font-weight-500 d-block text-extra-dark-gray text-medium margin-20px-bottom xs-margin-10px-bottom">Customer</span>
                <ul>
                  <li><a href="faq.html">Client support</a></li>
                  <li><a href="pricing-packages.html">Pricing packages</a></li>
                  <li><a href="our-story.html">Company story</a></li>
                  <li><a href="latest-news.html">Latest news</a></li>
                </ul>
              </div>
              <div className="col-12 col-md-3 col-sm-6 xs-margin-25px-bottom">
                <span className="alt-font font-weight-500 d-block text-extra-dark-gray text-medium margin-20px-bottom xs-margin-10px-bottom">Resources</span>
                <ul>
                  <li><a href="faq.html">Theme guide</a></li>
                  <li><a href="faq.html">Support desk</a></li>
                  <li><a href="what-we-offers.html">What we offer</a></li>
                  <li><a href="our-story.html">Company history</a></li>
                </ul>
              </div>
              <div className="col-12 col-md-3 col-sm-6">
                <span className="alt-font font-weight-500 d-block text-extra-dark-gray text-medium margin-20px-bottom xs-margin-10px-bottom">Services</span>
                <ul>
                  <li><a href="our-services.html">Brand experience</a></li>
                  <li><a href="our-services.html">E-commerce website</a></li>
                  <li><a href="our-services.html">Content writing</a></li>
                  <li><a href="our-services.html">Marketing strategy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom padding-one-top padding-six-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-sm-4 text-center text-sm-left xs-margin-20px-bottom">
                <a href="index.html" className="footer-logo"><img src="images/logo-green-dark.png" data-at2x="images/logo-green-dark@2x.png" alt="" /></a>
              </div>
              <div className="col-12 col-sm-8 text-center text-sm-right last-paragraph-no-margin">
                <p>&copy; 2021 Litho is Proudly Powered by <a href="https://www.themezaa.com/" target="_blank" className="text-decoration-line-bottom text-extra-dark-gray font-weight-500">ThemeZaa</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
	);
}

export default Home;
