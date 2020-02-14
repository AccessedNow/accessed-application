import React, { useState } from 'react'
import { dayFormatter, numberFormat } from '../../utils/helper';
import Config from '../../Config';

export default function PopularJobCard(props) {
  const [details, setDetails] = useState(props.cardData);
  return (
    <div className="slide-main-sec">
      <div className="slide-main-top">
        <div className="slide-left-img">
          <span>
            <img src={`${Config.S3}company/${details.company.id}/images/${details.company.logoImageUrl}`} />
          </span>
        </div>
        <div className="slide-right-content">
          <h4> <a href="#" className="slide-right-head">{details.title}</a> </h4>
          {/* <span>Designer - Growth</span><br /> */}
          <a className="link-apple">{details.company.groupName}</a><br />
          <p>{details.company.address.city}, {details.company.address.country}</p>
        </div>
      </div>

      <ul className="res-line-seniar">
        <li>Mid-Senior</li>
        <li>{details.employmentType}</li>
        <li>{numberFormat(details.salaryRangeHigh)} PA</li>
      </ul>

      <ul className="res-line-tags">
        <li><a href="#" className="slide-right-head">design</a></li>
        <li><a href="#" className="slide-right-head">User Experiance</a></li>
        <li><a href="#" className="slide-right-head">design</a></li>
      </ul>

      <div className="res-line-bottom">
        <span> {dayFormatter(details.createdDate)} </span>
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
