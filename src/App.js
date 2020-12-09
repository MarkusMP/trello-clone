import React from 'react'
import {Header} from './components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import HomePage from './pages/Home'
import SettingPage from './pages/Settings'
import {useSelector} from 'react-redux'
import './App.scss'

const App = () => {
  const color = useSelector(state => state.background.color)

  return (
    <Router>
      <Header/>
      <div className="cont" style={color ? {backgroundColor: color} : {backgroundColor: '#fff'} }>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/settings"  component={SettingPage}/>
          </Switch>         
      </div>
    </Router>
  )
}

export default App
