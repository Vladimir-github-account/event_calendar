import React, {Component} from 'react';
import moment             from 'moment';
import Week               from '../Week';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(),
    };
  }

  render() {
    /* const weeks = [];
     console.log(moment().day(0).format('dddd, MMMM Do YYYY, h:mm:ss'));
     console.log(moment().date(1).format('dddd, MMMM Do YYYY, h:mm:ss'));
     const firstDayOfMonth = moment().date(1);
     console.log('Before add',firstDayOfMonth.format('dddd, MMMM Do YYYY, h:mm:ss'));
     firstDayOfMonth.add(1, 'w');
     console.log('After add',firstDayOfMonth.format('dddd, MMMM Do YYYY, h:mm:ss'));
     console.log('is in mounth?', firstDayOfMonth.month() === firstDayOfMonth.add(1, 'w').month(), firstDayOfMonth.format('dddd, MMMM Do YYYY, h:mm:ss'));
     console.log('is in mounth?', firstDayOfMonth.month() === firstDayOfMonth.add(1, 'w').month(), firstDayOfMonth.format('dddd, MMMM Do YYYY, h:mm:ss'));
     console.log('is in mounth?', firstDayOfMonth.month() === firstDayOfMonth.add(1, 'w').month(), firstDayOfMonth.format('dddd, MMMM Do YYYY, h:mm:ss'));
     console.log('is in mounth?', firstDayOfMonth.month() === firstDayOfMonth.add(1, 'w').month(), firstDayOfMonth.format('dddd, MMMM Do YYYY, h:mm:ss'));
 */
    const {currentDate} = this.state;
    const firstDayOfMonth = currentDate.date(1);
    const weeksComponents = [];
    do {
      //console.log(firstDayOfMonth.format('dddd, MMMM Do YYYY, h:mm:ss'));
      const day = moment(firstDayOfMonth);
      const firstDayOfWeek = day.day(1);
      console.log(firstDayOfWeek.format('dddd, MMMM Do YYYY, h:mm:ss'));
      weeksComponents.push(<Week key={firstDayOfWeek}
                                 firstDayOfWeek={firstDayOfWeek}
                                 currentDate={currentDate}/>);
    } while (firstDayOfMonth.month() === firstDayOfMonth.add(1, 'w').month());
    console.log(weeksComponents);
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