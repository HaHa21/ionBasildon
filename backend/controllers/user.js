exports.register = function(req, res) {
  const {
    username,
    password,
    firstname,
    lastname,
    address,
    email,
    postcode,
    date
  } = req.body;

  if (!password || !email) {
    return res.status(422).send({
      errors: [
        { title: "Data missing!", detail: "Provide email and password!" }
      ]
    });
  }
};
