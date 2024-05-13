import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg";

const port = 3000;
const app = express();

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "12345",
    port: 5432,
});
 
let quiz = [
    { country: "France", capital: "Paris" },
    { country: "United Kingdom", capital: "London" },
    { country: "United States of America", capital: "Washington, D.C" },
  ];
db.connect();

db.query("SELECT * FROM capitals", (err, res) => {
    if (err) {
      console.error("Error executing query", err.stack);
    } else {
      quiz = res.rows;
    }
    db.end();
  });

 

  
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Server is running..');
  });
app.get('/getCountry', (req, res) => {
    // Get a random country from the quiz array
    const randomIndex = Math.floor(Math.random() * quiz.length);
    const randomCountry = quiz[randomIndex];
    
    // Send the random country as the response
    res.json(randomCountry);
});

app.post('/submit',(req,res) =>{
    const userAnswer = req.body.answer;
        
    res.send('Server received your answer: ' + userAnswer);
});


app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
});




