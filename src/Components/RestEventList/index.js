import React            from 'react';
import PropTypes        from 'prop-types';
import RestDayEventList from '../RestDayEventList';
import styles           from './RestEventList.module.sass';
import { VIEW_MODES }   from '../../constants';
import moment           from 'moment';

function RestEventList(props) {
  const { events, selectedDate, viewDate, viewMode } = props;
  let restEvents;
  if ( viewMode === VIEW_MODES.MONTH ) {
    restEvents = viewDate.isSame( selectedDate, 'month' )
                 ?
                 events.filter( event => (
                     moment( event.date ).isAfter( selectedDate, 'day' )
                     && moment( event.date ).isSame( viewDate, 'month' ) ) )
                 :
                 events.filter( event => (
                     moment( event.date ).isSame( viewDate, 'month' )
                 ) );
  } else {
    restEvents = viewDate.isSame( selectedDate, 'week' )
                 ?
                 events.filter( event => (
                     moment( event.date ).isAfter( selectedDate, 'day' )
                     && moment( event.date ).isSame( viewDate, 'week' ) ) )
                 :
                 events.filter( event => (
                     moment( event.date ).isSame( viewDate, 'week' )
                 ) );
  }

  if ( restEvents.length > 0 ) {
    const restEventsComponents = restEvents.map(
        event => (
            <RestDayEventList key={event.date}
                              date={event.date}
                              events={event.events}/>
        )
    );
    return (
        <ul className={styles.restEventList}>{restEventsComponents}</ul>
    );
  }

  return null;
}

RestEventList.propTypes = {
  events: PropTypes.array,
  selectedDate: PropTypes.instanceOf( moment ).isRequired,
  viewDate: PropTypes.instanceOf( moment ).isRequired,
  viewMode: PropTypes.string.isRequired
};

export default RestEventList;