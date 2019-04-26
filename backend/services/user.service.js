import Joi from "joi";

export default {
  validateSignupSchema(body) {
    const schema = Joi.object().keys({
      username: Joi.string()
        .username()
        .required(),
      password: Joi.string()
        .password()
        .required(),
      firstname: Joi.string()
        .firstname()
        .required(),
      lastname: Joi.string()
        .lastname()
        .required(),
      address: Joi.string()
        .address()
        .required(),
      email: Joi.string()
        .address()
        .required(),
      postcode: Joi.string()
        .address()
        .required(),
      DOB: Joi.string()
        .isoDate()
        .required(),
      gender: Joi.string().valid("Male", "Female"),
      role: Joi.string().valid("Admin", "User")
    });

    const { error, value } = Joi.validate(body, schema);
    if (error && error.details) {
      return { error };
    }
    return { value };
  }
};
