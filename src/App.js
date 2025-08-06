import React from 'react'
import Videosection from './components/Pages/videosection'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TalktoSeller from './components/Pages/talktoseller'
import ScrollUp from './components/Modules/scrollup'
import QuickMatch from './components/Pages/quickmatch'
import Community from './components/Pages/community'

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollUp />
        <Routes>
          <Route path='/' element={<Videosection />} />
          <Route path='/talktoseller' element={<TalktoSeller />} />
          <Route path='/quickmatch' element={<QuickMatch />} />
          <Route path='/community' element={<Community />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
