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
  onDragged: function (event) { console.log(event) },
  onChanged: function (event) { console.log(event) }
};

export default function MatchesCarousel() {

  const matchesSlider = useRef(null);

  const onPreviousClick = () => {
    matchesSlider.current.prev();
  };

  const onNextClick = () => {
    matchesSlider.current.next();
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
          <MatchesCard />
          <MatchesCard />
          <MatchesCard />
          <MatchesCard />
          <MatchesCard />
          <MatchesCard />
          <MatchesCard />
          <MatchesCard />
          <MatchesCard />
          <MatchesCard />
          <MatchesCard />
          <MatchesCard />
        </div>
        <div className="cata-product cp-grid match-grid-card">
          <MatchesCard />
        </div>
      </OwlCarousel>
    </div>
  )
}
