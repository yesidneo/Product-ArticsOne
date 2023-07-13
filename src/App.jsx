import {Suspense, useState,useEffect} from 'react'

import './App.css'
import Scene from './components/Scene'
import Labels from './components/Labels'


function App() {

  

  return (
    <div className="scene_container"> 
    <Labels/>
     <Suspense fallback={null}>
          <Scene/>
      </Suspense>
     
    </div>
  )
}

export default App
