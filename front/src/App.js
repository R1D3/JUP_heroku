import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import End from './Screens/End'
import Game from './Screens/Game'
import Home from './Screens/Home'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route exact path='/home' component={Home} />
        <Route exact path='/game' component={Game} />
        <Route exact path='/end' component={End} />
      </Switch>
    </Router>
  )
}

export default App
