const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');
const { Error } = require('mongoose');
const authenticate = require('../authenticate')
const cors = require('./cors')


router.post('/signup', (req, res, next)=> {
  User.register(new User({username: req.body.username, firstName: req.body.firstName, lastName: req.body.lastName}),
      req.body.password, (error, user) => {
        if (error) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.json({err: error})
        }
        else {
          if (req.body.firstName) {
            user.firstName = req.body.firstName
          }
          if (req.body.lastName) {
            user.lastName = req.body.lastName
          }
          user.save((err, user)=> {
            if(err) throw err
            passport.authenticate('local')(req,res, () => {
              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.json({status: "Registration Successful", user: user})
            })
          })
        }
      })})

router.post('/login', passport.authenticate('local'), (req, res, next)=> {
  var token = authenticate.getToken({_id: req.user._id})
  return res.status(200).json({ token, message: "You are authenticated!"})

})

router.post('/logout', cors.corsWithOptions, (req,res, next)=> {
  if (req.session) {
    req.session.destroy()
    res.clearCookie('session-id')
    res.redirect('/')
  }
  else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);

  }
})


module.exports = router;
