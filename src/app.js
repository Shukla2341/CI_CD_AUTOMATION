const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Deployment Working 🚀");
});

module.exports = app;