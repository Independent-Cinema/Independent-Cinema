const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// get config vars
dotenv.config();

exports.generateAccessToken = (username, role) => {
    const tokenSecret = process.env.TOKEN_SECRET;
    console.log(username, role)
    return jwt.sign({username: username, role : role}, tokenSecret, { expiresIn: '1800s' });
}
