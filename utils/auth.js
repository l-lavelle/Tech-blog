const withAuth = (req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    document.location.replace("/users/login");
  }
};

module.exports = withAuth;
