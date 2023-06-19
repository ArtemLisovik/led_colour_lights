import * as yup from 'yup'

export const schema = yup.object().shape({
    firstName: yup.string().required('Enter your name').min(2, 'Incorrect name'),
    lastName: yup.string().required('Enter your last name').min(2, 'Incorrect last name'),
    email: yup.string().required('Enter your email').email('Incorrect email'),
    phone: yup.string().required('Enter your phone number').min(10, 'Phone number must be at least 10 numbers'),
    message: yup.string()
})
