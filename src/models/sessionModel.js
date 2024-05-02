import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const create = async (session) => {
    return await prisma.session.create({
        data: session
    })
}

const remove = async (userId, token) => {
    return await prisma.session.delete({
        where: {
            userId,
            token
        }
    })
}


export default {create, remove}