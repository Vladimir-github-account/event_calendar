import React                 from 'react';
import PropTypes             from 'prop-types';
import RestMonthDayEventList from '../../RestMonthDayEventList';

function RestMonthEventList(props) {
  const {restMonthEvents} = props;
  const restMonthEventsComponents = restMonthEvents.map(
      event => {
        return (
            <li>
              {
                <RestMonthDayEventList date={event.date}
                                       events={event.events}/>
              }
            </li>
        );
      }
  );
  return (
      <ul>{restMonthEventsComponents}</ul>
  );
}

RestMonthEventList.propTypes = {
  restMonthEvents: PropTypes.array.isRequired
};

export default RestMonthEventList;