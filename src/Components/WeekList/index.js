import React     from 'react';
import PropTypes from 'prop-types';
import moment    from 'moment';
import Week      from '../Week';
import {VIEW_MODES}       from '../../constants';

function WeekList(props) {
  const {currentDate, selectedDate, viewDate, viewMode, styles, dayClickHandler} = props;
  const firstDayOfMonth = moment(viewDate).date(1);
  const weeksComponents = [];
  let viewWeek = null;
  do {
    const day = moment(firstDayOfMonth);
    const firstDayOfWeek = day.day(0);
    const weekElement = <Week key={firstDayOfWeek}
                              firstDayOfWeek={firstDayOfWeek}
                              currentDate={currentDate}
                              selectedDate={selectedDate}
                              clickHandler={dayClickHandler}
                              viewDate={viewDate}/>;
    weeksComponents.push(weekElement);
    if (moment(viewDate).week() === moment(day).week()){
      viewWeek = weekElement;
    }
  } while (firstDayOfMonth.month() === firstDayOfMonth.add(1, 'w').month());

  return (
      <ul className={styles}>
        {viewMode === VIEW_MODES.MONTH && weeksComponents}
        {viewMode === VIEW_MODES.WEEK && viewWeek}
      </ul>
  );
}

WeekList.propTypes = {
  currentDate: PropTypes.instanceOf(moment),
  selectedDate: PropTypes.instanceOf(moment),
  viewDate: PropTypes.instanceOf(moment),
  viewMode: PropTypes.any,
  styles: PropTypes.any
};

export default WeekList;