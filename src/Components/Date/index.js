import React         from 'react';
import classNames    from 'classnames';
import styles        from './Date.module.sass';
import moment        from 'moment';
import DateEventList from '../DateEventList';

function Date(props) {
  const { date, currentDate, selectedDate, clickHandler, viewDate, events } = props;
  const { currentDay, selectedDay, monthDay, day } = styles;
  if ( date.month() === viewDate.month() ) {
    const selectOnClick = clickHandler( date );
    const eventsArr = events.filter(
        event => moment( event.date ).dayOfYear() === moment( date ).dayOfYear()
    );
    const eventListComponent = eventsArr.length > 0
                               ? <DateEventList events={eventsArr[0].events}/>
                               : undefined;
    const isCurrent = currentDate.isSame( date, 'day' );
    const isSelected = selectedDate.isSame( date, 'day' );
    const style = classNames(
        monthDay,
        { [`${currentDay}`]: isCurrent },
        { [`${selectedDay}`]: isSelected }
    );
    return ( <span className={style}
                   onClick={selectOnClick}>
      {`${date.date()}`}
      {eventListComponent}</span> );
  } else {
    return ( <span className={day}/> );
  }
}

export default Date;