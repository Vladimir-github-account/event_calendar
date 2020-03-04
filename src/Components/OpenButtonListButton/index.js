import React, { Component }       from 'react';
import PropTypes                  from 'prop-types';
import classNames                 from 'classnames';
import Button                     from '../Button';
import OpenButtonListButtonStyles from './OpenButtonListButton.module.sass';
import Icon                       from '@mdi/react';
import { mdiChevronUp }           from '@mdi/js';

class OpenButtonListButton extends Component {
  constructor(props) {
    super( props );
    this.state = {
      isHiding: true
    };
  }

  displayOrHideButtonsList = (e) => {
    this.setState( {
                     isHiding: !this.state.isHiding
                   } );
  };

  render() {
    const { label, styles, displayMonth, displayWeek, changeViewButtonStyles } = this.props;
    const { buttonList, hidden } = OpenButtonListButtonStyles;
    const { isHiding } = this.state;
    const buttonsListStyles = classNames(
        buttonList,
        { [`${hidden}`]: isHiding },
    );
    return (
        <div className={styles}
             onClick={this.displayOrHideButtonsList}>
          {label}
          <Icon path={mdiChevronUp}
                size="26px"
                color="#E6EAEE"
                opacity='0.5'
                vertical={isHiding}/>
          <div className={buttonsListStyles}>
            <Button styles={changeViewButtonStyles}
                    clickHandler={displayWeek}
                    label='This week'/>
            <Button styles={changeViewButtonStyles}
                    clickHandler={displayMonth}
                    label='This month'/>
          </div>
        </div>
    );
  }
}

OpenButtonListButton.propTypes = {
  clickHandler: PropTypes.func,
  label: PropTypes.string,
  styles: PropTypes.any,
  weekViewButtonStyles: PropTypes.any,
  monthViewButtonStyles: PropTypes.any,
};

export default OpenButtonListButton;