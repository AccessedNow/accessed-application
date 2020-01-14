import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

import logo from '../../assets/images/accessed-logo_125.png';
import mobile_logo from '../../assets/images/accessed-logo-320.png';



function Footer() {
  return (
    <footer id="footer-content">
      <div className="footer-container layout-boxed">
        <div className="footer-widget">
          <div className="footer-inner container">
            <div className="table-row">
              <div className="row">
                <div className="footer-block  col-lg-6 col-md-6 col-sm-12 col-12">
                  <h6>Put your creative to visual workspace</h6>
                  <p className="desc">fieldrnagic is a modem visual workspace designed io maximize productivity— Now,<br /> you can focus on the things that really matter</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <ul class="list-inline">
                    <li class="customer-account"><a href="/account" title="Sign Up Free" class="btn btn-white"><span>SIGN UP FREE</span></a></li>
                    <li class="customer-account"><a href="/watch/video" title="Watch video" class="btn btn-white"><span>Watch Video</span></a></li>
                  </ul>                  
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-3 col-12">
                  <div className="footer-block footer-menu">
                    <h6>Browse Top Category<span className="icon"></span></h6>
                    <ul className="f-list">
                      <li><a href="/collections/accessories"><span>Account </span></a></li>
                      <li><a href="/collections/gaming"><span>Gaming </span></a></li>
                      <li><a href="/collections/mac-computers"><span>Mac Computers </span></a></li>
                      <li><a href="/collections/pc-computers"><span>PC Computers </span></a></li>
                      <li><a href="/collections/ultrabooks"><span>Ultrabooks</span></a></li>
                    </ul>
                    <div class="widget-social">
                      <ul class="widget-social-icons list-inline">
                        <li>
                          <a target="_blank" rel="noopener" href="https://www.facebook.com/shopify/" title="Facebook">
                          <i class="demo-icon icon-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a target="_blank" rel="noopener" href="https://www.twitter.com/shopify/" title="Twitter">
                          <i class="demo-icon icon-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a target="_blank" rel="noopener" href="https://www.instagram.com/shopify/" title="Instagram">
                          <i class="demo-icon icon-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a target="_blank" rel="noopener" href="https://www.pinterest.com/shopify/" title="Pinterest">
                          <i class="demo-icon icon-pinterest-circled"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="footer-siteControl">
                      <div className="mt-2 d-flex">
                        <span>Privacy Policy</span>
                        <span>Contact Us</span>
                      </div>
                      <div className="mt-2 d-flex">
                        <span>Terms of Service</span>
                        <span>Sitemap</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-3 col-12">
                  <div className="footer-block footer-menu">
                    <ul className="f-list">
                      <li><a href="/pages/about-us"><span> About Us </span></a></li>
                      <li><a href="/pages/contact-us"><span> Contact Us </span></a></li>
                      <li><a href="/collections"><span> All Collections </span></a></li>
                      <li><a href="/pages/terms-conditions"><span> Privacy policy </span></a></li>
                      <li><a href="/pages/terms-conditions"><span>Terms &amp; Conditions </span></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-3 col-12">
                  <div className="footer-block footer-menu">
                    <h6>Top Company<span className="icon"></span></h6>
                    <ul className="f-list">
                      <li><a href="/account"><span> My Account </span></a></li>
                      <li><a href="/apps/wishlist"><span>Wishlist</span></a></li>
                      <li><a href="/cart"><span> Shopping Cart </span></a></li>
                      <li><a
                        href="/pages/terms-conditions"><span> Terms &amp; Conditions </span></a>
                      </li>
                      <li><a href="/apps/help-center"><span> FAQs </span></a></li>
                      <li><a href="/pages/about-us"><span> About Us </span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bot">
          <div className="container">
            <div className="table-row">
              <div className="copyright">
                <p>© 2019 Accessed. All Rights Reserved</p>
              </div>
              <div className="payment-icons">
                <ul className="list-inline">
                  <li>English</li>
                  <li>United State</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="checkLayout">
        <span className="d-block d-sm-none"></span>
        <span className="d-none d-sm-block d-md-none"></span>
        <span className="d-none d-md-block d-lg-none"></span>
        <span className="d-none d-lg-block d-xl-none"></span>
        <span className="d-none d-xl-block"></span>
      </div>
    </footer>
  );
}

export default Footer;
