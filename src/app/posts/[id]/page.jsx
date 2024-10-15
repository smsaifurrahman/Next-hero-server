import React from 'react';

const getDetailsPost =  async (id) => {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   const data = await res.json()
   return data;
}

const PostDetailsPage = async ({params}) => {

        const {title, body} = await getDetailsPost(params.id)
    return (
        <div>
            <h2>Post Details: {params.id} </h2>
            <h2>Title: {title}</h2>
            <h2>Description : {body}</h2>
        </div>
    );
};

export default PostDetailsPage;