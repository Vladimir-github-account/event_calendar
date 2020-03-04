import React               from 'react';
import PropTypes           from 'prop-types';
import RestMonthEventList  from '../RestMonthEventList';
import SelectedDayEvenList from '../SelectedDayEventList';
import moment              from 'moment';
import { VIEW_MODES }      from '../../constants';

function EventList(props) {
  const { events, selectedDate, viewDate, viewMode } = props;
  const selectedDayEvents = viewDate.isSame( selectedDate, 'day' )
                            ?
                            events.filter(
                                event => (
                                    moment( event.date )
                                        .isSame( selectedDate, 'day' ) )
                            )[0]
                            : undefined;
  let restMonthEvents;
  if ( viewMode === VIEW_MODES.MONTH ) {
    restMonthEvents = viewDate.isSame( selectedDate, 'month' )
                      ?
                      events.filter(
                          event => ( moment( event.date )
                                         .isAfter( selectedDate, 'day' )
                                     && moment( event.date ).month()
                                     === moment( viewDate ).month() )
                      )
                      :
                      events.filter(
                          event => ( moment( event.date ).month()
                                     === moment( viewDate ).month() )
                      );
  } else {
    restMonthEvents = viewDate.isSame( selectedDate, 'week' )
                      ?
                      events.filter(
                          event => ( moment( event.date )
                                         .isAfter( selectedDate, 'day' )
                                     && moment( event.date ).week()
                                     === moment( viewDate ).week() )
                      )
                      :
                      events.filter(
                          event => ( moment( event.date ).week()
                                     === moment( viewDate ).week() )
                      );
  }
  return (
      <ul>
        {
          selectedDayEvents &&
          <li><SelectedDayEvenList selectedDayEvents={selectedDayEvents}/></li>
        }
        {
          restMonthEvents.length > 0 &&
          <li><RestMonthEventList restMonthEvents={restMonthEvents}/></li>
        }
      </ul>
  );
}

EventList.propTypes = {
  events: PropTypes.array,
  selectedDate: PropTypes.instanceOf( moment ).isRequired,
  viewDate: PropTypes.instanceOf( moment ).isRequired,
  viewMode: PropTypes.string.isRequired
};

export default EventList;