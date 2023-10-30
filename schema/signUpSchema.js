const yup = require('yup');

module.exports = yup.object({
    body: yup.object({
        firstName: yup
                    .string('First name must be a string')
                    .required('First name is required')
                    .trim(),
        lastName: yup
                    .string('Last name must be a string')
                    .required('Last name is required')
                    .trim(),
        email: yup
                .string('Email must be a string')
                .email('Please provide a valid email')
                .required('Email is required')
                .trim(),
        password: yup
                    .string('Password must be a string')
                    .required('Password is required')
                    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
        confirmPassword: yup
                            .string('Confirm password must be a string')
                            .required('Confirm password is required')
                            .oneOf([yup.ref('password')], 'Passwords must match'),
        state: yup
                .string('State must be a string')
                .required('State is required')
                .trim(),
        country: yup
                .string('Country must be a string')
                .required('Country is required')
                .trim()
    })
});
