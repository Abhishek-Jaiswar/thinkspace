import express from 'express'
import userRoute from './routes/user.route.js'
import postRoute from './routes/post.routes.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express();

// Here we'll configure all the middlewares

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser())

app.use("/api/user", userRoute)
app.use('/api/post', postRoute)

export default app;
