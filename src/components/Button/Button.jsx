import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends React.PureComponent
{
  render()
  {
    const { children, ...rest } = this.props;
    const className = 'mzw-button';
    return <button {...rest} className={className}>{children}</button>;
  }
}

Button.defaultProps = {
  selected: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
};

export default Button;
