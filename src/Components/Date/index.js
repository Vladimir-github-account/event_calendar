import React         from 'react';
import styles        from './Date.module.sass';
import moment        from 'moment';
import DateEventList from '../DateEventList';

function Date(props) {
  const { date, currentDate, selectedDate, clickHandler, viewDate, events } = props;
  const { currentDay, selectedDay, monthDay, day } = styles;
  if ( date.month() === viewDate.month() ) {
    const selectOnClick = clickHandler( date );
    const eventsArr = events.filter( event =>
        moment( event.date ).format( 'YY M D' ) === date.format( 'YY M D' )
    );
    const isCurrent = currentDate.isSame( date, 'day' );
    const isSelected = selectedDate.isSame( date, 'day' );
    const style = isSelected
                  ? selectedDay
                  : isCurrent
                    ? currentDay
                    : monthDay;
    return (
        <span className={style}
              onClick={selectOnClick}>
          {date.date()}
          {
            eventsArr.length > 0
            && <DateEventList events={eventsArr[0].events}/>
          }
        </span>
    );
  }

  return ( <span className={day}/> );
}

export default Date;