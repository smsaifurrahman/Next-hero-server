export async function PATCH(request, {params}) {
    console.log(params.id);
    const body = await request.json()
    const index = comments.findIndex(c => c.id === params.id);
    comments[index] = {
        text: body.text
    }
    return Response.json({
       message: 'Comment updated'
    })}



    export async function DELETE(request, {params}) {
        const newComments = comments.filter()
    }


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