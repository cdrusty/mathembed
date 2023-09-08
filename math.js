const math = require('mathjs');

module.exports = async (req, res) => {
  try {
    const equation = req.query.equation;

    // Ensure 'equation' is provided
    if (!equation) {
      throw new Error('Equation not provided');
    }

    // Evaluate the equation using mathjs
    const result = math.evaluate(equation);

    // Send the result as JSON response
    res.status(200).json({ result });
  } catch (error) {
    // Handle errors and send an error response
    res.status(400).json({ error: error.message });
  }
};
