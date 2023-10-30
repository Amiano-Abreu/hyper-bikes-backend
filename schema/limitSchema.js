const yup = require('yup');

module.exports = yup.object({
    query: yup.object({
        limit: yup.string('Limit must be a string')
                    .oneOf(['true'], `Limit must be 'true'`)
    })
})