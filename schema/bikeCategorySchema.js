const yup = require('yup');

module.exports = yup.object({
    params: yup.object({
        category: yup.string('Bike category must be a string')
                .oneOf(['superbike', 'naked', 'adventure', 'cafe racer', 'bobber', 'off road'])
                .required('Bike category is required')
    })
})