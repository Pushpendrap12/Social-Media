
import './App.css'
import Header from './component/Header'
import Footer from './component/footer'
import Sidebaar from './component/sidebaar'
import CreatePost from './component/CreatePost'
import "bootstrap/dist/css/bootstrap.min.css"
import PostList from './component/Postlist'
import { useState } from 'react'
import PostListProvider from './store/store1'

function App() {
  const [selectedtab,setSelectedtab] = useState("Home");

  return (
  <PostListProvider>
  <div className="app-container">
  <Sidebaar selectedtab={selectedtab} setSelectedtab={setSelectedtab}></Sidebaar>
  <div className="content">x
  <Header></Header>
  {selectedtab=='Home'?<PostList></PostList>:<CreatePost></CreatePost>}
  <Footer></Footer>
  </div>
  </div>
  </PostListProvider>
  )
}
export default App;
