import React, {Component} from 'react';
import moment             from 'moment';
import Week               from '../Week';
import _                  from 'lodash';
import weekDayStyles      from './WeekDays.module.sass'
import weekListStyles     from './WeeksList.module.sass'

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(),
      selectedDate: moment(),
      viewDate: moment(),
    };
  }

  clickHandler = (date) => {
    return e => {
      const state = _.clone(this.state);
      state.selectedDate = date;
      this.setState(state);
    };
  };

  render() {
    const {currentDate, selectedDate, viewDate} = this.state;
    const firstDayOfMonth = moment(viewDate).date(1);
    const weeksComponents = [];
    do {
      const day = moment(firstDayOfMonth);
      const firstDayOfWeek = day.day(1);
      weeksComponents.push(<Week key={firstDayOfWeek}
                                 firstDayOfWeek={firstDayOfWeek}
                                 currentDate={currentDate}
                                 selectedDate={selectedDate}
                                 clickHandler={this.clickHandler}/>);
    } while (firstDayOfMonth.month() === firstDayOfMonth.add(1, 'w').month());
    return (
        <div>
          <div>
            <div>Prev</div>
            <div>Current month</div>
            <div>Next</div>
          </div>
          <ul className={weekDayStyles.weekDaysList}>
            <li className={weekDayStyles.weekDay}>S</li>
            <li className={weekDayStyles.weekDay}>M</li>
            <li className={weekDayStyles.weekDay}>T</li>
            <li className={weekDayStyles.weekDay}>W</li>
            <li className={weekDayStyles.weekDay}>T</li>
            <li className={weekDayStyles.weekDay}>F</li>
            <li className={weekDayStyles.weekDay}>S</li>
          </ul>
          <ul className={weekListStyles.weekList}>
            {weeksComponents}
          </ul>
        </div>
    );
  }
}

export default Calendar;