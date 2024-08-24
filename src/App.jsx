import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className='md:flex '>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
      
      
      
    </>
  )
}

export default App
