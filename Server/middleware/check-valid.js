const { validationResult } = require('express-validator');

module.exports = (validations) => async (req, res, next) => {
  try {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(422).json({ errors: errors.array() });
  } catch (error) {
    res.status(500).send(error);
  }
};
