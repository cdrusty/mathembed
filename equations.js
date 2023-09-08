// equations.js
const math = require('mathjs');

module.exports = async (req, res) => {
  const equation = req.query.equation;

  if (!equation) {
    return res.status(400).json({ error: 'Equation not provided' });
  }

  try {
    const result = math.evaluate(equation);

    return res.status(200).json({ result });
  } catch (error) {
    return res.status(500).json({ error: 'Error while processing the equation' });
  }
};
