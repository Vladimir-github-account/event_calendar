import React, { Component }    from 'react';
import PropTypes               from 'prop-types';
import classNames              from 'classnames';
import Button                  from '../Button';
import ListButtonsButtonStyles from './OpenButtonListButton.module.sass';

class OpenButtonListButton extends Component {
  constructor(props) {
    super( props );
    this.state = {
      isOpened: false
    };
  }

  displayOrHideButtonsList = (e) => {
    this.setState( {
                     isOpened: !this.state.isOpened
                   } );
  };

  render() {
    const { label, styles, displayMonth, displayWeek, changeViewButtonStyles } = this.props;
    const { buttonList, hidden } = ListButtonsButtonStyles;
    const { isOpened } = this.state;
    console.log(isOpened);
    const buttonsListStyles = classNames(
        buttonList,
        {[`${hidden}`]: isOpened},
    );
    return (
        <div className={styles}
             onClick={this.displayOrHideButtonsList}>
          {label}
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