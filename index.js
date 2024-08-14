import express from 'express';

const app = express();
// enable cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

const port = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});