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
                  <p className="desc mt-3">fieldrnagic is a modem visual workspace designed io maximize productivity— Now,<br /> you can focus on the things that really matter</p>
                </div>
                <div className="footer-block col-lg-6 col-md-6 col-sm-12 col-12">
                  <a href="/account" title="Sign Up Free" className="ml-3 btn btn-blue">SIGN UP FREE</a>
                  <a href="/account" title="Watch video" className="ml-3 btn btn-white">Watch Video</a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-3 col-12">
                  <div className="footer-block footer-menu">
                    <h6>Browse Top Category<span className="icon"></span></h6>
                    <ul className="f-list">
                      <li><a href="/collections/accessories"><span>Accounting/Finance (269) </span></a></li>
                      <li><a href="/collections/gaming"><span>Bank/ Non-Bank Fin. Institufion (37) </span></a></li>
                      <li><a href="/collections/mac-computers"><span>Commercial/Supply Chain (128) </span></a></li>
                      <li><a href="/collections/pc-computers"><span>Education/Training (273) </span></a></li>
                      <li><a href="/collections/ultrabooks"><span>Engineer/Architects (297)</span></a></li>
                      <li><a href="/collections/ultrabooks"><span>Gamnents/Textile (427)</span></a></li>
                      <li><a href="/collections/ultrabooks"><span>HR/Org. Development (121)</span></a></li>
                      <li><a href="/collections/ultrabooks"><span>Gen Mgt/Admin (184)</span></a></li>
                      <li><a href="/collections/ultrabooks"><span>Design/Creative (84)</span></a></li>
                      <li><a href="/collections/ultrabooks"><span>Production/Operation (103)</span></a></li>
                      <li><a href="/collections/ultrabooks"><span>Hospitality/ Travel/ Tourism (88)</span></a></li>
                      <li><a href="/collections/ultrabooks"><span>Beauty Care/ Health &amp; Fitness (8)</span></a></li>
                      <li><a href="/collections/ultrabooks"><span>Electrician/ Construction/ Repair (34)</span></a></li>
                    </ul>
                    <div className="widget-social">
                      <ul className="widget-social-icons list-inline">
                        <li>
                          <a target="_blank" rel="noopener" href="https://www.facebook.com/shopify/" title="Facebook">
                          <i className="demo-icon icon-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a target="_blank" rel="noopener" href="https://www.twitter.com/shopify/" title="Twitter">
                          <i className="demo-icon icon-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a target="_blank" rel="noopener" href="https://www.instagram.com/shopify/" title="Instagram">
                          <i className="demo-icon icon-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a target="_blank" rel="noopener" href="https://www.pinterest.com/shopify/" title="Pinterest">
                          <i className="demo-icon icon-pinterest-circled"></i>
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
                      <li><a href="/pages/about-us"><span>H &amp; Telecommunication (365) </span></a></li>
                      <li><a href="/pages/contact-us"><span>Marketing/Sales (605)</span></a></li>
                      <li><a href="/collections"><span> Customer Support/Call Centre (78) </span></a></li>
                      <li><a href="/pages/terms-conditions"><span> Media/Ad./Event Mgt. (41) </span></a></li>
                      <li><a href="/pages/terms-conditions"><span>Medical/Pharma (155) </span></a></li>
                      <li><a href="/pages/terms-conditions"><span>Agro (Plant/Animal/Fisheries) (42) </span></a></li>
                      <li><a href="/pages/terms-conditions"><span>NGO/Development (301) </span></a></li>
                      <li><a href="/pages/terms-conditions"><span>Research/Consultancy (16) </span></a></li>
                      <li><a href="/pages/terms-conditions"><span>Secretary/Receptionist(76) </span></a></li>
                      <li><a href="/pages/terms-conditions"><span>Data Entry/Operator/BP0 (51) </span></a></li>
                      <li><a href="/pages/terms-conditions"><span>Driving/Motor Technician (33) </span></a></li>
                      <li><a href="/pages/terms-conditions"><span>Security/Support Service (70) </span></a></li>
                      <li><a href="/pages/terms-conditions"><span>Law/Legal (17) </span></a></li>
                      <li><a href="/pages/terms-conditions"><span>Others (29)</span></a></li>                    
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-3 col-12">
                  <div className="footer-block footer-menu">
                    <h6>Top Company<span className="icon"></span></h6>
                    <ul className="f-list">
                      <li><a href="/account"><span> Xero </span></a></li>
                      <li><a href="/apps/wishlist"><span>Reckon</span></a></li>
                      <li><a href="/cart"><span> Flexidocs </span></a></li>
                      <li><a href="/apps/help-center"><span> Microsoft Exchange </span></a></li>
                      <li><a href="/pages/about-us"><span> Mailchimp </span></a></li>
                      <li><a href="/pages/about-us"><span> mvoa </span></a></li>
                      <li><a href="/pages/about-us"><span> Quickbooks </span></a></li>
                      <li><a href="/pages/about-us"><span> Dropbox </span></a></li>
                      <li><a href="/pages/about-us"><span> TrustSphere </span></a></li>
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
