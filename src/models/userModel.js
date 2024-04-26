import { PrismaClient } from '@prisma/client'
import { z } from "zod"

const prisma = new PrismaClient()

const userSchema = z.object({
    id: z.number({
        required_error: "ID é obrigatório.",
        invalid_type_error: "O ID deve ser um número inteiro.",
      }),
    name: z.string({
        required_error: "Nome é obrigatório.",
        invalid_type_error: "O nome deve ser uma string.",
      })
      .min(3, {message: 'O nome deve ter no mínimo 3 letras.'})
      .max(200, {message: 'O nome deve ter no máximo 200 caracteres.'}),
    email: z.string({
        required_error: "O email é obrigatório.",
        invalid_type_error: "O email deve ser uma string.",
      })
      .email({message: 'Email inválido.'})
      .max(500, {message: 'O email deve ter no máximo 500 caracteres.'}),
    pass: z.string({
        required_error: "A senha é obrigatória.",
        invalid_type_error: "A senha deve ser uma string.",
      })
      .min(6, {message: 'A senha deve ter no mínimo 6 caracteres.'}),
    avatar: z.string({
        required_error: "O avatar é obrigatório.",
        invalid_type_error: "O avatar deve ser uma string.",
      })
      .url({message: 'Url do avatar inválida.'})
      .max(1000, {message: 'O avatar deve ter no máximo 1000 caracteres.'})
})

const validateUserToCreate = (user) => {
    const partialUserSchema = userSchema.partial({id: true})
    return partialUserSchema.safeParse(user)
}

const validateUserToUpdate = (user) => {
    const partialUserSchema = userSchema.partial({pass: true})
    return partialUserSchema.safeParse(user)
}

const validateUserToLogin = (user) => {
    const partialUserSchema = userSchema.partial({id: true, name: true, avatar: true})
    return partialUserSchema.safeParse(user)
}

const getAll = async () => {
    return await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }
    })
}

const getById = async (id) => {
    return await prisma.user.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }
    })
}

const getByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: {
            email
        }
    })
}

const create = async (user) => {
    return await prisma.user.create({
        data: user,
        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }
    })
}

const remove = async (id) => {
    return await prisma.user.delete({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }
    })
}

const edit = async (user) => {
    return await prisma.user.update({
        where: {
            id: user.id
        },
        data: user,
        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }
    })
}


export default {getAll, getById, getByEmail, create, remove, edit, validateUserToCreate, validateUserToUpdate, validateUserToLogin}