const express = require('express');
const math = require('mathjs');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/math/:equation', (req, res) => {
    try {
        const equation = req.params.equation;
        const result = math.evaluate(equation, { pi: Math.PI });
        const equationWithResult = `The result of the math equation ${equation} is: ${result}`;


        // Create an HTML page with a header and Open Graph meta tags
        const htmlResponse = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Math Equation Result</title>
                <meta property="og:title" content="Math Equation Result">
                <meta property="og:description" content="${equationWithResult}">
            </head>
            <body>
                <h1>Math Equation Result</h1>
                <div id="result">${equationWithResult}</div>
            </body>
            </html>
        `;


        // Set the Content-Type header to text/html
        res.setHeader('Content-Type', 'text/html');
        
        // Send the HTML response
        res.send(htmlResponse);
    } catch (error) {
        res.status(400).send(`Error: ${error.message}`);
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
