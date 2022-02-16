import React, { Component } from 'react'

class Sidelinks extends Component {
  render() {
    return (
      <div className='sidelinks'>
        {this.props.tab}
      </div>
    )
  }
}

export default Sidelinks