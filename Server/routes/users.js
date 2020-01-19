const { Router } = require('express');

const router = Router();

const {
  getAllUsers,
  getUserById,
} = require('../controllers/user-get-controller');

const {
  createUser,
} = require('../controllers/user-post-controller');

const {
  updateUser,
} = require('../controllers/user-put-controller');

const {
  deleteUserById,
} = require('../controllers/user-delete-controller');

const checkValidation = require('../middleware/check-valid');

const { createUserValidation, updateUserValidation } = require('../validation/user-validation');


router.get('/', getAllUsers);
router.get('/:id', getUserById);

router.post('/', checkValidation(createUserValidation), createUser);

router.put('/:id', checkValidation(updateUserValidation), updateUser);

router.delete('/:id', deleteUserById);


module.exports = router;
