import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { useNavigate } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-16 mt-10 bg-gradient-to-r from-blue-50 to-indigo-100 text-center rounded-xl shadow-md">
                <Container>
                    <div className="flex flex-col items-center justify-center space-y-6">
                    <h1 className="text-4xl font-extrabold text-indigo-700">
                        Join Us to Explore Amazing Posts! 🚀
                    </h1>
                    <p className="text-lg text-gray-600">
                    Sign in to explore tons of exciting posts!
                    </p>
                    <button onClick={() => navigate('/login')}
                        className="mt-4 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-lg"
                    >
                        Login Now
                    </button>
                    </div>
                </Container>
            </div>

        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home