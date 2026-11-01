import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ImportConponet from './R003_ImportConponent'
//import LifecycleEx from './R004_LifeCycleEx'
//import LifecycleEx from './R005_LifeCycleEx'
//import LifecycleEx from './R006_LifeCycleEx'
//import LifecycleEx from './R007_LifeCycleEx'
import LifecycleEx from './R008_LifeCycleEx'


function App() {
  return (
    <div>
      <h1>Hello React 200제</h1>
      <p>CSS 적용하기</p>
      <ImportConponet></ImportConponet>
      <LifecycleEx
        prop_value = 'FromApp.jsx'
        />
    </div>
  )
}

export default App