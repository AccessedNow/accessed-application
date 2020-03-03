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


                <div className="header-container layout-full style-2 header-fixed header-mobile-fixed">

                    <div className="header-main">
                        <div className="container">
                            <div className="table-row">

                                <div className="navbar navbar-responsive-menu d-lg-none">
                                    <div className="responsive-menu">
                                        Menu
                                        <span className="bar"></span>
                                        <span className="bar"></span>
                                        <span className="bar"></span>
                                    </div>
                                </div>

                                <div className="m-cart-icon cart-target lazyload waiting d-lg-none">
                                    <a href="/cart" className="mobile-basket" title="cart">
                                        <i className="demo-icon icon-electro-cart-icon"></i>
                                        <span className="number"><span className="n-item">0</span><span className="money" data-currency-usd="$0.00" data-currency="USD">$0.00</span></span>
                                    </a>
                                </div>

                                <div className="header-logo">
                                    <a href="/" title="Arena Electro" className="logo-site waiting lazyloaded">
                                        <img style={{ maxWidth: "125px"}} className=" lazyload" data-srcset="//cdn.shopify.com/s/files/1/0013/8815/0848/files/logo_125x.png?v=1542252628 1x, //cdn.shopify.com/s/files/1/0013/8815/0848/files/logo_250x.png?v=1542252628 2x" alt="Arena Electro"  srcSet="//cdn.shopify.com/s/files/1/0013/8815/0848/files/logo_125x.png?v=1542252628 1x, //cdn.shopify.com/s/files/1/0013/8815/0848/files/logo_250x.png?v=1542252628 2x" />
                                    </a>
                                </div>
                                <div className="searchbox d-none d-lg-block">
                                    <form id="search" className="navbar-form search" action="/search" method="get">
                                        <input id="bc-product-search" type="text" name="q" className="form-control" placeholder="Search" autoComplete="off" />
                                        <button type="submit" className="search-icon">
                                            <span className="waiting lazyloaded"><i className="demo-icon icon-electro-search-icon"></i></span>
                                        </button>
                                    </form>

                                    <div id="result-ajax-search">
                                        <ul className="search-results"></ul>
                                    </div>

                                </div>

                                <div className="header-icons d-none d-lg-block">
                                    <ul className="list-inline">
                                        <li className="compare-target">
                                            <a href="/pages/compare-page" className="num-items-in-compare show-compare waiting lazyloaded" title="Compare">
                                                <span className="compare-icon">
                                                    <i className="demo-icon icon-electro-compare-icon"></i>
                                                    <span id="compare-number" className="number">0</span>
                                                </span>
                                            </a>
                                        </li>

                                        <li className="wishlist-target">
                                            <a href="/pages/wishlist-page" className="num-items-in-wishlist show-wishlist waiting lazyloaded" title="Wishlist">
                                                <span className="wishlist-icon">
                                                    <i className="demo-icon icon-electro-wishlist-icon"></i>
                                                    <span className="number">0</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="top-cart-holder">
                                            <div className="cart-target">
                                                <a href="javascript:void(0)" className="basket cart-toggle waiting lazyloaded" title="cart">
                                                    <i className="demo-icon icon-electro-cart-icon"></i>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>



            </header>




        );
    }
}

export default Header;
