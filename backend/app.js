import express from 'express'
import userRoute from './routes/user.route.js'
import cors from 'cors'

const app = express();

// Here we'll configure all the middlewares

app.use(cors({
    origin: "http://localhost:5173/",
    credentials: true
}))

// This is body parser middleware it will parse the incoming data from frontend into json
app.use(express.json())

// We may implement searching trough all the available posts in db so we can use this middleware to get the querries from the url.
app.use(express.urlencoded({ extended: true }));

// Here we'll configure all the relevent routes


app.use("/api/user", userRoute)

app.use("/", (req, res) => {
    return res.json({
        message: "I am perfectly working"
    })
})
export default app;
