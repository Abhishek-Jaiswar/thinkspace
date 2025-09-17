import express from 'express'
import userRoute from './routes/user.route.js'
import cors from 'cors'

const app = express();

// Here we'll configure all the middlewares

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute)

app.use("/", (req, res) => {
    return res.json({
        message: "I am perfectly working"
    })
})
export default app;
