import express from 'express'
import userRoutes from "./routes/userRoutes";
import { Request, Response } from 'express';


const app = express();
const PORT = 3000; // ❌ hardcoded value

app.use(express.json());
app.use('/api', userRoutes)

app.get("/", (req: Request, res: Response) => {
    res.send("Node.js + TypeScript + Express Demo Server");
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})