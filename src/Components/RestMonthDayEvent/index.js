import React     from 'react';
import PropTypes from 'prop-types';
import styles    from './RestMonthDayEvent.module.sass';

function RestMonthDayEvent(props) {
  const { name, type, time, isIn } = props.event;
  const { inDayEvent, outDayEvent, eventType, eventName, eventTime } = styles;
  return (
      <li className={isIn ? inDayEvent : outDayEvent}>
        <div>
          <h2 className={eventType}>{type}</h2>
          <h2 className={eventName}>{name}</h2>
        </div>
        <h2 className={eventTime}>{time}</h2>
      </li>
  );
}

RestMonthDayEvent.propTypes = {
  event: PropTypes.object.isRequired
};

export default RestMonthDayEvent;