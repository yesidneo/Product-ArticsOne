import {Suspense, useState} from 'react'

import './App.css'
import Scene from './components/Scene'
import Labels from './components/Labels'


function App() {
 

  return (
    <div className="scene_container"> 
     <Suspense fallback={null}>
          <Scene/>
      </Suspense>
     <Labels/>
    </div>
  )
}

export default App
