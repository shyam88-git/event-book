const jwt = require('jsonwebtoken');

const authenticate = (request, response, next) => {
  // Get a token from the header
  const token = request.header('x-auth-token');

  if (!token) {
    return response.status(401).json({ msg: 'No token, authentication denied' });
  }

  // Verify the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    request.user = decoded.user;
    next();
  } catch (error) {
    response.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = authenticate;
