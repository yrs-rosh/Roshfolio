import React from 'react'

import {Facebook, GitHub, Instagram, Twitter, LinkedIn} from '@mui/icons-material/';

function Social() {
  return (
    <div className='social'>
    <a href='https://facebook.com' target='_blank'><Twitter sx={{ fontSize: 30}} /></a>
    <a href='https://facebook.com' target='_blank'><LinkedIn sx={{ fontSize: 30}} /></a>
    <a href='https://facebook.com' target='_blank'><GitHub sx={{ fontSize: 30}} /></a>
    <a href='https://facebook.com' target='_blank'><Instagram sx={{ fontSize: 30}} /></a>
    <a href='https://facebook.com' target='_blank'><Facebook sx={{ fontSize: 30}} /></a>
    
    </div>
  )
}

export default Social