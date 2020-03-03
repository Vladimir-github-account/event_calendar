import React               from 'react';
import PropTypes           from 'prop-types';
import RestMonthEventList  from '../RestMonthEventList';
import SelectedDayEvenList from '../SelectedDayEventList';
import moment              from 'moment';

function EventList(props) {
  const { events, selectedDate } = props;
  const selectedDayEvents = events.filter(
      event => (
          moment( event.date ).isSame( moment( selectedDate ), 'day' ) )
  )[0];
  const selectedDayEventsComponents = selectedDayEvents
                                      ? <SelectedDayEvenList
                                          selectedDayEvents={selectedDayEvents}/>
                                      : undefined;
  const restMonthEvents = events.filter(
      event => ( moment( event.date ).isAfter( moment( selectedDate ), 'day' ) )
  );
  return (
      <ul>
        <li>{selectedDayEventsComponents}</li>
        <li>{<RestMonthEventList restMonthEvents={restMonthEvents}/>}</li>
      </ul>
  );
}

EventList.propTypes = {
  events: PropTypes.array,
  selectedDate: PropTypes.instanceOf( moment )
};

export default EventList;