import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore'
import { auth, db } from '../firebase-config'


export const Home = ({isAuth}) => {
  
  
  let navigate = useNavigate()
  const [postLists, setPostList] = useState([])
  const postsCollectionRef = collection(db, "posts")
  
useEffect(() => {
const getPosts = async () => {
  const data = await getDocs(postsCollectionRef)
  setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
}
getPosts()
    }, [])

    const deletePost = async (id) => {
      const postDoc = doc(db, "posts", id )
      await deleteDoc(postDoc)
      window.location.reload()
      
    }
  return (
    <div className='homePage'> {postLists.map((post) => {
      return <div className='post'>
        <div className='postHeader'>
        <div className='title'>
          <h1>{post.title}</h1>
        </div>
        <div className='deletePost'>
        {isAuth && post.author.id === auth.currentUser.uid && (
        <button 
          onClick={() => {
            deletePost(post.id)
          }}
          > x 
          </button>
        )}
        </div>
        </div>
        <div className='postTextContainer'>
          {post.postText}
        </div>
        <h3>@{post.author.name}</h3>
        </div>
    })}

    </div>
  )
}
