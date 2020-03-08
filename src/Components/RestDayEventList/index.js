import React        from 'react';
import PropTypes    from 'prop-types';
import RestDayEvent from '../RestDayEvent';
import styles       from './RestDayEventList.module.sass';
import moment       from 'moment';

function RestDayEventList(props) {
  const { date, events } = props;
  const { dateHeader, restDayEventList } = styles;
  const eventsComponents = events.map(
      event =>
          (
              <RestDayEvent key={event.id}
                            event={event}/>
          )
  );
  return (
      <li>
        <h1 className={dateHeader}>{moment( date )
            .format( 'ddd, DD MMMM' )}</h1>
        <ul className={restDayEventList}>
          {eventsComponents}
        </ul>
      </li>
  );
}

RestDayEventList.propTypes = {
  events: PropTypes.array,
  date: PropTypes.string
};

export default RestDayEventList;