import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block hover:scale-[1.02] transition-transform duration-200">
      <div className="w-full bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl border border-gray-300 hover:border-indigo-500 transition-colors duration-300">
        <div className="w-full aspect-video overflow-hidden rounded-xl mb-4">
          <img
            src={appwriteService.getFileView(featuredImage)}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {title}
        </h2>
      </div>
    </Link>
  )
}

export default PostCard
