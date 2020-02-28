import React      from 'react';
import classNames from 'classnames';
import styles     from './Date.module.sass';

function Date(props) {
  const {date, currentDate, selectedDate, clickHandler} = props;
  const selectOnClick = clickHandler(date);
  const isCurrent = currentDate.isSame(date, 'day');
  const isSelected = selectedDate.isSame(date, 'day');
  const {currentDay, selectedDay, monthDay, day} = styles;
  const style = classNames(monthDay,
      {[`${currentDay}`]: isCurrent},
      {[`${selectedDay}`]: isSelected});
  if (date.month() === currentDate.month()) {
    return (<span className={style}
                  onClick={selectOnClick}>{`${date.date()}`}</span>);
  } else {
    return (<span className={day}> </span>);
  }
}

export default Date;