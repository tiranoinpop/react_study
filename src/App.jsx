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
import Es6 from './R009_Es6'
import Variable from './R010_Variable'
import ClassPrototype from './R012_Class&Prototype'
import ArrowFunc from './R013_ArrowFunction'
import ForEach from './R014_ForEach'
import Map from './R015_Map'
import Jquery from './R016_Jquery'

function App() {
  return (
    <div>
      <h1>Hello React 200제</h1>
      <p>CSS 적용하기</p>
      <ImportConponet></ImportConponet>
      <LifecycleEx
        prop_value = 'FromApp.jsx'
        />
      <Es6 />
      <Variable />
      <ClassPrototype/>
      <ArrowFunc />
      <ForEach />
      <Map />
      <Jquery />
    </div>
  )
}

export default App