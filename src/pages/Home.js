import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = ({isAuth}) => {
let navigate = useNavigate()
  useEffect(() => {
    if (!isAuth) {
      navigate("/login")
    }
    }, [])
  return (
    <div></div>
  )
}
