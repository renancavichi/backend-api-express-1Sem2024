import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getAll = async () => {
    return await prisma.user.findMany()
}

const getById = async (id) => {
    return await prisma.user.findUnique({
        where: {
            id
        }
    })
}

const create = async (user) => {
    return await prisma.user.create({
        data: user
    })
}

const remove = async (id) => {
    return await prisma.user.delete({
        where: {
            id
        }
    })
}

const edit = async (user) => {
    return await prisma.user.update({
        where: {
            id: user.id
        },
        data: user
    })
}


export default {getAll, getById, create, remove, edit}