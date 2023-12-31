const yup = require('yup');

module.exports = yup.object({
    params: yup.object({
        brand: yup.string('Bike brand must be a string')
                .oneOf(['Honda', 'BMW', 'Harley Davidson', 'Kawasaki', 'Ducati', 'KTM'])
                .required('Bike brand is required')
    })
})