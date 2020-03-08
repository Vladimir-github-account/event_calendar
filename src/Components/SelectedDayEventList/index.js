import React            from 'react';
import PropTypes        from 'prop-types';
import moment           from 'moment';
import SelectedDayEvent from '../SelectedDayEvent';
import styles           from './SelectedDayEventList.module.sass';

function SelectedDayEventList(props) {
  const { events: eventsArr, viewDate, selectedDate } = props;
  const { selectedDayEventList, selectedDayHeader } = styles;
  const selectedDayEvents = viewDate.isSame( selectedDate, 'day' )
                            ?
                            eventsArr.filter( event => (
                                moment( event.date )
                                    .isSame( selectedDate, 'day' )
                            ) )[0]
                            : undefined;
  if ( selectedDayEvents ) {
    const { date, events } = selectedDayEvents;
    const eventsComponents = events.map(
        event => <SelectedDayEvent key={event.id}
                                   event={event}/> );
    return (
        <>
          <h3 className={selectedDayHeader}>{moment( date )
              .format( 'dddd, DD MMMM' )}</h3>
          <ul className={selectedDayEventList}>
            {eventsComponents}
          </ul>
        </>
    );
  }

  return null;
}

SelectedDayEventList.propTypes = {
  events: PropTypes.array,
  selectedDate: PropTypes.instanceOf( moment ).isRequired,
  viewDate: PropTypes.instanceOf( moment ).isRequired,
};

export default SelectedDayEventList;