import React  from 'react';
import Date   from '../Date';
import moment from 'moment';
import styles from './Week.module.sass';

function Week(props) {
  const {firstDayOfWeek, selectedDate, currentDate, clickHandler} = props;

  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(<Date key={firstDayOfWeek}
                    date={moment(firstDayOfWeek)}
                    currentDate={currentDate}
                    selectedDate={selectedDate}
                    clickHandler={clickHandler}/>);
    firstDayOfWeek.add(1, 'd');
  }
  return (<li className={styles.week}>{days}</li>);
}

export default Week;