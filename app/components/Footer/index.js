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

              <div id="widget-newsletter" className="fix-true">
                  <div className="widget-newsletter">
                      <div className="container">

                          <div className="newsletter-container">

                              <div className="newsletter-title"><i
                                  className="demo-ion icon-paper-plane-empty"></i><span>Sign up to Newsletter</span>
                              </div>


                              <form action="https://gmail.us20.list-manage.com/subscribe/post-json?u=92a297e6af9f562d7dc528124&amp;id=98e4b77137&amp;c=?" method="post" id="mc-embedded-subscribe-form" className="form-inline form-subscribe" name="mc-embedded-subscribe-form" target="_blank" rel="noopener">
                                  <input className="form-control" type="email" required=""
                                         placeholder="Enter your email address" name="EMAIL" id="email-input" />
                                      <button id="email-submit" type="submit" title="Subscibe"
                                              className="btn-custom">Submit
                                      </button>
                              </form>
                          </div>

                      </div>
                  </div>
              </div>


              <div className="footer-widget">
                  <div className="footer-inner container">

                      <div className="table-row">
                          <div className="row">


                              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                  <div className="footer-block footer-logo">


                                      <div className="logo-footer">


                                          <a href="/" title="Accessed"
                                             className="logo-site waiting lazyloaded">
                                              <img className=" lazyloaded"
                                                   data-srcset="//cdn.shopify.com/s/files/1/0083/9912/6625/files/logo_250x_0abc450a-76b5-4ae7-91ad-42e2178b9936_150x.png?v=1553139801 1x, //cdn.shopify.com/s/files/1/0083/9912/6625/files/logo_250x_0abc450a-76b5-4ae7-91ad-42e2178b9936_300x.png?v=1553139801 2x"
                                                   alt="Accessed" srcSet={logo} />
                                          </a>
                                      </div>


                                      <div className="support-box-1">

                                          <i className="demo-icon icon-electro-support-icon"></i>


                                          <div className="text">
                                              <span>Got questions? Call us 24/7!</span>
                                              <span>(800) 8001-8588, (0600) 874 548</span>
                                          </div>
                                      </div>


                                      <div className="support-box-2">

                                          <div className="text">
                                              <span>Contact info</span>
                                              <span>17 Princess Road, London, Greater London NW1 8JR, UK</span>
                                          </div>
                                      </div>


                                      <div className="widget-social">
                                          <ul className="widget-social-icons list-inline">


                                              <li>
                                                  <a target="_blank" rel="noopener"
                                                     href="https://www.facebook.com/shopify/" title="Facebook">

                                                      <i className="demo-icon icon-facebook"></i>

                                                  </a>
                                              </li>


                                              <li>
                                                  <a target="_blank" rel="noopener"
                                                     href="https://www.twitter.com/shopify/" title="Twitter">

                                                      <i className="demo-icon icon-twitter-bird"></i>

                                                  </a>
                                              </li>


                                              <li>
                                                  <a target="_blank" rel="noopener"
                                                     href="https://www.instagram.com/shopify/" title="Instagram">

                                                      <i className="demo-icon icon-instagram-1"></i>

                                                  </a>
                                              </li>


                                              <li>
                                                  <a target="_blank" rel="noopener"
                                                     href="https://www.pinterest.com/shopify/" title="Pinterest">

                                                      <i className="demo-icon icon-pinterest-circled"></i>

                                                  </a>
                                              </li>


                                              <li>
                                                  <a target="_blank" rel="noopener" href="" title="RSS">

                                                      <i className="demo-icon icon-rss-1"></i>

                                                  </a>
                                              </li>


                                              <li>
                                                  <a target="_blank" rel="noopener" href="" title="Flickr">

                                                      <i className="demo-icon icon-flickr"></i>

                                                  </a>
                                              </li>


                                              <li>
                                                  <a target="_blank" rel="noopener" href="" title="Dribbble">

                                                      <i className="demo-icon icon-dribbble-1"></i>

                                                  </a>
                                              </li>


                                              <li>
                                                  <a target="_blank" rel="noopener" href="" title="Linkedin">

                                                      <i className="demo-icon icon-linkedin"></i>

                                                  </a>
                                              </li>


                                          </ul>
                                      </div>


                                  </div>
                              </div>


                              <div className="col-lg-2 col-md-3 col-sm-3 col-12">
                                  <div className="footer-block footer-menu">


                                      <h6>Find In Fast<span className="icon"></span></h6>

                                      <ul className="f-list">

                                          <li><a href="/collections/accessories"><span>Accessories </span></a></li>

                                          <li><a href="/collections/gaming"><span>Gaming </span></a></li>

                                          <li><a
                                              href="/collections/laptops-computer"><span>Laptops &amp; Computer </span></a>
                                          </li>

                                          <li><a href="/collections/mac-computers"><span>Mac Computers </span></a></li>

                                          <li><a href="/collections/pc-computers"><span>PC Computers </span></a></li>

                                          <li><a href="/collections/ultrabooks"><span>Ultrabooks</span></a></li>

                                      </ul>

                                  </div>
                              </div>


                              <div className="col-lg-2 col-md-3 col-sm-3 col-12">
                                  <div className="footer-block footer-menu">


                                      <h6>Information<span className="icon"></span></h6>

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


                              <div className="col-lg-2 col-md-3 col-sm-3 col-12">
                                  <div className="footer-block footer-menu">


                                      <h6 className="hide-title">Customer Care<span className="icon"></span></h6>

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


                              <div className="col-lg-2 col-md-3 col-sm-3 col-12">
                                  <div className="footer-block footer-menu">


                                      <h6>In the Spotlight<span className="icon"></span></h6>

                                      <ul className="f-list">

                                          <li><a href="/collections/cameras"><span>Electronics</span></a></li>

                                          <li><a href="/collections/watches"><span>Toys</span></a></li>

                                          <li><a href="/collections/eyewear"><span>Video Games</span></a></li>

                                          <li><a href="/collections/headphone"><span>Home Products</span></a></li>

                                          <li><a href="/collections/keyboard"><span>Clothing</span></a></li>

                                          <li><a
                                              href="/collections/mac-computers"><span>Sports &amp; Outdoors</span></a>
                                          </li>

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
                              <p>© 2019 Accessed</p>
                          </div>


                          <div className="payment-icons">

                              <ul className="list-inline">


                                  <li className="waiting lazyloaded">
                                      <img className=" lazyloaded"
                                           data-srcset="//cdn.shopify.com/s/files/1/0083/9912/6625/files/patment-icon_325x.png?v=1553499338 1x, //cdn.shopify.com/s/files/1/0083/9912/6625/files/patment-icon_650x.png?v=1553499338 2x"
                                           alt="Payment" srcSet="//cdn.shopify.com/s/files/1/0083/9912/6625/files/patment-icon_325x.png?v=1553499338 1x, //cdn.shopify.com/s/files/1/0083/9912/6625/files/patment-icon_650x.png?v=1553499338 2x" />
                                  </li>


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
