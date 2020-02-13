import React, { useRef, Fragment } from 'react'
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
  onDragged: function (event) { console.log(event) },
  onChanged: function (event) { console.log(event) }
};

export default function PopularJobCarousel() {
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
        <PopularJobCard />
        <PopularJobCard />
        <PopularJobCard />
        <PopularJobCard />
        <PopularJobCard />
      </OwlCarousel>
    </Fragment>
  )
}
