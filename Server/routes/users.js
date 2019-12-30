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


router.get('/', getAllUsers);
router.get('/:id', getUserById);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUserById);


module.exports = router;
