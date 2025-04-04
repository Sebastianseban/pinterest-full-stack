import React from 'react'
import './topBar.css'
import UserButton from '../userButton/UserButton'
import Image from '../image/Image'

const TopBar = () => {
  return (
    <div className='topBar'>
        {/* SERACH */}

        <div className='search'>
            <Image path="general/search.svg" alt="" />
            <input type="text"  placeholder='search'/>
        </div>

        {/* USER */}

        <UserButton/>


    </div>
  )
}

export default TopBar