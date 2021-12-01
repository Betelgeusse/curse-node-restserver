const { Router } = require('express');
const { usersGet, usersPost, usersDelete, usersPut } = require('../controllers/user.controllers');

const router = Router();

router.get('/', usersGet);

router.put('/:id',usersPut);

router.post('/',usersPost);

router.delete('/',usersDelete);


router.get('/', (req, res) => {
    res.json('Hello World');
});

module.exports = router;