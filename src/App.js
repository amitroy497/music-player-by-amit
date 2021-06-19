import './App.css'
import Home from './components/home'
import UploadSong from './components/uploadSong'
import PlaySong from './components/playSong'
import PageNotFound from './components/pageNotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact={true}>
            <Home />
          </Route>
          <Route path='/upload-song'>
            <UploadSong />
          </Route>
          <Route path='/play-song'>
            <PlaySong />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
