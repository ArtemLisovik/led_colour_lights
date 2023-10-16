import React, { useEffect, useState } from 'react'
import { Input } from 'ui'

import './Modal.scss'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from 'helpers/schema'
import { sendMessageTelegram } from 'containers/Form/helpers/telegram'
import { toast } from 'react-toastify'
import { IData } from 'types/IData'
import { AnimatePresence, motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { RootState } from 'store/store'
import { setOrderOpen } from 'store/OrderSlice'

export const Modal = ({ title, opened }: { title: string, opened: boolean }) => {

    const { orderOpen } = useAppSelector((state: RootState) => state.orderOpenSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        orderOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll'
    }, [orderOpen])


    const methods = useForm<IData>({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
    })

    const { handleSubmit, reset, formState: { errors } } = methods

    const onHandleSubmit: SubmitHandler<IData> = async (data) => {
        // sendMessageTelegram(data)
        toast.success('Заявка отправлена', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        reset()
    }
    return (
        <AnimatePresence mode='wait'>
            {orderOpen && <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.2 } }}
                exit={{ opacity: 0 }}
                className='backdrop'>
                <motion.div className="modal"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 0.2 } }}
                    exit={{ scale: 0 }}
                >
                    <div
                        className="modal__close-btn"
                        onClick={() => dispatch(setOrderOpen(false))}
                    >×</div>
                    <h3 className="modal title">{title}</h3>

                    <FormProvider {...methods}>
                        <form className="modal__form" onSubmit={() => handleSubmit(onHandleSubmit)}>
                            <Input placeholder='Ваше ім`я' type='text' inputName='name' />
                            <Input placeholder='Ваше прізвище' type='text' inputName='surname' />
                        <Input placeholder='Ваш номер телефону' type='number' inputName='phone' />
                        <Input placeholder='Додати коментар' type='text' inputName='text' />
                        </form>
                    </FormProvider>

                </motion.div>
            </motion.div>}
        </AnimatePresence>

    )
}
