import React from 'react'
import {Header} from './components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import HomePage from './pages/Home'
import SettingPage from './pages/settings'
import './App.scss'

const App = () => {
  return (
    <Router>
      <Header/>
      <div className="container">
<Switch>
  <Route path="/" exact component={HomePage}/>
  <Route path="/settings"  component={SettingPage}/>
</Switch> 
      </div>
    </Router>
  )
}

export default App
