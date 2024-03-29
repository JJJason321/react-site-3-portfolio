import React from 'react'

import Resume from '../../assets/Feng-Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Get my Resume</a>
        <a href='#contact' className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default CTA