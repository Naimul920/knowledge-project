import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [blogs, setBlogs]=useState([]);

  const handelAddToBookmark = (title)=>{
    const newBlogs = [...blogs , title];
    setBlogs(newBlogs);
     
  }
  // console.log(blogs);
  return (
    <>
      <Header></Header>
      <div className='flex p-5 gap-10'>
      <Blogs handelAddToBookmark ={handelAddToBookmark}></Blogs>
      <Bookmarks blogs = {blogs}></Bookmarks>
      </div>
    </>
  )
}

export default App
