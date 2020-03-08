import React, { Component } from 'react';
import Calendar             from '../Calendar';
import { EVENTS_URL }       from '../../constants';
import styles               from './CalendarLoader.module.sass';

class CalendarLoader extends Component {
  constructor(props) {
    super( props );
    this.state = {
      events: [],
      error: null,
      isLoaded: false,
    };
  }

  loadData = () => {
    setTimeout( () => {
      fetch( EVENTS_URL )
          .then( response => response.json() )
          .then( events => {
            this.setState( {
                             events,
                             isLoaded: true
                           } );
          } ).catch(
          error => {
            this.setState( {
                             error
                           } );
          }
      );
    }, 1000 );
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    const { isLoaded, error } = this.state;
    if ( error ) {
      return null;
    }
    if ( isLoaded ) {
      const { events } = this.state;
      return (
          <Calendar events={events}/>
      );
    }
    return <div className={styles.loader}>Loading...</div>;
  }
}

export default CalendarLoader;