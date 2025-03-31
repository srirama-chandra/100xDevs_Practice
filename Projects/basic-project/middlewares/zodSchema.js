const zod = require('zod');

const signUpSchema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string(),
});

const signInSchema = zod.object({
    email: zod.string(),
    password: zod.string(),
})

const courseSchema = zod.object({
    title : zod.string(),
    description : zod.string().nullable().optional(),
})

module.exports = { signInSchema, signUpSchema, courseSchema}