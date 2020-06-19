import React from 'react'
import Niv2 from './Niv2'

const Niv1 = (props) => {
//console.log(props)
//parentState:
//data1: "Homer Simpson"
//data2: "Marge Simpson"
//data3: "Bart Simpson"
//data4: "Lisa Simpson"
//data5: "Maggie Simpson"
//data6: "Abraham Simpson"
//data7: "Mona Olsen"
//__proto__: Object
//__proto__: Object
//
  return (
    <div>
    <h3> Niveau 1 (func): {props.parentState.data1} et {props.parentState.data2}</h3>
    <Niv2 niv1State={props.parentState}/>
    </div>
  )
}

export default Niv1
