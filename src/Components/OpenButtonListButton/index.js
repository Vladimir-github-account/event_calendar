import React, { Component }       from 'react';
import PropTypes                  from 'prop-types';
import classNames                 from 'classnames';
import Button                     from '../Button';
import OpenButtonListButtonStyles from './OpenButtonListButton.module.sass';

class OpenButtonListButton extends Component {
  constructor(props) {
    super( props );
    this.state = {
      isLocked: true
    };
  }

  displayOrHideButtonsList = (e) => {
    this.setState( {
                     isLocked: !this.state.isLocked
                   } );
  };

  render() {
    const { label, styles, displayMonth, displayWeek, changeViewButtonStyles } = this.props;
    const { buttonList, hidden, carriage, firstSpan, secondSpan, firstSpanFlip, secondSpanFlip } = OpenButtonListButtonStyles;
    const { isLocked } = this.state;
    const buttonsListStyles = classNames(
        buttonList,
        { [`${hidden}`]: isLocked },
    );
    return (
        <div className={styles}
             onClick={this.displayOrHideButtonsList}>
          {label}
          <div className={carriage}>
            <span className={isLocked ? firstSpan : firstSpanFlip}/>
            <span className={isLocked ? secondSpan : secondSpanFlip}/>
          </div>
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