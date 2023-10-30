const yup =  require('yup');

module.exports = yup.object({
    body: yup.object({
        products: yup.array().of(
            yup.object({
                    bikeID: yup.string('Bike ID must be a string').required('Bike ID is required').trim(),
                    bikeImg: yup.string('Bike image must be a string').url('Bike image must a valid url').required('Bike image is required'),
                    bikeModel: yup.string('Bike model must be a string').required('Bike model is required'),
                    displacement: yup.string('Displacement must be a string').required('Displacement is required'),
                    kerbWeight: yup.string('Kerb weight must be a string').required('Kerb weight is required'),
                    power: yup.string('Power must be a string').required('Power is required'),
                    price: yup.number().typeError('Price must be a number').positive('Price must be positive').required('Price is required'),
                    quantity: yup.number().typeError('Quantity must be a number').positive('Quantity must be positive').moreThan(0, 'Quantity must be more than 0').required('Quantity is required')
            })
        ).required('Products is required'),
        total: yup.number().typeError('Total must a number').positive('Total must be positive').required('Total is required')
    })
});