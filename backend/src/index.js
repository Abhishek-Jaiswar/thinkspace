import app from "./app.js";
import connectDb from "./config/db.js";
import { configDotenv } from "dotenv";
configDotenv()

const PORT = process.env.PORT || 8000

const startServer = async () => {
    try {
        await connectDb()
        .then(() => {
            console.log("Database status perfect");
        })

        app.listen(PORT, () => {
            console.log(`Server is listening on port: http://localhost:${PORT}`);
            
        })
    } catch (error) {
        throw new Error("Failed to start server, please check the configurations", error);
    }
}

await startServer()