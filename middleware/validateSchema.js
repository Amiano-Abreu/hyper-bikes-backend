const validateSchema = (schema) => async (req, res, next) => {
  
    try {
      const data = await schema.validate({
        body: req.body,
        params: req.params,
        query: req.query
      }, {
        abortEarly: false
      });

      req.body = data.body;
      req.query = data.query;
      req.params = data.params
      return next();

    } catch (err) {

      let errors = [];

      err.inner.map(e => {
        const errObj = {};
        // errObj.path = e.path,
        // errObj.message = e.errors[0];

        errObj[e.path.split(".")[1]] = e.message.includes(".") ? e.message.split(".")[1] : e.message

        errors.push(errObj);
      })

      return res.status(403).json({ 
        status: 'ERROR',
        data: errors
      });

    }
};

module.exports = validateSchema;