const passport = require('passport');

exports.showSignup = (req,res) => {
  res.render('signup.ejs', {message: req.flash('signupMessage')});
  req.session.destroy();
}

exports.passportSignup = passport.authenticate('local-signup', {
  successRedirect: '/api/token',
  failureRedirect: '/api/login',
  failureFlash: true
});

exports.welcome = (req,res) => {
  if(req.user){
    res.status(200).send({
      message: 'USER_SIGNED_UP_SUCCESSFULLY',
      user: {
        id: req.user.id,
        email: req.user.email,
        name: req.user.name,
        firstname: req.user.firstname
      }
    });
  }
}
