import React from 'react';


// export const metadata = {
//     title: "Posts Details",
//     description: "This is from Post Details",
   
//   };


const getDetailsPost =  async (id) => {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   const data = await res.json()
   return data;
}


export const generateMetadata = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await res.json()

    return {
        title: {
            absolute: ` ${postData.title}`
        }
    }
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