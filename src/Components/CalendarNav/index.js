import React          from 'react';
import PropTypes      from 'prop-types';
import moment         from 'moment';
import Button         from '../Button';
import { VIEW_MODES } from '../../constants';

function CalendarNav(props) {
  const { viewModeClickHandler, nextMonth, prevMonth, viewMode, viewDate } = props;
  const currentMonthLabel = moment( viewDate )
      .month( moment( viewDate ).month() )
      .format( 'MMMM' ).toUpperCase();
  if ( viewMode === VIEW_MODES.MONTH ) {
    const prevMonthLabel = moment( viewDate )
        .month( moment( viewDate ).month() - 1 )
        .format( 'MMMM' ).toUpperCase();
    const nextMonthLabel = moment( viewDate )
        .month( moment( viewDate ).month() + 1 )
        .format( 'MMMM' ).toUpperCase();
    return (
        <nav>
          <Button clickHandler={prevMonth}
                  label={prevMonthLabel}/>
          <Button clickHandler={viewModeClickHandler}
                  label={currentMonthLabel}/>
          <Button clickHandler={nextMonth}
                  label={nextMonthLabel}/>
        </nav>
    );
  } else {

    const sundayDate = moment( viewDate ).day( 0 ).format( 'DD' );
    const saturdayDate = moment( viewDate ).day( 6 ).format( 'DD' );
    return (
        <nav>
          <Button clickHandler={prevMonth}
                  label='PREV'/>
          <Button clickHandler={viewModeClickHandler}
                  label={currentMonthLabel + ' ' + sundayDate + '-' + saturdayDate}/>
          <Button clickHandler={nextMonth}
                  label='NEXT'/>
        </nav>
    );
  }

}

CalendarNav.propTypes = {
  viewModeClickHandler: PropTypes.func,
  nextMonth: PropTypes.func,
  prevMonth: PropTypes.func,
  viewMode: PropTypes.any,
  viewDate: PropTypes.instanceOf(moment)
};

export default CalendarNav;