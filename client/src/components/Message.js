import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Message({ msg }) {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className='alert alert-info alert-dismissible fade show d-flex' role='alert'>
          <div className='flex-grow-1'>{msg}</div>
          <button
            type='button'
            className='close'
            onClick={handleClose}
            aria-label='Close'
            style={{
              position: 'block',
              background: 'none',
              border: 'none',
              color: '#2B5F6D'
            }}>
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
      )}
    </>
  );
}

Message.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Message;
