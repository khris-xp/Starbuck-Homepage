const express = require('express');
const app = express();
const PORT = 5000;

// Static Files
app.use(express.static('public'));
app.use('/css' , express.static(__dirname + '/public/css'));
app.use('/js' , express.static(__dirname + '/public/js'));
app.use('/img' , express.static(__dirname + '/public/img'));

// Set Views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { text : 'About'});
})


app.listen(PORT);

console.log(`Server is running on PORT : ${PORT}`);