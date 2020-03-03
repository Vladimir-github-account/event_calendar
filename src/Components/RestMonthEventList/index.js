import React                 from 'react';
import PropTypes             from 'prop-types';
import RestMonthDayEventList from '../RestMonthDayEventList';
import styles                from './RestMonthEventList.module.sass';

function RestMonthEventList(props) {
  const { restMonthEvents } = props;
  const restMonthEventsComponents = restMonthEvents.map(
      event => (
          <RestMonthDayEventList key={event.date}
                                 date={event.date}
                                 events={event.events}/>
      )
  );
  return (
      <ul className={styles.restMonthEventList}>{restMonthEventsComponents}</ul>
  );
}

RestMonthEventList.propTypes = {
  restMonthEvents: PropTypes.array.isRequired
};

export default RestMonthEventList;