import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.scss'
import HomePage from "./presentation/pages/HomePage"
import Header from "./presentation/component/Header"
import Footer from "./presentation/component/Footer"

const App: React.FC = () => {
  return (
    <div className="container">
      <Header/>
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
