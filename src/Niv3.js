import React, { Component } from 'react'

class Niv3 extends Component {

  state = {
    return : 'remonter enfants vers Parent'
  }

  render() {
  //console.log (this.props)
    return (
      <div>
        <h4> Niveau 3 (class): {this.props.niv2State.data1} {this.props.niv2State.data2}</h4>
        <h3> Niveau 3 : {this.state.return}</h3>
      </div>
    )
  }
}

export default Niv3
