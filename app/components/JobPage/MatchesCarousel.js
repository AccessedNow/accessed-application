import React, { Fragment, useRef } from 'react'
import MatchesCard from './MatchesCard'
import OwlCarousel from 'react-owl-carousel2';

const options = {
  items: 1,
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

export default function MatchesCarousel(props) {
  const matchesSlider = useRef(null);

  const onPreviousClick = () => {
    matchesSlider.current.prev();
    props.previous();
  };

  const onNextClick = () => {
    matchesSlider.current.next();
    props.next();
  };

  return (
    <div className="matches-section">
      <div className="wrap-cata-title">
        <p>Matches</p>
        <div className="res-job-button">
          <span onClick={onPreviousClick} className="prev">&lt;</span>
          <span onClick={onNextClick} className="next">&gt;</span>
        </div>
      </div>
      <OwlCarousel ref={matchesSlider} margin={10} options={options} events={events} >
        <div className="cata-product cp-grid match-grid-card">
          <div className="row">
            {props.jobs.map(item => (
              <div className="col-lg-3 col-md-4 col-12">
                <MatchesCard key={item._id} cardData={item} />
              </div>
            ))}
          </div>
        </div>
      </OwlCarousel>
    </div>
  )
}
