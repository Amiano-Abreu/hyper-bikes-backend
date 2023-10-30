const yup = require('yup');

module.exports = yup.object({
    body: yup.object({
        orderID: yup.string('Order ID must be a string')
                    .required('Order ID is required')
                    .trim()
    })
});