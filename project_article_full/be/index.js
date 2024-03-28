const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.post('/login', (req, res) => {
	console.log('Received data from myForm2:', req.body); 
	res.send('Data received successfully!');
});
app.post('/article', (req, res) => {
	console.log('Received data from article:', req.body); 
	res.send('Data received successfully!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
