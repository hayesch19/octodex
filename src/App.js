import React, { Component } from 'react'
import NavBar from './components/NavBar'
import DisplayOctocat from './components/DisplayOctocat'

class App extends Component {
  render() {
    console.log('Octodex')
    return (
      <main>
        <NavBar />
        <section>
          <DisplayOctocat />
        </section>
      </main>
    )
  }
}

export default App
