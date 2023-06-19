import { H3 } from 'ui'
import { schema } from './helpers/schema'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { FormInput} from './components/FormInput/FormInput'
import { FormTextArea} from './components/FormTextArea/FormTextArea'

import './Form.scss'
import { IData, sendMessageTelegram } from './helpers/telegram'
import { useTranslation } from 'react-i18next'


export const Form = () => {
    const {t} = useTranslation()

    const methods = useForm<IData>({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
    })

    const { handleSubmit, formState: { errors } } = methods

    const onHandleSubmit: SubmitHandler<IData> = async (data) => {
        console.log('done')
        sendMessageTelegram(data)
    }

    return (
        <FormProvider {...methods}>
            <form className='form' onSubmit={handleSubmit(onHandleSubmit)}>
                <H3 color='rgb(17, 17, 17)'>
                {t('main.pages.contacts.form.title')}
                </H3>
                <div className="form__section">
                    <div className="form__section-inner">
                        <FormInput inputName='firstName' placeholder={t('main.pages.contacts.form.name')} />
                    </div>
                    <div className="form__section-inner">
                        <FormInput inputName='lastName' placeholder={t('main.pages.contacts.form.surname')} />

                    </div>
                </div>
                <FormInput inputName='email' placeholder='Email' />
                <FormInput inputName='phone' type='number' placeholder={t('main.pages.contacts.form.phone')} />

                <FormTextArea inputName='message' placeholder={t('main.pages.contacts.form.message')} />

                <button className='form__button'>{t('main.pages.contacts.form.button')}</button>

            </form>
        </FormProvider>
    )
}
