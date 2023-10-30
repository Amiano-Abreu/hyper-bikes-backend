const yup = require('yup');

module.exports = yup.object({
    body: yup.object({
        email: yup
                .string('Email must be a string')
                .email('Please provide a valid email')
                .required('Email is required')
                .trim(),
        password: yup
                    .string('Password must be a string')
                    .required('Password is required')
                    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
    })
})