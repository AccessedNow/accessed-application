/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

function TagButton(props) {
  // Render an anchor tag
  let button = (
      <button type="button" className={"badge badge-pill " + props.className} onClick={props.handleRoute}>
          {Children.toArray(props.children)}
      </button>

  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.href) {
    button = (
        <a href={props.href} onClick={props.onClick} className={"badge badge-pill " + props.className}>
            {Children.toArray(props.children)}
        </a>
    );
  }

  return <Wrapper>{button}</Wrapper>;
}

TagButton.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default TagButton;
