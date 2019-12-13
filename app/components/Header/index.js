import React, {Component} from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import injectReducer, { useInjectReducer } from 'utils/injectReducer';
import injectSaga, { useInjectSaga } from 'utils/injectSaga';

import Modal from 'react-bootstrap/Modal';
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

      this.state = {isLoggedIn: false};

  }

  componentDidMount() {}

  render() {

    const isLoggedIn = this.state.isLoggedIn;

    return (

        <header className="header-content" data-stick="true" data-stickymobile="true">

            <div className={isLoggedIn ? 'header-container layout-boxed style-5' : 'header-container layout-boxed style-8'} data-style="5">

                {isLoggedIn ? (
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
                                    <span className="number">
                                        <span className="n-item">0</span><span className="money" data-currency-usd="$0.00" data-currency="USD">$0.00</span>
                                    </span>
                                </a>

                            </div>

                            <div className="header-logo">
                                <a href="/" title="Accessed" className="logo-site waiting lazyloaded">
                                    <img className=" lazyloaded" data-srcset="//cdn.shopify.com/s/files/1/0083/9912/6625/files/logo_250x_0abc450a-76b5-4ae7-91ad-42e2178b9936_125x.png?v=1553139801 1x, //cdn.shopify.com/s/files/1/0083/9912/6625/files/logo_250x_0abc450a-76b5-4ae7-91ad-42e2178b9936_250x.png?v=1553139801 2x" alt="Accessed" srcSet={logo} />
                                </a>


                            </div>

                            <div className="searchbox d-none d-lg-block">


                                <form id="search" className="navbar-form search" action="/search" method="get">
                                    <input id="bc-product-search" type="text" name="q" className="form-control bc-product-search snize-input-style" placeholder="Search" autoComplete="off" />
                                    <button type="submit" className="search-icon">
                                        <span><i className="demo-icon icon-electro-search-icon"></i></span>
                                    </button>
                                </form>

                                <div id="result-ajax-search" className="result-ajax-search">
                                    <ul className="search-results"></ul>
                                </div>
                            </div>

                            <div className="header-icons d-none d-lg-block">


                                <ul className="list-inline">
                                    <li className="currency_icon flag-3" data-target="#language-popup"
                                        data-toggle="modal">
                                        <i className="currency-flag currency-flag-usd"></i>
                                    </li>
                                    <li className="customer-account">
                                        <a href="/account" title="My Account">
                                            <i className="demo-icon icon-electro-user-icon"></i>
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
                                    <li className="wishlist-target">
                                        <a href="/pages/wishlist-page" className="num-items-in-wishlist show-wishlist"
                                           title="Wishlist">

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
                                                        <div className="cart-item-empty"><p>Your cart is currently
                                                            empty</p></div>
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
                ) : (
                    <div className="header-main">
                        <div className="container">
                            <div className="table-row">


                                <div className="header-logo">
                                    <a href="/" title="Accessed" className="logo-site waiting lazyloaded">
                                        <img className=" lazyloaded" data-srcset="//cdn.shopify.com/s/files/1/0083/9912/6625/files/logo_250x_0abc450a-76b5-4ae7-91ad-42e2178b9936_125x.png?v=1553139801 1x, //cdn.shopify.com/s/files/1/0083/9912/6625/files/logo_250x_0abc450a-76b5-4ae7-91ad-42e2178b9936_250x.png?v=1553139801 2x" alt="Accessed" srcSet={logo} />
                                    </a>


                                </div>



                                <div className="header-icons d-none d-lg-block">


                                    <ul className="list-inline">
                                        <li className="currency_icon flag-3" data-target="#language-popup" data-toggle="modal">
                                            <a href="/account" title="My Account">
                                                <span>Join Now</span>
                                            </a>
                                        </li>
                                        <li className="customer-account">
                                            <a href="/account" title="My Account" className="btn btn-white">
                                                <span>Sign In</span>
                                            </a>
                                        </li>



                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                )}

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
                                                <a href="/pages/wishlist-page"
                                                   className="num-items-in-wishlist show-wishlist" title="Wishlist">

        <span className="wishlist-icon">

            <i className="demo-icon icon-electro-wishlist-icon"></i>


          <span className="number">0</span>
        </span>

                                                </a>
                                            </li>


                                            <li className="compare-target">
                                                <a href="/pages/compare-page"
                                                   className="num-items-in-compare show-compare" title="Compare">
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
                                                <span>All</span>
                                            </a>
                                        </div>

                                    </li>


                                    <li className="dropdown mega-menu">
                                        <div className="dropdown-inner">
                                            <a href="/jobs" className="dropdown-link">
                                                <span>Jobs</span>
                                            </a>
                                        </div>


                                    </li>


                                    <li className="dropdown">
                                        <div className="dropdown-inner">
                                            <a href="/company" className="dropdown-link">
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
                                    <span className="contactbar-info-close"><i className="demo-icon icon-cancel-2"></i></span>
                                    <p>632 SW Pine Street<br />Portland, Oregon</p><p>Mon-Sat, 11-7<br />Sun, 12-5</p>
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
                            <span><i className="demo-icon icon-electro-search-icon"></i></span>
                        </button>
                    </form>


                    <div className="result-ajax-search">
                        <ul className="search-results"></ul>
                    </div>
                </div>
            </div>
        </header>




    );
  }
}

export default Header;
