import React             from 'react';
import PropTypes         from 'prop-types';
import RestMonthDayEvent from '../RestMonthDayEvent';
import styles            from './RestMonthDayEventList.module.sass';
import moment            from 'moment';

function RestMonthDayEventList(props) {
  const { date, events } = props;
  const { dateHeader, restMonthDayEventList } = styles;
  const eventsComponents = events.map(
      event =>
          (
              <RestMonthDayEvent key={event.id}
                                 event={event}/>
          )
  );
  return (
      <li>
        <h1 className={dateHeader}>{moment( date )
            .format( 'ddd, DD MMMM' )}</h1>
        <ul className={restMonthDayEventList}>
          {eventsComponents}
        </ul>
      </li>
  );
}

RestMonthDayEventList.propTypes = {};

export default RestMonthDayEventList;