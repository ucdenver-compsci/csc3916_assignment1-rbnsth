const express = require('express');
const app = express();

// Middleware to parse POST body as JSON
app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});