import express from "express";
import cors from "cors";
import mongoose from "mongoose";


const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/search-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then(() => {
    // Connected successfully
    console.log('Connected to the MongoDB database');
    
})
.catch((err) => {
    // Connection error
    console.error('Failed to connect to the database:', err);
});



// Set up routes
app.use('/search', searchRoutes);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });