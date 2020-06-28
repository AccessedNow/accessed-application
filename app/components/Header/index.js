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



          <header data-section-type="header" data-section-id="header" className="header-content" data-stick="true" data-stickymobile="true">

            <div className="header-container layout-boxed style-3" data-style="3">

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
                          <a href="/account/login" title="Sign in">Sign in</a>
                        </li>

                        <li className="currency_icon flag-3" data-target="#language-popup" data-toggle="modal"><i className="currency-flag currency-flag-usd"></i></li>


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
                        <span className="number"><span className="n-item">0</span><span className="money">$0.00</span></span>
                      </a>

                    </div>
                    <div className="header-logo">
                      <a href="/" title="Electro 5.1" className="logo-site waiting lazyloaded">
                        <img className=" ls-is-cached lazyloaded"
                             data-srcset="//cdn.shopify.com/s/files/1/0344/9251/4436/files/logo_250x_0abc450a-76b5-4ae7-91ad-42e2178b9936_125x.png?v=1582873483 1x, //cdn.shopify.com/s/files/1/0344/9251/4436/files/logo_250x_0abc450a-76b5-4ae7-91ad-42e2178b9936_250x.png?v=1582873483 2x"
                             alt="Electro 5.1"
                             srcSet="//cdn.shopify.com/s/files/1/0344/9251/4436/files/logo_250x_0abc450a-76b5-4ae7-91ad-42e2178b9936_125x.png?v=1582873483 1x, //cdn.shopify.com/s/files/1/0344/9251/4436/files/logo_250x_0abc450a-76b5-4ae7-91ad-42e2178b9936_250x.png?v=1582873483 2x" />
                      </a>
                    </div>
                    <div className="searchbox d-none d-lg-block">

                      <form id="search" className="navbar-form search" action="/search" method="get">
                        <input id="bc-product-search" type="text" name="q" className="form-control bc-product-search" placeholder="Search" autoComplete="off" />
                        <button type="submit" className="search-icon"><
                          span><i className="demo-icon icon-electro-search-icon"></i></span>
                        </button>
                      </form>
                      <div id="result-ajax-search" className="result-ajax-search">
                        <ul className="search-results"></ul>
                      </div>
                    </div>

                    <div className="header-icons d-none d-lg-block">
                      <ul className="list-inline">
                        <li className="wishlist-target">
                          <a data-arn-action="show" className="show-wishlist icon-2 " href="javascript:;">

                            <span className="number"><span className="n-item">0</span></span>
                          </a>
                        </li>


                        <li className="top-cart-holder">
                          <div className="cart-target">
                            <a href="javascript:void(0)" className="basket cart-toggle" title="cart">
                              <i className="demo-icon icon-electro-cart-icon"></i>
                              <span className="number"><span className="n-item">0</span><span
                                className="money">$0.00</span></span>
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
