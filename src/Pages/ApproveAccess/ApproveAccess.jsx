import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './ApproveAccess.css';

class ApproveAccess extends React.PureComponent
{
  render()
  {
    return (
      <div className="mzw-not-found">
        <p>Please approve access in the Monzo App!</p>
      </div>
    );
  }
}

ApproveAccess.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(ApproveAccess);
