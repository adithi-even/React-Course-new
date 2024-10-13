import React from 'react'
import appwriteService from '../appwrite/config' //we get infomation from here
import {Link} from 'react-router-dom'

function PostCard({
    $id,//$id is the name of that particular variable
    title, 
    featuredImage
}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-md p-4 '>
            <div className='w-full justify-center mb-4'>
                <img //TODO: check and underStand  
                 src={appwriteService.getFilePreview(featuredImage)} alt={title} 
                 className='rounded-xl' />

            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    
    </Link>  )
}

export default PostCard