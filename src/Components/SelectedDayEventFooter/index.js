import React                                      from 'react';
import PropTypes                                  from 'prop-types';
import Icon                                       from '@mdi/react';
import { mdiCheckBold, mdiClose, mdiChevronDown } from '@mdi/js';
import styles
                                                  from './SelectedDayEventFooter.module.sass';

function SelectedDayEventFooter(props) {
  const { isIn, handleClick } = props;
  const { outEventStatus, outEventFooter, inEventFooter, inEventStatus, footerChevronIcon } = styles;
  if ( isIn ) {
    return (
        <footer className={inEventFooter}
                onClick={handleClick}>
          <Icon path={mdiCheckBold}
                size="21px"
                color="white"/>
          <h4 className={inEventStatus}>{'I am in'}</h4>
          <Icon className={footerChevronIcon}
                path={mdiChevronDown}
                size="24px"
                color="rgba(255,255,255, 0.6)"/>
        </footer>
    );
  } else {
    return (
        <footer className={outEventFooter}
                onClick={handleClick}>
          <Icon path={mdiClose}
                size="21px"
                color="white"/>
          <h4 className={outEventStatus}>{'I am out'}</h4>
          <Icon className={footerChevronIcon}
                path={mdiChevronDown}
                size="24px"
                color="rgba(255,255,255, 0.6)"/>
        </footer>
    );
  }
}

SelectedDayEventFooter.propTypes = {
  isIn: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default SelectedDayEventFooter;