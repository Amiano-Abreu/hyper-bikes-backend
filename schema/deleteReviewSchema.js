const yup =  require('yup');

module.exports = yup.object({
    body: yup.object({
        bikeID: yup
                    .string('Bike ID must be a string')
                    .required('Bike ID is required')
                    .trim()
    })
})