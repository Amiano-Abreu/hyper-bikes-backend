const yup = require('yup');

module.exports = yup.object({
    query: yup.object({
        under: yup.number()
                .typeError('Under price must be a number')
                .oneOf([0, 300000, 400000, 700000, 1500000, 2000000])
                .required('Under price is required'),
        above: yup.number()
                .typeError('Above price must be a number')
                .oneOf([0, 2000000])
                .required('Above price is required'),
    })
})