const express = require ('express');
const router = express.Router();

const {list, store, detail, update,remove, addColaborator, removeColaborator} = require ('../controllers/projectsController');
const { route } = require('./auth');

/* /api/projects */

router
    .route('/')
        .get(list)
        .post(store)
router
    .route('/:id')
        .get(detail)
        .put(update)
        .delete(remove)
router
    .get('/collaborator/add', addColaborator)
    .delete('/collaborator/remove', removeColaborator)




module.exports = router