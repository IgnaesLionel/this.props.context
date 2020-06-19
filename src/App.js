import React, { Component } from 'react'
import './App.css';
import Niv1 from './Niv1'
import Niv99 from './Niv99'
import MyContext from './MyContext'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data1 : "Homer Simpson",
      data2 : "Marge Bouvier",
      data3 : "Bart Simpson",
      data4 : "Lisa Simpson",
      data5 : "Maggie Simpson",
      data6 : "Abraham Simpson",
      data7 : "Mona Olsen"
    }
  }

  render() {

    const newdata = {data8 : "Envoye de données avec Context"}

    return (
      <div className="style">
            <h1 className='App'> Propagation des données </h1>
            <h3> Niveau 0  (class): {this.state.data6} et {this.state.data7}</h3>
            <Niv1 parentState={this.state} />
            <MyContext.Provider value={newdata}>
              <Niv99/>
            </MyContext.Provider>


      </div>)}}

export default App;
