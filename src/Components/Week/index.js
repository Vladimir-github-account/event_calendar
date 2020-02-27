import React from 'react';
import Date  from '../Date';

function Week(props) {
  const {firstDayOfWeek, currentDate} = props;
  const days = [];
  for (let i = 0; i < 7; i++){
    console.log(firstDayOfWeek.format('dddd, MMMM Do YYYY, h:mm:ss'));
    days.push(<Date date={firstDayOfWeek.date()}/>);
    firstDayOfWeek.add(1, 'd');
  }
  console.log(days);
  return (<li>{days}</li>);
}

export default Week;