let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

//connect to our book model.
// let Book = require('../models/book');

let bookController = require('../controllers/book');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// get Route for the book List page - READ Operation
router.get('/', bookController.displayBookList);

// Get Route for displaying the Add page - CREATE Operation
router.get('/add', requireAuth, bookController.displayAddPage);

// Post Route for processing the Add page - CREATE Operation
router.post('/add', requireAuth, bookController.processAddPage);

// Get Route for displaying the Edit page - UPDATE Operation
router.get('/edit/:id', requireAuth, bookController.displayEditPage);

// Post Route for processing the Edit page - UPDATE Operation
router.post('/edit/:id', requireAuth, bookController.processEditPage);

// Get to perform deletion - DELETE Operation
router.get('/delete/:id', requireAuth, bookController.performDelete);


module.exports = router;