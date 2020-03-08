import React     from 'react';
import PropTypes from 'prop-types';
import styles    from './DateEventList.module.sass';

function DateEventList(props) {
  const { events } = props;
  const { dateEventList, outDateEvent, inDateEvent } = styles;
  const limitedEvents = events.slice( 0, 3 );
  const components = limitedEvents.map( event =>
      <li key={event.id}
          className={event.isIn
                     ? inDateEvent
                     : outDateEvent}/>
  );
  return <ul className={dateEventList}>{components}</ul>;
}

DateEventList.propTypes = {
  events: PropTypes.array.isRequired
};

export default DateEventList;