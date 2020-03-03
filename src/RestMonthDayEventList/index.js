import React             from 'react';
import PropTypes         from 'prop-types';
import RestMonthDayEvent from '../RestMonthDayEvent';

function RestMonthDayEventList(props) {
  const {date, events} = props;
  const eventsComponents = events.map(event => {
    return (
        <RestMonthDayEvent event={event}/>
    );
  });
  return (
      <>
        <h1>{date}</h1>
        <ul>
          {eventsComponents}
        </ul>
      </>
  );
}

RestMonthDayEventList.propTypes = {};

export default RestMonthDayEventList;