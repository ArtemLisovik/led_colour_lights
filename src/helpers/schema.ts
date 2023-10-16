import * as yup from 'yup'

export const schema = yup.object().shape({
    name: yup.string().required('Введите ваше имя').min(1, 'Некорректное имя'),
    surname: yup.string().required('Введите ваше имя').min(1, 'Некорректное имя'),
    phone: yup.number().required('Введите номер телефона').min(10, 'Номер телефона не должен быть короче 10-ти цифр'),
    message: yup.string().required('de')
})
