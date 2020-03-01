import React, { Component } from 'react';
import Calendar             from '../Calendar';
import { EVENTS_URL }       from '../../constants';

class CalendarLoader extends Component {
  constructor(props) {
    super( props );
    this.state = {
      events: [],
      isLoaded: false,
    };
  }

  loadData = () => {
    fetch( EVENTS_URL )
        .then( response => response.json() )
        .then( events => {
          this.setState( {
                           events,
                           isLoaded: true
                         } );
        } );
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    const { isLoaded } = this.state;
    if ( isLoaded ) {
      const { events } = this.state;
      return (
          <div>
            <Calendar events={events}/>
          </div>
      );
    } else {
      return null;
    }
  }
}

export default CalendarLoader;