import React from 'react'

import {Facebook, GitHub, Instagram, Twitter, LinkedIn} from '@mui/icons-material/';

function Social() {
  return (
    <div className='social '>
    <a className='socmed' href='https://twitter.com/yrs_rosh' target='_blank'><Twitter sx={{ fontSize: 30}} /></a>
    <a className='socmed' href='https://www.linkedin.com/in/yrsrosh/' target='_blank'><LinkedIn sx={{ fontSize: 30}} /></a>
    <a className='socmed' href='https://github.com/yrs-rosh' target='_blank'><GitHub sx={{ fontSize: 30}} /></a>
    <a className='socmed' href='https://www.instagram.com/yrs_rosh/' target='_blank'><Instagram sx={{ fontSize: 30}} /></a>
    <a className='socmed' href='https://www.facebook.com/yrsrosh/' target='_blank'><Facebook sx={{ fontSize: 30}} /></a>
    
    </div>
  )
}

export default Social