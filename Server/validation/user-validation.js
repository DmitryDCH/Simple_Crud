const { check } = require('express-validator');

module.exports = {
  createUserValidation: [
    check('name', 'Enter correct name')
      .not().isEmpty(),
    check('surname', 'Enter correct Surname')
      .not().isEmpty(),
    check('nickname', 'Enter correct nickname')
      .not().isEmpty(),
    check('email', 'enter correct email')
      .not().isEmpty()
      .isEmail(),
    check('password', 'password length must be bigger then 3 letters')
      .not().isEmpty()
      .isLength({ min: 3 }),
  ],
  updateUserValidation: [
    check('name', 'Enter correct name')
      .not().isEmpty(),
    check('surname', 'Enter correct Surname')
      .not().isEmpty(),
    check('nickname', 'Enter correct nickname')
      .not().isEmpty(),
    check('email', 'enter correct email')
      .not().isEmpty()
      .isEmail(),
    check('password', 'password length must be bigger then 3 letters')
      .not().isEmpty()
      .isLength({ min: 3 }),
  ],
};
