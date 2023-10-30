const yup = require('yup');

module.exports = yup.object({
    query: yup.object({
        start: yup.number()
                .typeError('Bike start displacement must be a string')
                .positive('Bike start displacement must be positive')
                .oneOf([100, 150, 300, 500, 650, 1000])
                .required('Bike start displacement is required'),
        end: yup.number()
                .typeError('Bike end displacement must be a string')
                .positive('Bike end displacement must be positive')
                .oneOf([150, 300, 500, 650, 1000])
    })
})