import Button               from '../Button';
import OpenButtonListButton from '../OpenButtonListButton';
import React                from 'react';
import styles               from './CalendarNav.module.sass';

export default function CalendarNavRender(props) {
  const {
    prevLabel, nextLabel, OpenButtonListButtonLabel, prevHandler, displayMonth,
    displayWeek, nextHandler
  } = props;
  const {
    calendarNav, changeDateButton, openButtonListButton,
    changeViewButton
  } = styles;
  return (
      <nav className={calendarNav}>
        <Button styles={changeDateButton}
                clickHandler={prevHandler}
                label={prevLabel}/>
        <OpenButtonListButton
            styles={openButtonListButton}
            changeViewButtonStyles={changeViewButton}
            displayMonth={displayMonth}
            displayWeek={displayWeek}
            label={OpenButtonListButtonLabel}/>
        <Button styles={changeDateButton}
                clickHandler={nextHandler}
                label={nextLabel}/>
      </nav>
  );
}