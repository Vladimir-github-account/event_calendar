import React      from 'react';
import classNames from 'classnames';
import styles     from './Date.module.sass';

function Date(props) {
  const {date, currentDate, selectedDate, clickHandler} = props;
  const selectOnClick = clickHandler(date);
  //console.log(selectedDate.format('dddd, MMMM Do YYYY'));
  const isCurrent = currentDate.isSame(date, 'day');
  const isSelected = selectedDate.isSame(date, 'day');
  //console.log(isSelected);
  const {currentDay, selectedDay} = styles;
  const style = classNames({[`${currentDay}`]: isCurrent},
                           {[`${selectedDay}`]: isSelected});
  if (date.month() === currentDate.month()){
    return (<span className={style}
                  onClick={selectOnClick}>{`${date.date()} `}</span>);
  }else{
    return (<span className={styles.hiddenDay}/>);
  }
}

export default Date;