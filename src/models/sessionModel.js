import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const create = async (session) => {
    console.log(session)
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

const getByToken = async (token) => {
    return await prisma.session.findUnique({
        where: {
            token
        }
    })
}

const edit = async (session) => {
    return await prisma.session.update({
        where: {
            id: session.id
        },
        data: session
    })
}


export default {create, remove, edit, getByToken}