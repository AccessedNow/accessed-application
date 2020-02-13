import React from 'react'

export default function PopularJobCard() {
  return (
    <div className="slide-main-sec">
      <div className="slide-main-top">
        <div className="slide-left-img">
          <span>
            <img src="http://accessed.s3-us-west-2.amazonaws.com/company/2/images/amazon.png" />
          </span>
        </div>
        <div className="slide-right-content">
          <h4> <a href="#" className="slide-right-head">Senior Product</a> </h4>
          <span>Designer - Growth</span><br />
          <a className="link-apple">Apple</a><br />
          <p>Cupertino, US</p>
        </div>
      </div>

      <ul className="res-line-seniar">
        <li>Mid-Senior</li>
        <li>Full Time</li>
        <li>$115K PA</li>
      </ul>

      {/* <p className="res-deatil">
                            If you live and breathe the user expreience, Love solving problem and thrive on variety, Atlassian has a great opportunity for you.
                          </p> */}

      <ul className="res-line-tags">
        <li><a href="#" className="slide-right-head">design</a></li>
        <li><a href="#" className="slide-right-head">User Experiance</a></li>
        <li><a href="#" className="slide-right-head">design</a></li>
      </ul>

      <div className="res-line-bottom">
        <span> May 14, 2019 </span>
        <div className="res-line-icon">
          <span className="demo-icon icon-electro-add-to-cart-icon"></span>
          <span className="demo-icon icon-electro-add-to-cart-icon"></span>
        </div>
      </div>
      <div className="acces-top-hover">
        <span>PROMOTED</span>
      </div>
    </div>

  )
}
