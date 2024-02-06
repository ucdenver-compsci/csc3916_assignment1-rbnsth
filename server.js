const express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.text({
    type: function(req) {
        return 'text';
    }
}));

// Parse bodies of POST requests
app.post('/', (req, res) => {
    console.log(req.body);
    res = res.status(200);
    var contentType = req.get('content-type');
    if (contentType){
        console.log("Content-Type: " + contentType);
        res = res.type(contentType);
    }
    res.send(req.body);
});

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
