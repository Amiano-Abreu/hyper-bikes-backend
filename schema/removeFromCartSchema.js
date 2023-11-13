const yup = require('yup');

module.exports = yup.object({
    body: yup.object({
        bikeID: yup
                .string('Bike ID must be a string')
                .required('Bike ID is required')
                .trim(),
        removeItem: yup.string('removeItem must be a string')
                        .oneOf(['true', 'false'], `removeItem must be 'true' or 'false'`)
    })
})