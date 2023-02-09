const Joi = require("joi");

const registerSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/)
    .required(),
});

const validateRegister = async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: "Missing email or password." });
  }

  const { email, password } = req.body;

  const { error } = await registerSchema.validate(
    { email, password },
    { abortEarly: false }
  );
  if (error) {
    return res.status(422).json({ validationErrors: error.details[0].message });
  }
  return next();
};

const emailSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
});

const validateEmail = async (req, res, next) => {
  if (!req.body.email) {
    return res.status(400).json({ message: "Missing email." });
  }

  const { email } = req.body;

  const { error } = await emailSchema.validate(
    { email },
    { abortEarly: false }
  );
  if (error) {
    return res.status(422).json({ validationErrors: error.details[0].message });
  }
  return next();
};

module.exports = {
  validateRegister,
  validateEmail,
};
