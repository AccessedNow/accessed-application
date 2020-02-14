import React, { useRef, Fragment, useEffect, useState } from 'react'
import PopularJobCard from '../../components/JobPage/PopularJobCard';
import OwlCarousel from 'react-owl-carousel2';

const options = {
  items: 3,
  nav: true,
  rewind: true,
  margin: 20,
  autoplay: false,
  dots: false
};

const events = {
  onDragged: function (event) { },
  onChanged: function (event) { }
};

export default function PopularJobCarousel(props) {
  const jobsSlider = useRef(null);

  const onPreviousClick = () => {
    jobsSlider.current.prev();
  };

  const onNextClick = () => {
    jobsSlider.current.next();
  };

  return (
    <Fragment>
      <div className="wrap-cata-title">
        <p>Popular Jobs</p>
        <div className="res-job-button">
          <span onClick={onPreviousClick} className="prev">&lt;</span>
          <span onClick={onNextClick} className="next">&gt;</span>
        </div>
      </div>
      <OwlCarousel ref={jobsSlider} margin={10} options={options} events={events} >
        {props.jobs.map(item => (
          <PopularJobCard key={item._id} cardData={item} />
        ))}
      </OwlCarousel>
    </Fragment>
  )
}
