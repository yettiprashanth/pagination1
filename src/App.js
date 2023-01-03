import React,{ useEffect,useState } from 'react';
import './App.css';
import axios from 'axios';
 
import Post from './Post';
import Pagenation from './Pagenation';
function App() {
  const [posts,setPosts]=useState([])
  const [loading,setLoading]=useState(false)
  const [currentPage,setCurentPage]=useState(1)
  const[postsParPage]=useState(10);
  useEffect(()=>{
   const fetchPosts=async()=>{
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(res.data)
    setLoading(false)
   
   }
  
   fetchPosts();
   
   
  },[]) ;
  const indexOfLostPost=currentPage*postsParPage;
  const indexOfFirstPost=indexOfLostPost-postsParPage;
  const currentPosts=posts.slice(indexOfFirstPost,indexOfLostPost)
 const paginate=pageNumber=>setCurentPage(pageNumber)
  return (
   <div className='container mt-2 App'>
     <h1 className='text-primary mb-3'>My Blogs</h1> 
     <Post posts={currentPosts} loading={loading}/>
     <Pagenation postsParPage={postsParPage} totalPosts={posts.length} paginate={paginate}/>
   </div>
    )
}

export default App;
