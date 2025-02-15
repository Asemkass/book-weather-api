import express from "express"; 
import mongoose from "mongoose"; 
import dotenv from "dotenv"; 
import bookRouter from "./routes/bookRouter.js"; 
import weatherRouter from "./routes/weatherRouter.js"; 
 
dotenv.config(); 
const app = express(); 
const SERVER_PORT = process.env.PORT || 5000; 
 
app.use(express.json()); 
app.use("/books", bookRouter); 
app.use("/weather", weatherRouter); 
 
const establishDBConnection = async () => { 
  try { 
    await mongoose.connect(process.env.MONGO_URI); 
    console.log("Connected to MongoDB"); 
     
    app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`)); 
  } catch (err) { 
    console.error("Database connection error:", err); 
  } 
}; 
 
app.get('/books', async (req, res) => {
  try {
      const books = await Book.find(); // Получаем данные из MongoDB
      res.json(books);
  } catch (error) {
      res.status(500).json({ message: 'Ошибка сервера', error });
  }
});


establishDBConnection();