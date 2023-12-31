const express = require('express');
const path = require('path')

const app = express()
const port = 3000;

app.use(express.static('./public'))

// app.get('/', (req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./public/index.html'));
// });

app.get('/about',(req,res)=>{
    res.send('About')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    console.log(`localhost:${port}`);
});
