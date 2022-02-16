import React, { Component } from 'react'
import Logo from './Logo';
import Sidelinks from './Sidelinks';
import Social from './Social';

class Sidebar extends Component {

  state={
    tabs : ['About me','Skills','Certifications','portfolio','Volunteering','Connect with Rosh']
  }

  
  render() {
    return (
      <div>
          <div className='sidebar'>
          <Logo />
          {this.state.tabs.map(tab => <Sidelinks tab = {tab}/>)}
           <Social /> 
           <div>© yrs_rosh 2022</div>
          </div>
      </div>
    )
  }
}

export default Sidebar