import React, { Component }   from 'react';
import PropTypes              from 'prop-types';
import SelectedDayEventFooter from '../SelectedDayEventFooter';
import styles                 from './SelectedDayEvent.module.sass';

class SelectedDayEvent extends Component {
  constructor(props) {
    super( props );
    this.state = {
      isOpened: false
    };
  }

  displayOrHideEventBody = (e) => {
    this.setState( {
                     isOpened: !this.state.isOpened
                   } );
  };

  render() {
    const { event: { name, type, time, isIn, body } } = this.props;
    const {
      event, eventHeader, eventName, eventTime,
      eventType, eventBody
    } = styles;
    return (
        <li className={event}>
          <header className={eventHeader}>
            <h3 className={eventName}>{name || 'Event'}</h3>
            <h4 className={eventType}>{type || ''}</h4>
            <h4 className={eventTime}>{time || 'Today'}</h4>
          </header>
          <SelectedDayEventFooter isIn={isIn}
                                  handleClick={this.displayOrHideEventBody}/>
          {this.state.isOpened && <div className={eventBody}>{body}</div>}
        </li>
    );
  }
}

SelectedDayEvent.propTypes = {
  event: PropTypes.object.isRequired
};

export default SelectedDayEvent;