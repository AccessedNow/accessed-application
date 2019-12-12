import React, {Component} from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import injectReducer, { useInjectReducer } from 'utils/injectReducer';
import injectSaga, { useInjectSaga } from 'utils/injectSaga';

import Modal from 'react-bootstrap/Modal';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';


import logo from '../../assets/images/accessed-logo_125.png';
import mobile_logo from '../../assets/images/accessed-logo-320.png';

import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {}

  render() {
    return (

        <div className="header-department">
            <div id="shopify-section-announcement-bar" className="shopify-section">

                <div className="top-bar-textbox layout-full d-none d-lg-block">
                    <div className="textbox-container">
                        <div className="container-fluid">

                            <ul className="top-bar-list">

                            </ul>

                        </div>
                    </div>
                </div>

            </div>
            <div id="shopify-section-header" className="shopify-section">
                <header className="header-content" data-stick="true" data-stickymobile="true">

                    <div className="header-container layout-boxed style-3" data-style="3">


                        <ul className="main-nav fix-vertical-left-column hide">


                            <li className="">
                                <a href="/collections">


                                    <span>Value of the Day</span>


                                </a>
                            </li>


                            <li className="">
                                <a href="/collections/all-in-one">


                                    <span>Top 100 Offers</span>


                                </a>
                            </li>


                            <li className="">
                                <a href="/collections/accessories">


                                    <span>New Arrivals</span>


                                </a>
                            </li>


                            <li className="dropdown">
                                <div className="dropdown-inner">
                                    <a href="/collections/tv-audio" className="dropdown-link">


                                        <span>TV &amp; Audio</span>


                                    </a>
                                    <span className="expand"></span>
                                </div>

                                <ul className="dropdown-menu">


                                    <li><a tabIndex="-1" href="/collections/gadgets"><span>Gadgets</span></a></li>


                                    <li><a tabIndex="-1" href="/collections/phones-pdas"><span>Phones &amp; PDAs</span></a>
                                    </li>


                                    <li><a tabIndex="-1" href="/collections/watches"><span>Watches</span></a></li>


                                </ul>
                            </li>


                            <li className="dropdown">
                                <div className="dropdown-inner">
                                    <a href="/collections/gadgets" className="dropdown-link">


                                        <span>Gadgets</span>


                                    </a>
                                    <span className="expand"></span>
                                </div>

                                <ul className="dropdown-menu">


                                    <li><a tabIndex="-1" href="/collections/watches"><span>Watches</span></a></li>


                                    <li><a tabIndex="-1" href="/collections/eyewear"><span>Eyewear</span></a></li>


                                </ul>
                            </li>


                            <li className="dropdown">
                                <div className="dropdown-inner">
                                    <a href="/collections/all-in-one" className="dropdown-link">


                                        <span>All in One</span>


                                    </a>
                                    <span className="expand"></span>
                                </div>

                                <ul className="dropdown-menu">


                                    <li><a tabIndex="-1" href="/collections/music"><span>Music</span></a></li>


                                    <li><a tabIndex="-1" href="/collections/photography"><span>Photography</span></a>
                                    </li>


                                </ul>
                            </li>


                            <li className="dropdown">
                                <div className="dropdown-inner">
                                    <a href="/collections/accessories" className="dropdown-link">


                                        <span>Accessories</span>


                                    </a>
                                    <span className="expand"></span>
                                </div>

                                <ul className="dropdown-menu">


                                    <li><a tabIndex="-1" href="/collections/cameras"><span>Cameras</span></a></li>


                                    <li><a tabIndex="-1" href="/collections/software"><span>Software</span></a></li>


                                    <li><a tabIndex="-1" href="/collections/headphone"><span>Headphone</span></a></li>


                                </ul>
                            </li>


                            <li className="dropdown">
                                <div className="dropdown-inner">
                                    <a href="/collections/gaming" className="dropdown-link">


                                        <span>Gaming</span>


                                    </a>
                                    <span className="expand"></span>
                                </div>

                                <ul className="dropdown-menu">


                                    <li><a tabIndex="-1" href="/collections/mouse"><span>Mouse</span></a></li>


                                    <li><a tabIndex="-1" href="/collections/keyboard"><span>Keyboard</span></a></li>


                                    <li><a tabIndex="-1" href="/collections/tv-audio"><span> TV &amp; Audio </span></a>
                                    </li>


                                </ul>
                            </li>


                            <li className="dropdown">
                                <div className="dropdown-inner">
                                    <a href="/collections/laptops-computer" className="dropdown-link">


                                        <span>Laptops &amp; Computer</span>


                                    </a>
                                    <span className="expand"></span>
                                </div>

                                <ul className="dropdown-menu">


                                    <li><a tabIndex="-1" href="/collections/keyboard"><span>Keyboard</span></a></li>


                                    <li><a tabIndex="-1" href="/collections/mouse"><span>Mouse</span></a></li>


                                    <li><a tabIndex="-1" href="/collections/pc-computers"><span>PC Computers</span></a>
                                    </li>


                                </ul>
                            </li>


                            <li className="dropdown">
                                <div className="dropdown-inner">
                                    <a href="/collections/mac-computers" className="dropdown-link">


                                        <span> Mac Computers </span>


                                    </a>
                                    <span className="expand"></span>
                                </div>

                                <ul className="dropdown-menu">


                                    <li><a tabIndex="-1" href="/collections/mouse"><span>Mouse</span></a></li>


                                    <li><a tabIndex="-1" href="/collections/ultrabooks"><span>Monitors</span></a></li>


                                    <li><a tabIndex="-1" href="/collections/keyboard"><span>Keyboard</span></a></li>


                                </ul>
                            </li>


                            <li className="dropdown">
                                <div className="dropdown-inner">
                                    <a href="/collections/ultrabooks" className="dropdown-link">


                                        <span>Ultrabooks</span>


                                    </a>
                                    <span className="expand"></span>
                                </div>

                                <ul className="dropdown-menu">


                                    <li><a tabIndex="-1" href="/collections/cameras"><span>Cameras</span></a></li>


                                    <li><a tabIndex="-1" href="/collections/watches"><span>Watches</span></a></li>


                                    <li><a tabIndex="-1" href="/collections/mouse"><span>Mouse</span></a></li>


                                </ul>
                            </li>


                        </ul>


                        <div className="top-bar border-top-false d-none d-lg-block">
                            <div className="container">
                                <div className="table-row">


                                    <div className="header-contact-box">
                                        <ul className="list-inline">


                                            <li className="phone">

                                                <i className="demo-icon icon-phone"></i>


                                                <span>(+800) 123 456 7890</span>
                                            </li>


                                            <li className="email">

                                                <i className="demo-icon icon-mail"></i>


                                                <span>sample@email.com</span>
                                            </li>


                                        </ul>
                                    </div>


                                    <div className="top-bar-right">
                                        <ul className="list-inline">


                                            <li className="store-location">
                                                <a href="/pages/store-location">

                                                    <i className="demo-icon icon-electro-marker-icon"></i>


                                                    <span>Store Location</span>
                                                </a>
                                            </li>


                                            <li className="order">
                                                <a href="/pages/track-your-order">

                                                    <i className="demo-icon icon-electro-track-order-icon"></i>


                                                    <span>Track Your Order</span>
                                                </a>
                                            </li>


                                            <li className="customer-account">


                                                <a href="/account/register" title="Register">

                                                    <i className="demo-icon icon-electro-user-icon"></i>


                                                    Register
                                                </a>
                                                <span className="customer-or">or</span>
                                                <a href="/account/login" title=">Sign in">Sign in</a>


                                            </li>


                                            <li className="currency_icon flag-3" data-target="#language-popup"
                                                data-toggle="modal">
                                                <i className="currency-flag currency-flag-usd"></i>
                                            </li>


                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="header-main">
                            <div className="container">
                                <div className="table-row">

                                    <div className="navbar navbar-responsive-menu d-lg-none">
                                        <div className="responsive-menu">
                                            <span className="bar"></span>
                                            <span className="bar"></span>
                                            <span className="bar"></span>
                                        </div>
                                    </div>


                                    <div className="m-cart-icon cart-target d-lg-none">

                                        <a href="/cart" className="mobile-basket" title="cart">

                                            <i className="demo-icon icon-electro-cart-icon"></i>


                                            <span className="number"><span className="n-item">0</span><span
                                                className="money" data-currency-usd="$0.00"
                                                data-currency="USD">$0.00</span></span>
                                        </a>

                                    </div>

                                    <div className="header-logo">


                                        <a href="/" title="Accessed"
                                           className="logo-site waiting lazyloaded">
                                            <img className=" lazyloaded" data-srcset="//cdn.shopify.com/s/files/1/0083/9912/6625/files/logo_250x_0abc450a-76b5-4ae7-91ad-42e2178b9936_125x.png?v=1553139801 1x, //cdn.shopify.com/s/files/1/0083/9912/6625/files/logo_250x_0abc450a-76b5-4ae7-91ad-42e2178b9936_250x.png?v=1553139801 2x"
                                                 alt="Electro Shopify Theme" srcSet={logo} />
                                        </a>


                                    </div>

                                    <div className="searchbox d-none d-lg-block">


                                        <form id="search" className="navbar-form search" action="/search" method="get">
                                                <input id="bc-product-search" type="text" name="q" className="form-control bc-product-search snize-input-style" placeholder="Search" autoComplete="off" />
                                                    <button type="submit" className="search-icon">
        <span>


            <i className="demo-icon icon-electro-search-icon"></i>



        </span>
                                                    </button>
                                        </form>


                                        <div id="result-ajax-search" className="result-ajax-search">
                                            <ul className="search-results"></ul>
                                        </div>


                                    </div>

                                    <div className="header-icons d-none d-lg-block">


                                        <ul className="list-inline">


                                            <li className="compare-target">
                                                <a href="/pages/compare-page"
                                                   className="num-items-in-compare show-compare" title="Compare">
          <span className="compare-icon">

              <i className="demo-icon icon-electro-compare-icon"></i>


            <span id="compare-number" className="number" data-count="0">0</span>
          </span>
                                                </a>
                                            </li>


                                            <li className="wishlist-target">
                                                <a href="/pages/wishlist-page"
                                                   className="num-items-in-wishlist show-wishlist" title="Wishlist">

          <span className="wishlist-icon">

              <i className="demo-icon icon-electro-wishlist-icon"></i>


            <span className="number">0</span>
          </span>

                                                </a>
                                            </li>


                                            <li className="top-cart-holder hover-dropdown">
                                                <div className="cart-target">


                                                    <a href="javascript:void(0)" className="basket dropdown-toggle"
                                                       title="cart">

                                                        <i className="demo-icon icon-electro-cart-icon"></i>


                                                        <span className="number"><span className="n-item">0</span><span
                                                            className="money" data-currency-usd="$0.00"
                                                            data-currency="USD">$0.00</span></span>
                                                    </a>

                                                    <div className="cart-dd">
                                                        <div id="cart-info">
                                                            <div id="cart-content" className="cart-content">
                                                                <div className="cart-item-empty"><p>Your cart is
                                                                    currently empty</p></div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </li>


                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="header-navigation d-none d-lg-block border-top-false">
                            <div className="container">

                                <div className="horizontal-menu dropdown-fix d-none d-lg-block">
                                    <div className="sidemenu-holder">

                                        <nav className="navbar navbar-expand-lg">
                                            <div className="collapse navbar-collapse">
                                                <ul className="menu-list">


                                                    <li className="dropdown active">
                                                        <div className="dropdown-inner">
                                                            <a href="/" className="dropdown-link">
                                                                <span>All</span>
                                                            </a>
                                                        </div>
                                                    </li>


                                                    <li className="dropdown mega-menu">
                                                        <a href="/collections/all" className="dropdown-link">
                                                            <span>Jobs</span>
                                                        </a>
                                                    </li>


                                                    <li className="dropdown">
                                                        <div className="dropdown-inner">
                                                            <a href="#" className="dropdown-link">
                                                                <span>Company</span>
                                                            </a>
                                                        </div>
                                                    </li>


                                                    <li className="dropdown">
                                                        <div className="dropdown-inner">
                                                            <a href="#" className="dropdown-link">
                                                                <span>Salary</span>
                                                            </a>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </nav>

                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="mobile-version d-lg-none">
                            <div className="menu-mobile navbar">
                                <div className="mm-wrapper">
                                    <div className="nav-collapse is-mobile-nav">
                                        <ul className="main-nav">
                                            <li className="mobile-layout-bar">
                                                <ul className="m-block-icons list-inline">
                                                    <li className="m-customer-account">
                                                        <a href="/account" title="My Account">
                                                            <i className="demo-icon icon-electro-user-icon"></i>
                                                        </a>
                                                    </li>


                                                    <li className="wishlist-target">
                                                        <a href="/pages/wishlist-page" className="num-items-in-wishlist show-wishlist" title="Wishlist">
                                                            <span className="wishlist-icon">
                                                                <i className="demo-icon icon-electro-wishlist-icon"></i>
                                                                <span className="number">0</span>
                                                            </span>
                                                        </a>
                                                    </li>


                                                    <li className="compare-target">
                                                        <a href="/pages/compare-page" className="num-items-in-compare show-compare" title="Compare">
                                                        <span className="compare-icon">
                                                            <i className="demo-icon icon-electro-compare-icon"></i>
                                                            <span id="compare-number" className="number" data-count="0">0</span>
                                                        </span>
                                                        </a>
                                                    </li>

                                                    <li className="currency_icon currency_icon_mobile flag-3"
                                                        data-target="#language-popup" data-toggle="modal">
                                                        <i className="currency-flag currency-flag-usd"></i>
                                                    </li>
                                                </ul>
                                            </li>


                                            <li className="dropdown active">
                                                <div className="dropdown-inner">
                                                    <a href="/" className="dropdown-link">
                                                        <span>Home</span>
                                                    </a>
                                                </div>
                                            </li>


                                            <li className="dropdown mega-menu">
                                                <div className="dropdown-inner">
                                                    <a href="/collections/all" className="dropdown-link">
                                                        <span>Jobs</span>
                                                    </a>
                                                </div>

                                            </li>


                                            <li className="dropdown">
                                                <div className="dropdown-inner">
                                                    <a href="#" className="dropdown-link">
                                                        <span>Company</span>
                                                    </a>
                                                </div>

                                            </li>


                                            <li className="dropdown">
                                                <div className="dropdown-inner">
                                                    <a href="#" className="dropdown-link">
                                                        <span>Salary</span>
                                                    </a>
                                                </div>
                                            </li>

                                        </ul>


                                        <ul className="mobile-contact-bar list-inline">


                                            <li className="contactbar-item">
                                                <a className="contactbar-item-link" href="tel:(+800) 123 456 7890">
                                                    <i className="demo-icon icon-phone"></i>
                                                    <span>Call</span>
                                                </a>
                                            </li>


                                            <li className="contactbar-item">
                                                <a className="contactbar-item-link" href="mailto:sample@email.com">
                                                    <i className="demo-icon icon-mail-1"></i>
                                                    <span>Contact</span>
                                                </a>
                                            </li>


                                            <li className="contactbar-item ci-store-info">
                                                <a className="contactbar-item-link" href="javascript:;">
                                                    <i className="demo-icon icon-globe-1"></i>
                                                    <span>Store info</span>
                                                </a>
                                            </li>


                                            <li className="contactbar-item">
                                                <a className="contactbar-item-link" href="/pages/contact-us">
                                                    <i className="demo-icon icon-electro-marker-icon"></i>
                                                    <span>Directions</span>
                                                </a>
                                            </li>


                                        </ul>


                                        <div className="contactbar-info">
                                            <span className="contactbar-info-close"><i
                                                className="demo-icon icon-cancel-2"></i></span>
                                            <p>632 SW Pine Street<br />Portland, Oregon</p>
                                            <p>Mon-Sat, 11-7<br />Sun, 12-5</p>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    <div className="searchbox searchbox-mobile">
                        <div className="container">


                            <form id="search" className="navbar-form search" action="/search" method="get">
                                    <input id="bc-product-mobile-search" type="text" name="q" className="form-control bc-product-search snize-input-style" placeholder="Search" autoComplete="off" />
                                        <button type="submit" className="search-icon">
          <span>


              <i className="demo-icon icon-electro-search-icon"></i>



          </span>
                                        </button>
                            </form>


                            <div className="result-ajax-search">
                                <ul className="search-results"></ul>
                            </div>


                        </div>
                    </div>


                </header>

            </div>


            <div id="shopify-section-mobile-department" className="shopify-section">
                <div className="mobile-department d-lg-none">
                    <div className="container">


                        <ul className="mobile-department-list">


                            <li>
                                <a href="/collections/laptops-computer">







  <span className="image-lazysize" >

      <noscript>
      <img className="img-lazy " src="//cdn.shopify.com/s/files/1/0083/9912/6625/files/computer_40x.png?v=1556786807"
           alt=""/>
    </noscript>

    <img className="lazyload  img-lazy blur-up"
         data-src="//cdn.shopify.com/s/files/1/0083/9912/6625/files/computer_{width}x.png?v=1556786807"
         data-widths="[180, 320, 540, 720, 1080, 1366, 1920, 2048] " data-aspectratio="1.0" data-sizes="auto"
         data-parent-fit="cover" alt="" />
  </span>


                                    <span className="text">Computers</span>
                                </a>
                            </li>


                            <li>
                                <a href="/collections/cameras">







  <span className="image-lazysize">

      <noscript>
      <img className="img-lazy " src="//cdn.shopify.com/s/files/1/0083/9912/6625/files/camera_40x.png?v=1556786801"
           alt=""/>
    </noscript>

    <img className="lazyload  img-lazy blur-up"
         data-src="//cdn.shopify.com/s/files/1/0083/9912/6625/files/camera_{width}x.png?v=1556786801"
         data-widths="[180, 320, 540, 720, 1080, 1366, 1920, 2048] " data-aspectratio="1.0" data-sizes="auto"
         data-parent-fit="cover" alt="" />
  </span>


                                    <span className="text">Cameras</span>
                                </a>
                            </li>


                            <li>
                                <a href="/collections/accessories">







  <span className="image-lazysize">

      <noscript>
      <img className="img-lazy " src="//cdn.shopify.com/s/files/1/0083/9912/6625/files/mobile_40x.png?v=1556786853" alt=""/>
    </noscript>

    <img className="lazyload  img-lazy blur-up"
         data-src="//cdn.shopify.com/s/files/1/0083/9912/6625/files/mobile_{width}x.png?v=1556786853"
         data-widths="[180, 320, 540, 720, 1080, 1366, 1920, 2048] " data-aspectratio="1.0" data-sizes="auto"
         data-parent-fit="cover" alt="" />
  </span>


                                    <span className="text">Mobiles</span>
                                </a>
                            </li>


                            <li>
                                <a href="/collections/tv-audio">







  <span className="image-lazysize">

      <noscript>
      <img className="img-lazy " src="//cdn.shopify.com/s/files/1/0083/9912/6625/files/tv_40x.png?v=1556786871" alt=""/>
    </noscript>

    <img className="lazyload  img-lazy blur-up"
         data-src="//cdn.shopify.com/s/files/1/0083/9912/6625/files/tv_{width}x.png?v=1556786871"
         data-widths="[180, 320, 540, 720, 1080, 1366, 1920, 2048] " data-aspectratio="1.0" data-sizes="auto"
         data-parent-fit="cover" alt="" />
  </span>


                                    <span className="text">TV &amp; Audio</span>
                                </a>
                            </li>


                            <li>
                                <a href="/collections/gaming">







  <span className="image-lazysize">

      <noscript>
      <img className="img-lazy " src="//cdn.shopify.com/s/files/1/0083/9912/6625/files/game_40x.png?v=1556786901"
           alt=""/>
    </noscript>

    <img className="lazyload  img-lazy blur-up"
         data-src="//cdn.shopify.com/s/files/1/0083/9912/6625/files/game_{width}x.png?v=1556786901"
         data-widths="[180, 320, 540, 720, 1080, 1366, 1920, 2048] " data-aspectratio="1.0" data-sizes="auto"
         data-parent-fit="cover" alt="" />
  </span>


                                    <span className="text">Gaming</span>
                                </a>
                            </li>


                        </ul>

                    </div>
                </div>

            </div>


        </div>




    );
  }
}

export default Header;
