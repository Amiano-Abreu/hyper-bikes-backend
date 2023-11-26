const yup =  require('yup');

module.exports = yup.object({
    body: yup.object({
        bikeID: yup
                    .string('Bike ID must be a string')
                    .required('Bike ID is required')
                    .trim(),
        body: yup
                .string('Body must be a string')
                .required('Body is required')
                .max(255, 'Body must be at most 255 characters'),
        mileage: yup
                    .number()
                    .typeError('Mileage must be a number')
                    .positive('Mileage must be a positive number')
                    .required('Mileage is required'),
        owned: yup
                .string('Owned must be a string')
                .required('Owned is required'),
        ridden: yup
                .string('Ridden must be a string')
                .required('Ridden is required'),
        used: yup
                .string('Used must be a string')
                .required('Used is required'),
        rating: yup
                .number()
                .typeError('Rating must be a number')
                .positive('Rating must be a positive number')
                .moreThan(0, 'Rating must be a value equal to or more than 1')
                .lessThan(6, 'Rating must be a value equal to or less than 5')
                .required('Rating is required'),
        title: yup
                .string('Title must be a string')
                .required('Title is required')
    })
})