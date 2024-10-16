import { getPosts } from '@/services/postApi';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Posts",
    description: "Post Page",
    keywords: ["Post", "Post Page", "Meals"]
  };




const PostPage = async () => {
    
    const postsData = await getPosts();
    console.log(postsData);

    return (
        <div>
            <h2>All Posts</h2>
            <div className='grid grid-cols-3 gap-6 '>
                {
                    postsData?.slice(0,20)?.map(({title, body, id})=>(
                        <div className='border-2 p-6'>
                            <h6> Title: {title}</h6>
                            <h6> Description: {body}</h6>
                            <button> <Link href={`/posts/${id}`}> See Details </Link> </button>
                        </div>
                    ))
                }
            </div>
           
        </div>
    );
};

export default PostPage;