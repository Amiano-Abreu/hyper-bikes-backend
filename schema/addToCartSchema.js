const yup = require('yup');

module.exports = yup.object({
    body: yup.object({
        alt: yup
                .string('Alt must be a string')
                .required('Alt is required')
                .trim(),
        bikeID: yup
                .string('Bike ID must be a string')
                .required('Bike ID is required')
                .trim(),
        brand: yup
                .string('Bike ID must be a string')
                .required('Bike ID is required')
                .trim(),
        model: yup
                .string('Bike model must be a string')
                .required('Bike model is required')
                .trim(),
        price: yup
                .number().typeError('Bike price must be a number')
                .positive('Bike price must be positive')
                .required('Bike price is required'),
        src:  yup
                .string('Bike image src must be a string')
                .required('Bike image src is required')
                .trim(),
    })
})