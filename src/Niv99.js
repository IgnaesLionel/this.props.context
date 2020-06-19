import React, { Component } from 'react'
import MyContext from './MyContext'

class Niv99 extends Component {

  state = {
    return : 'remonter enfants vers Parent'
  }

  render() {
  //console.log (this.props)
    return (
      <MyContext.Consumer>
        {data => {return(<h3> Niveau 99 {data.data8}</h3>)}}


      </MyContext.Consumer>
    )
  }
}

export default Niv99
