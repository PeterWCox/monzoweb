import React from 'react';
import PropTypes from 'prop-types';
import './Chip.css';

class Clip extends React.PureComponent
{
  render()
  {
    return (
      <div className="mzw-chip">
        {this.props.children}
      </div>
    );
  }
}

Clip.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Clip;
