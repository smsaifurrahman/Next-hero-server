
export const dynamic = 'force-dynamic'

export async function GET(params) {
        return Response.json({
            currentTime: new Date().toLocaleTimeString()
        })
}