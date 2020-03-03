import React     from 'react';
import PropTypes from 'prop-types';

function RestMonthEventList(props) {
  const { restMonthEvents } = props;
  const restMonthEventsComponents = restMonthEvents.map(
      event => (
          <li/>
      )
  );
  return (
      <ul>{restMonthEventsComponents}</ul>
  );
}

RestMonthEventList.propTypes = {
  restMonthEvents: PropTypes.array.isRequired
};

export default RestMonthEventList;