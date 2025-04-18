import React from 'react'
import './postInteractions.css'
import Image from '../image/Image'

const PostInteractions = () => {
  return (
    <div className='postInteractions'>
        <div className="interactionicons ">
        <Image path="/general/react.svg" alt="" />
        <Image path="/general/share.svg" alt="" />
        <Image path="/general/more.svg" alt="" />
        </div>
        <button>Save</button>
    </div>
  )
}

export default PostInteractions