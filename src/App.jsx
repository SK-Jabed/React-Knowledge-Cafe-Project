import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {


  return (
    <>
      <Header></Header>
      <main className='container mx-auto w-11/12 md:grid grid-cols-3 gap-3'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </main>
      
    </>
  )
}

export default App
