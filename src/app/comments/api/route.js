export async function GET(params) {
    return Response.json({
         comments
    })}
export async function POST(request) {
    const newComment = request.json()
    comments.push({
        id : comments.length + 1,
        text: newComment.text
    })
    return Response.json({
         message: 'New comment added',
         comments 
    })}




    const comments = [
        {
            id: 1,
            text: "Comment 1"
        },
        {
            id : 2,
            text : "Comment 2"
        },
        {
            id : 3,
            text : "Comment 3"
        },
        {
            id : 4,
            text : "Comment 4"
        }
    ]