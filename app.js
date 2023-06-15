const express = require('express');
const app = express();
const port = 3000;

const commentsRouter = require('./routes/comments.js') 
const postsRouter = require('./routes/posts.js') 

const connect = require('./schemas'); 
connect(); 

app.use(express.json()); // 전역 미들웨어 body-parser

// localhost:3000/api
app.use("/", [postsRouter, commentsRouter]); 

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.listen(port, () => {
    console.log(port, "포트로 서버가 열렸어요!");
});
