export const registerUser = (req, res) => {
    try {
        return res.json({
            message: "Hello world",
            status: 201
        })
    } catch (error) {
        return res.json({error})
    }
}