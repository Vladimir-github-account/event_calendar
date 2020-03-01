import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import Icon                 from '@mdi/react';
import { mdiCheckBold }     from '@mdi/js';
import styles               from './SelectedDayEventListItem.module.sass';

class SelectedDayEventListItem extends Component {
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
      event, eventFooter, eventHeader, eventName, eventStatus, eventTime,
      eventType, eventBody
    } = styles;
    return (
        <li className={event}>
          <header className={eventHeader}>
            <h3 className={eventName}>{name || 'Event'}</h3>
            <h4 className={eventType}>{type || ''}</h4>
            <h4 className={eventTime}>{time || 'Today'}</h4>
          </header>
          <footer className={eventFooter}
                  onClick={this.displayOrHideEventBody}>
            <Icon path={mdiCheckBold}
                  size="21px"
                  color="white"/>
            <h4 className={eventStatus}>{isIn ? 'I am in' : 'Not in'}</h4>
          </footer>
          {this.state.isOpened && <div className={eventBody}>{body}</div>}
        </li>
    );
  }
}

SelectedDayEventListItem.propTypes = {
  event: PropTypes.object.isRequired
};

export default SelectedDayEventListItem;