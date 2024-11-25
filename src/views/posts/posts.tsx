import React, { useState } from 'react'
import './posts.css'
import PostCreate from '../../components/posts/post-create/postCreate'
import PostList from '../../components/posts/post-list/postList'

const Posts:React.FC = () => {
    const [showPostCreate, setShowPostCreate] = useState<boolean>(false);

    const togglePostCreate= () => {
        setShowPostCreate(!showPostCreate);
    }

    return (
        <div>
            <div className="pb-sm">
                {
                    showPostCreate ? (
                        <div>
                            <button className="btn-secondary-sm" onClick={togglePostCreate}>Back</button>
                        </div>
                    ):(
                        <div className="flex justify-end">
                            <button className="btn-secondary-sm" onClick={togglePostCreate}>New Post</button>
                        </div>
                    )
                }
            </div>

            {
                showPostCreate ? <PostCreate /> : <PostList />
            }
        </div>
    )
}

export default Posts;