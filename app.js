const express = require('express')
const app = express()
const path = require('path')
cons port=process.env.PORT||8000


app.get('/', function(req,res){res.send('Hola Mundo!')

})

app.get('/home', function(reque,resp){resp.sendFile(path.join(__dirname, 'views/index.html'))})
app.get('/login', function(req,res){res.sendFile(path.join(__dirname, 'views/login.html'))})
app.get('/register', function(req,res){res.sendFile(path.join(__dirname, 'views/register.html'))})

app.use(express.static('public'))

app.get('*', function(req,res){
    res.send('NOT FOUND')
})

app.listen(process.env.8000, ()=> {
    console.log('Pagina corriendo en http://localhost:8000')

})

