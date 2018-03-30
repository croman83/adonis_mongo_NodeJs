import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {
  render(){
    return (
      <div>
        <Router>
          <ul>
            <li><Link to='test'>test</Link></li>
            <li><Link to='new'>new</Link></li>
          </ul>
        </Router>
      </div>)
  }
}

export default App
