import React          from 'react';
import PropTypes      from 'prop-types';
import moment         from 'moment';
import Week           from '../Week';
import { VIEW_MODES } from '../../constants';

function WeekList(props) {
  const {
    currentDate, selectedDate, viewDate, viewMode, styles, dayClickHandler,
    events
  } = props;

  if ( viewMode === VIEW_MODES.WEEK ) {
    const firstDayOfWeek = moment( viewDate ).day( 0 );
    return (
        <ul className={styles}>
          <Week events={events}
                firstDayOfWeek={firstDayOfWeek}
                currentDate={currentDate}
                selectedDate={selectedDate}
                clickHandler={dayClickHandler}
                viewDate={viewDate}/>
        </ul>
    );
  }

  const firstDayOfWeek = moment( viewDate ).date( 1 ).day( 0 );
  const weeksComponents = [];
  do {
    weeksComponents.push( <Week key={firstDayOfWeek}
                                events={events}
                                firstDayOfWeek={moment( firstDayOfWeek )}
                                currentDate={currentDate}
                                selectedDate={selectedDate}
                                clickHandler={dayClickHandler}
                                viewDate={viewDate}/> );
  } while (firstDayOfWeek.add( 1, 'w' ).month()
           === viewDate.month());
  return (
      <ul className={styles}>
        {weeksComponents}
      </ul>
  );
}

WeekList.propTypes = {
  events: PropTypes.array,
  currentDate: PropTypes.instanceOf( moment ).isRequired,
  selectedDate: PropTypes.instanceOf( moment ),
  viewDate: PropTypes.instanceOf( moment ).isRequired,
  viewMode: PropTypes.any.isRequired,
  styles: PropTypes.string
};

export default WeekList;