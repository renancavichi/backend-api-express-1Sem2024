const login = async (req, res) => {
    try{
        res.json({message: "Login"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default login