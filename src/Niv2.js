import React from 'react'
import Niv3 from './Niv3'

const Niv2 = (props) => {
  return (
    <div>
    <h4> Niveau 2 (func): {props.niv1State.data3}, {props.niv1State.data4} et {props.niv1State.data5}</h4>
    <Niv3 niv2State = {props.niv1State}/>
    </div>
  )
}

export default Niv2
