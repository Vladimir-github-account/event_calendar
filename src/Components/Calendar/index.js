import React, {Component} from 'react';
import moment             from 'moment';
import Week               from '../Week';
import _                  from 'lodash';

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
          <div>
            <span>M</span>
            <span>M</span>
            <span>M</span>
            <span>M</span>
            <span>M</span>
            <span>M</span>
            <span>M</span>
          </div>
          <ul>
            {weeksComponents}
          </ul>
        </div>
    );
  }
}

export default Calendar;