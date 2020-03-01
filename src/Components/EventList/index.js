import React               from 'react';
import PropTypes           from 'prop-types';
import SelectedDayEvenList from '../SelectedDayEventList';
import moment              from 'moment';

function EventList(props) {
  const { events, selectedDate } = props;
  const selectedDayEvents = events.filter(
      event => moment( event.date ).format( 'YYYY MM DD' ) ===
               moment( selectedDate ).format( 'YYYY MM DD' )
  )[0];
  const selectedDayEventsComponents = selectedDayEvents
                                      ? <SelectedDayEvenList
                                          selectedDayEvents={selectedDayEvents}/>
                                      : undefined;
  return (
      <ul>
        <li>{selectedDayEventsComponents}</li>
      </ul>
  );
}

EventList.propTypes = {
  events: PropTypes.array,
  selectedDate: PropTypes.instanceOf( moment )
};

export default EventList;