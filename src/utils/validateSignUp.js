const validator = require('validator');

const validateSignUp = (req) => {
  const { name, emailId, password, phoneNumber } = req.body;

  if (!name) {
    throw new Error('Please enter the name');
  } else if (!validator.isStrongPassword(password)) {
    throw new Error('Please enter valid password');
  } else if (!validator.isEmail(emailId)) {
    throw new Error('please enter valid email');
  } else if (!validator.isMobilePhone(phoneNumber)) {
    throw new Error('please enter valid phoneNumber');
  }
};

module.exports = { validateSignUp };
