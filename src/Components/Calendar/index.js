import React, {Component} from 'react';
import moment             from 'moment';
import _                  from 'lodash';
import CalendarNav        from '../CalendarNav';
import WeekList           from '../WeekList';
import {VIEW_MODES}       from '../../constants';
import weekDayStyles      from './WeekListStyles/WeekDays.module.sass';
import weekListStyles     from './WeekListStyles/WeeksList.module.sass';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(),
      selectedDate: moment(),
      viewDate: moment(),
      viewMode: VIEW_MODES.MONTH,
    };
  }

  nextMonth = (e) => {
    const state = _.clone(this.state);
    state.viewDate = state.viewDate.add(1, 'month');
    this.setState(state);
  };

  prevMonth = (e) => {
    const state = _.clone(this.state);
    state.viewDate.subtract(1, 'month');
    this.setState(state);
  };

  changeViewMode = (e) => {
    const state = _.clone(this.state);
    state.viewMode = this.state.viewMode === VIEW_MODES.MONTH
        ? VIEW_MODES.WEEK
        : VIEW_MODES.MONTH;
    this.setState(state);
  };

  dayClickHandler = (date) => {
    return e => {
      const state = _.clone(this.state);
      state.selectedDate = moment(date);
      state.viewDate = moment(date);
      this.setState(state);
    };
  };

  render() {
    const {currentDate, selectedDate, viewDate, viewMode} = this.state;
    return (
        <div>
          <CalendarNav viewModeClickHandler={this.changeViewMode}
                       nextMonth={this.nextMonth}
                       prevMonth={this.prevMonth}
                       viewMode={viewMode}
                       viewDate={viewDate}/>
          <ul className={weekDayStyles.weekDaysList}>
            <li className={weekDayStyles.weekDay}>S</li>
            <li className={weekDayStyles.weekDay}>M</li>
            <li className={weekDayStyles.weekDay}>T</li>
            <li className={weekDayStyles.weekDay}>W</li>
            <li className={weekDayStyles.weekDay}>T</li>
            <li className={weekDayStyles.weekDay}>F</li>
            <li className={weekDayStyles.weekDay}>S</li>
          </ul>
          <WeekList styles={weekListStyles.weekList}
                    viewMode={viewMode}
                    currentDate={currentDate}
                    selectedDate={selectedDate}
                    viewDate={viewDate}
                    dayClickHandler={this.dayClickHandler}/>
        </div>
    );
  }
}

export default Calendar;