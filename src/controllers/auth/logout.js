const logout = async (req, res) => {
    try{
        res.json({message: "Logout"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default logout