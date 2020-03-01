import React, { Component } from 'react';
import moment               from 'moment';
import _                    from 'lodash';
import CalendarNav          from '../CalendarNav';
import WeekList             from '../WeekList';
import { VIEW_MODES }       from '../../constants';
import styles               from './Calendar.module.sass';
import weekDayStyles        from './WeekListStyles/WeekDays.module.sass';
import weekListStyles       from './WeekListStyles/WeeksList.module.sass';

class Calendar extends Component {
  constructor(props) {
    super( props );
    this.state = {
      currentDate: moment(),
      selectedDate: moment(),
      viewDate: moment(),
      viewMode: VIEW_MODES.MONTH,
    };
  }

  nextMonth = (e) => {
    const state = _.clone( this.state );
    state.viewDate = state.viewDate.add( 1, 'month' );
    this.setState( state );
  };

  prevMonth = (e) => {
    const state = _.clone( this.state );
    state.viewDate.subtract( 1, 'month' );
    this.setState( state );
  };

  nextWeek = (e) => {
    const state = _.clone( this.state );
    state.viewDate = state.viewDate.add( 1, 'week' );
    this.setState( state );
  };

  prevWeek = (e) => {
    const state = _.clone( this.state );
    state.viewDate.subtract( 1, 'week' );
    this.setState( state );
  };

  displayMonth = (e) => {
    if ( this.state.viewMode !== VIEW_MODES.MONTH ) {
      const state = _.clone( this.state );
      state.viewMode = VIEW_MODES.MONTH;
      this.setState( state );
    }
  };

  displayWeek = (e) => {
    if ( this.state.viewMode !== VIEW_MODES.WEEK ) {
      const state = _.clone( this.state );
      state.viewMode = VIEW_MODES.WEEK;
      this.setState( state );
    }
  };

  dayClickHandler = (date) => {
    return e => {
      const state = _.clone( this.state );
      state.selectedDate = moment( date );
      state.viewDate = moment( date );
      this.setState( state );
    };
  };

  render() {
    const { currentDate, selectedDate, viewDate, viewMode } = this.state;
    const { events } = this.props;
    return (
        <div className={styles.calendar}>
          <CalendarNav displayMonth={this.displayMonth}
                       displayWeek={this.displayWeek}
                       nextMonth={this.nextMonth}
                       prevMonth={this.prevMonth}
                       nextWeek={this.nextWeek}
                       prevWeek={this.prevWeek}
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
                    events={events}
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