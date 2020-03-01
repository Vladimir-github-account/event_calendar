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
  const firstDayOfMonth = moment( viewDate ).date( 1 );
  const viewDateMonth = moment( viewDate ).format( 'M' );
  const weeksComponents = [];
  let viewWeek = null;
  do {
    const firstDayOfWeek = moment( firstDayOfMonth ).day( 0 );
    const weekElement = <Week key={firstDayOfWeek}
                              events={events}
                              firstDayOfWeek={firstDayOfWeek}
                              currentDate={currentDate}
                              selectedDate={selectedDate}
                              clickHandler={dayClickHandler}
                              viewDate={viewDate}/>;
    weeksComponents.push( weekElement );
    if ( moment( viewDate ).week() === moment( firstDayOfWeek ).week() ) {
      viewWeek = weekElement;
    }
  } while (firstDayOfMonth.add( 1, 'w' )
               .day( 0 )
               .format( 'M' ) === viewDateMonth);
  return (
      <ul className={styles}>
        {viewMode === VIEW_MODES.MONTH && weeksComponents}
        {viewMode === VIEW_MODES.WEEK && viewWeek}
      </ul>
  );
}

WeekList.propTypes = {
  events: PropTypes.array,
  currentDate: PropTypes.instanceOf( moment ).isRequired,
  selectedDate: PropTypes.instanceOf( moment ),
  viewDate: PropTypes.instanceOf( moment ).isRequired,
  viewMode: PropTypes.any.isRequired,
  styles: PropTypes.any
};

export default WeekList;