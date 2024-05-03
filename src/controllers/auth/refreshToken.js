import sessionModel from "../../models/sessionModel.js"
import userModel from "../../models/userModel.js"
import { SECRET_KEY, TOKEN_EXPIRES_IN, DB_TOKEN_EXPIRES_DAYS } from "../../config.js"
import jwt from 'jsonwebtoken'

const refreshToken = async (req, res) => {
    try{
        let token = false
        token = req.cookies?.token
        token = req.headers?.authorization?.split(' ')[1]

        if(!token){
            return res.status(401).json({
                error: `Usuário não autenticado`
            })
        }

        try {
            console.log(token, SECRET_KEY)
            const {id , name} = jwt.verify(token, SECRET_KEY)
            return res.json({ message: 'Token ativo!', user: {id , name}})
        } catch (error) {
            console.log(error)
            if (error.name === 'TokenExpiredError') {
                //obter os dados da session pelo token
                const session = await sessionModel.getByToken(token)
                
                //se não achar o token: limpar o cookie, msg erro
                if(!session){
                    res.clearCookie('token', { httpOnly: true, sameSite: 'None', secure: true })
                    return res.status(401).json({
                        error: 'Sessão não encontrada, faça o login novamente!', code: "logout" 
                    })
                }

                //verificar se a data de atualiação é < que 1 dia
                const now = new Date()
                now.setDate(now.getDate() - DB_TOKEN_EXPIRES_DAYS)

                if(session.createdAt < now){
                    //se não for mais valido: remover sessao, limpar o cookie, msg erro
                    await sessionModel.remove(session.userId, token)
                    res.clearCookie('token', { httpOnly: true, sameSite: 'None', secure: true })
                    return res.status(401).json({ error: 'Sessão expirada, faça o login novamente!', code: "logout"})
                }
            
                //se verdadeiro gerar novo token, atualizar os dados da sessao, gerar novo cookie
                const userFound = await userModel.getById(session.userId)
                if(!userFound){
                    return res.status(500).json({ error: 'Usuário da sessão não encontrado!', code: "logout"})
                }
               
                const newToken = jwt.sign({ 
                    id: session.userId, 
                    name: userFound.name
                },
                SECRET_KEY, {
                    expiresIn: TOKEN_EXPIRES_IN 
                })
        
                //gerar o cookie para web (3 meses) 3 * 30 * 24 * 60 * 60 * 1000
                res.cookie('token', newToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 })
        
                // fix timezone -3
                let date = new Date();
                date.setHours(date.getHours() - 3)
        
                await sessionModel.edit({
                    id: session.id,
                    userId: session.userId,
                    token: newToken,
                    createdAt: date
                })

                return res.json({
                    message: "Token atualizado com sucesso!",
                    newToken,
                    user: {
                        id: userFound.id,
                        name: userFound.name,
                        email: userFound.email,
                        avatar: userFound.avatar
                    }
                })
            }
            return res.status(401).json({ error: 'Token Inválido.', code: 'logout'})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default refreshToken