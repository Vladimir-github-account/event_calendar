import React     from 'react';
import PropTypes from 'prop-types';
import Button    from '../Button';

function CalendarNav(props) {
  const {viewModeClickHandler, nextMonth, prevMonth} = props;
  return (
      <nav>
        <Button clickHandler={prevMonth}
                label='prev'/>
        <Button clickHandler={nextMonth}
                label='next'/>
        <Button clickHandler={viewModeClickHandler}
                label='February'/>
      </nav>
  );
}

CalendarNav.propTypes = {
  viewModeClickHandler: PropTypes.func,
};

export default CalendarNav;