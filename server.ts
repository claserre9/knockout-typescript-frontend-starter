import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve robots.txt from the project root
app.use('/robots.txt', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'robots.txt'));
});

// Route all requests to the 'index.html' file
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});