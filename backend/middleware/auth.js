// middleware/auth.js
// const jwt = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
// module.exports = (req, res, next) => {
//   const token = req.headers.authorization;

//   if (!token) return res.status(401).json({ msg: "No token" });

//   const decoded = jwt.verify(token, "SECRET");
//   req.user = decoded.id;

//   next();
// };
module.exports = (req, res, next) => {
  next(); // allow all requests
};

module.exports = function (req, res, next) {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), "secretkey");
    req.user = decoded; // ✅ gives user id
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};