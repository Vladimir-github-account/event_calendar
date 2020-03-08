import React               from 'react';
import PropTypes           from 'prop-types';
import RestEventList       from '../RestEventList';
import SelectedDayEvenList from '../SelectedDayEventList';
import moment              from 'moment';

function EventList(props) {
  const { events, selectedDate, viewDate, viewMode } = props;
  return (
      <ul>
        {
          <li>
            <SelectedDayEvenList events={events}
                                 viewDate={viewDate}
                                 selectedDate={selectedDate}/>
          </li>
        }
        {
          <li>
            <RestEventList events={events}
                           viewDate={viewDate}
                           selectedDate={selectedDate}
                           viewMode={viewMode}/>
          </li>
        }
      </ul>
  );
}

EventList.propTypes = {
  events: PropTypes.array,
  selectedDate: PropTypes.instanceOf( moment ).isRequired,
  viewDate: PropTypes.instanceOf( moment ).isRequired,
  viewMode: PropTypes.string.isRequired
};

export default EventList;