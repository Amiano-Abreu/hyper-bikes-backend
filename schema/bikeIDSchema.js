const yup = require('yup');

module.exports = yup.object({
    params: yup.object({
        id: yup.string('Bike ID must be a string')
                    .required('Bike ID is required')
                    .trim()
    })
});