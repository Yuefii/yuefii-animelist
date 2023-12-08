import prisma from "@/app/libs/prisma"

export async function POST(request: any) {
    const { mal_id, user_email, title, image } = await request.json()
    const data = { mal_id, user_email, title, image }

    const createFavorite = await prisma.favorite.create({ data })
    if (!createFavorite) return Response.json({ status: 500, isCreated: false })
    else return Response.json({ status: 200, isCreated: true })
}