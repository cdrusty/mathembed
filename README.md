# Math Equations Solver

This is a simple Node.js application that allows you to solve mathematical equations and obtain results as well as generate embed-like previews for use in applications like Discord. This README specifically covers the math equations solver functionality.

## Features

- Solve a wide range of mathematical equations.
- Obtain results for equations provided in the URL.
- Generate embed-like previews with mathematical results.

## Usage

1. **Running the Server**

   - Make sure you have Node.js installed on your system.

   - Clone or download this repository to your local machine.

   - Navigate to the project directory in your terminal.

   - Install the required dependencies using `npm install`.

   - Start the server by running `node server.js`.

   - The server will start running on port 3000 by default. You can access it in your web browser at `http://localhost:3000`.

2. **Solving Math Equations**

   - To solve a mathematical equation, simply provide it in the URL, like so: `http://localhost:3000/math/your_equation_here`.

   - Replace `your_equation_here` with the actual math equation you want to solve.

   - The server will calculate the result and display it in the web page.

3. **Generating Embed-Like Previews**

   - The server is capable of generating embed-like previews for mathematical equations.

   - To access an embed-like preview, append `/embed` to the URL followed by your equation, like so: `http://localhost:3000/math/embed/your_equation_here`.

   - Replace `your_equation_here` with the actual math equation you want to display in the embed.

   - The server will generate an HTML page with Open Graph meta tags that can be used to display a preview in applications like Discord.

4. **Discord Integration**

   - You can use the generated embed-like previews in Discord by sharing the URL.

   - When you share the URL in Discord, it will automatically generate a rich preview with the mathematical result.

## Example

Suppose you want to solve the equation `10 * 20 * 3.14159`. You can do the following:

- Access the equation result page: `http://localhost:3000/math/10*20*3.14159`.

- Obtain the result in the web page.

- Share the URL in Discord to see the result displayed as a rich preview.

