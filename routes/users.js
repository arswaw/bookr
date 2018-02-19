const express = require('express')
const router = express.Router()
const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy
const UserModel = require('./../db/models/User')

// Get all users
router.get('/all', function (req, res) {
  res.send('respond with a resource')
})

router.get('/login',
  function (req, res) {
    res.status(200)
  })

  router.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: false })
);

router.get('/logout',
  function (req, res) {
    req.logout()
    res.redirect('/')
  })

passport.serializeUser(function (user, cb) {
  cb(null, user.id)
})

passport.use(new LocalStrategy({passReqToCallback: true},
  function (username, password, done) {
    UserModel.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' })
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' })
      }
      return done(null, user)
    })
  }
))

passport.deserializeUser(function (id, cb) {
  findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user)
  })
})

function findByUsername (username) {
  UserModel.findOne({username: username}, function (err, user) {
    if (err) {
      res.status(500).send('There was a problem retrieving this user!', err)
    }
    return user
  })
}

function findById (id) {
  UserModel.findOne({userid: id}, function (err, user) {
    if (err) {
      res.status(500).send('There was a problem retrieving this user!', err)
    }
    return user
  })
}

module.exports = router
