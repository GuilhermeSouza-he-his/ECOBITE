import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRouter.js"
import userRouter from "./routes/userRouter.js"
import cartRouter from "./routes/cartRouter.js"
import 'dotenv/config'



// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// DB connection
connectDB()

// api endpoint
app.use("/api/food",foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/order", orderRouter)
app.use("/api/cart", cartRouter)

app.get("/", (req, res)=>{
    res.send("API Working")
})

app.listen(port, (req, res)=>{
    console.log(`Server Started on http://localhost:${port}`)
})