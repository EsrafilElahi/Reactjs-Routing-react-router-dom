import React from 'react'

import About from './Component/About'
import ContactUs from './Component/ContactUs'
import Nav from './Component/Nav'
import Shop from './Component/Shop'
import Home from './Component/Home'
import Item from './Component/Item'
import NotFound from './Component/NotFound'

import { Switch, Route } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/shop/:id' component={Item} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App;
