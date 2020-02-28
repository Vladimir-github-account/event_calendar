import React from 'react';
import Date  from '../Date';
import moment from 'moment';

function Week(props) {
  const {firstDayOfWeek, selectedDate, currentDate, clickHandler} = props;

  const days = [];
  for (let i = 0; i < 7; i++) {
    //console.log(i, firstDayOfWeek.format('dddd, MMMM Do YYYY, h:mm:ss'));
    days.push(<Date key={firstDayOfWeek}
                    date={moment(firstDayOfWeek)}
                    currentDate={currentDate}
                    selectedDate={selectedDate}
                    clickHandler={clickHandler}/>);
    firstDayOfWeek.add(1, 'd');
  }
  return (<li>{days}</li>);
}

export default Week;