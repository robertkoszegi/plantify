const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = function(req, res, next) {
  // Check for the token being sent in three different ways
  let token = req.get('Authorization') || req.query.token || req.body.token;
  if (token) {
    console.log('we have a token')
    // Remove the 'Bearer ' if it was included in the token header
    token = token.replace('Bearer ', '');
    // Check if token is valid and not expired
    jwt.verify(token, SECRET, function(err, decoded) {
      if (err) {
        console.log('Token is not valid')
        next(err);
      } else {
        console.log('token is valid', decoded.user)        // It's a valid token, so add user to req
        req.user = decoded.user;    
        next();
      }
    });
  } else {
    console.log('we dont have a token')
    next();
  }
};