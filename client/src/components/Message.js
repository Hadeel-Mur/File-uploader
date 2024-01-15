import React from 'react'
import PropTypes from 'prop-types'

function Message({msg}) {
  return (
    <div className='alert alert-info alert-dismissible fade show fade show' role='alert'>
        {msg}
    <div
       type='button'
       className='close'
       data-dismiss='alert'
       aria-label='close'>
        {/* <span aria-hidden='true'>$times;</span> */}
    </div>
    </div>
  )
}

Message.propTypes = {
    msg: PropTypes.string.isRequired
}

export default Message
