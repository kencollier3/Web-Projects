const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('We got another request!');
//     res.send('<h1>Hello! We got your response.</h1>')
// })

app.get('/', (req, res) => {
    res.send('<h1>This is the homepage!</h1>');
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit. </h1>`)
})

app.get('/cats', (req, res) => {
    res.send('cat request');
})

app.get('/dogs', (req, res) => {
    res.send('dog request');
})

app.listen(3000, () => {
    console.log('Listening on Port 3000');
});