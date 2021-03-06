import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'


export const CreatePost = ({isAuth}) => {
const [title, setTitle] = useState("")
const [postText, setPostText] = useState("")
let navigate = useNavigate()
const postsCollectionRef = collection(db, "posts")


const createPost = async () => {
  await addDoc(postsCollectionRef,
    {title: title,
    postText: postText,
    author: {name: auth.currentUser.displayName , id: auth.currentUser.uid }})
    navigate("/")
}

useEffect(() => {
if (!isAuth) {
  navigate("/login")
}
}, [])

  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
    <h1>Create A Post</h1>
    <div className='inputGroup'>
      <label>Title:</label>
      <input placeholder='Title...' onChange={(event) => {setTitle(event.target.value)}}/>
    </div>
    <div className='inputGroup'>
      <label>Post:</label>
      <textarea placeholder='Post...' onChange={(event) => {setPostText(event.target.value)}}/>
    </div>
    <button onClick={createPost}>Submit Post</button>
    </div>
    </div>
  )
}