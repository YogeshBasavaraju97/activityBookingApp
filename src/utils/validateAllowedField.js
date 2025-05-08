const validateEditFields = (req) => {
  const allowedEditFields = [
    'name',
    'emailId',
    'phoneNumber',
    'password'
  ];

  const isEditAllowed = Object.keys(req.body).every((key) =>
    allowedEditFields.includes(key)
  );

  return isEditAllowed;
};

module.exports = validateEditFields;
