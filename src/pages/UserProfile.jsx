import React from 'react'
import {Link} from 'react-router-dom'
import Avatar from '../images/avatar15.jpg'
import {FaEdit} from "react-icons/fa"
import { useState } from 'react'
import {FaCheck} from "react-icons/fa";
const UserProfile = () => {
  const [avatar,setAvatar]=useState('')
  return (
    <section className='profile'>
<div className='container profile_container'>
  <Link to={`/myposts/sdfsdf`}className='btn'>
My Posts
  </Link>
  <div className='profile_details'>
    <div className='avatar_wrapper'>
      <div className='profile_avatar'>
        <img src={Avatar} alt=""/>
      </div>
      <form className='avatar_form'>
<input type='file' name='avatar' id='avatar' onChange={e=>setAvatar(e.target.files[0])} accept="png,jpg,jpeg"/>
<label htmlFor ="avatar"><FaEdit/></label>
      </form>
      <button className='profile_avatar-btn'><FaCheck/></button>
    </div>
    <h1>Ernest Acheiver</h1>
  </div>
</div>
    </section>
  )
}

export default UserProfile