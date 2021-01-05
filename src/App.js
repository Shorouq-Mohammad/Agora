import React from 'react'
import './App.css'
import { observer } from 'mobx-react'
import Market from './components/Market'

function App() {
  return (
    <div className="App">
      <Market />
    </div>
  )
}

export default observer(App)
