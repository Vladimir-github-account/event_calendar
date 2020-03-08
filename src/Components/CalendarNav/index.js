import React             from 'react';
import PropTypes         from 'prop-types';
import moment            from 'moment';
import { VIEW_MODES }    from '../../constants';
import CalendarNavRender from './CalendarNavRender';

function CalendarNav(props) {
  const {
    displayMonth, displayWeek, nextMonth, prevMonth, nextWeek, prevWeek,
    viewMode, viewDate
  } = props;
  const currentMonth = viewDate.format( 'MMMM' ).toUpperCase();
  if ( viewMode === VIEW_MODES.MONTH ) {
    const prevLabel = moment( viewDate ).month( viewDate.month() - 1 )
        .format( 'MMM' ).toUpperCase();
    const nextLabel = moment( viewDate ).month( viewDate.month() + 1 )
        .format( 'MMM' ).toUpperCase();
    const props = {
      OpenButtonListButtonLabel: currentMonth,
      prevHandler: prevMonth,
      nextHandler: nextMonth,
      prevLabel,
      nextLabel,
      displayMonth,
      displayWeek,
    };
    return <CalendarNavRender {...props}/>;
  } else {
    const sundayDate = moment( viewDate ).day( 0 ).format( 'DD' );
    const saturdayDate = moment( viewDate ).day( 6 ).format( 'DD' );
    const OpenButtonListButtonLabel = `${currentMonth} ${sundayDate}-${saturdayDate}`;
    const props = {
      OpenButtonListButtonLabel,
      prevHandler: prevWeek,
      nextHandler: nextWeek,
      prevLabel: 'PREV',
      nextLabel: 'NEXT',
      displayMonth,
      displayWeek,
    };
    return <CalendarNavRender {...props}/>;
  }

}

CalendarNav.propTypes = {
  nextMonth: PropTypes.func.isRequired,
  prevMonth: PropTypes.func.isRequired,
  nextWeek: PropTypes.func.isRequired,
  prevWeek: PropTypes.func.isRequired,
  viewMode: PropTypes.any.isRequired,
  viewDate: PropTypes.instanceOf( moment ).isRequired
};

export default CalendarNav;