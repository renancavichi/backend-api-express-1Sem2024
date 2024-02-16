const logger = (req, res, next) => {
    console.log('Olá! Passei pelo logger!')
    next()
}

export default logger