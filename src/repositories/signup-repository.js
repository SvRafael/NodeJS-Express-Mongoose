const User = require('../app/models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Register


//Login
exports.login = async (data) => {
  const user = await User.findOne({ email: data.email });

  if (!user) {
    return false;
  }

  return bcrypt.compare(data.password);
};