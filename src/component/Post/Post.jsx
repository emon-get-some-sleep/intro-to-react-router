import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

const Post = () => {
    const posts = useLoaderData();
    // console.log(posts);
    return (
        <div>
            <h2>All Posts are here {posts.length}</h2>
            <div>
                {
                    posts.map(post => <SinglePost key={post.id} post={post}></SinglePost>)
                }
            </div>
        </div>
    );
};

export default Post;