import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import './ContactTextArea.scss'

type ContactTextAreaProps = {
    inputName: string,
    placeholder: string
}

export const ContactTextArea = ({ placeholder, inputName }: ContactTextAreaProps) => {
    const [isFocus, setIsFocus] = useState(false)

    const { getValues, setValue, register, formState: { errors } } = useFormContext()
    const { name, onBlur, onChange } = { ...register(`${inputName}`) }

    const isError = (errors[inputName]?.message as string)?.length > 0 ? true : false

    const baseColor = '1px solid rgba(255, 255, 255, 0.5)'
    const focusColor = '1px solid #fff'
    const errorColor = '1px solid var(--color-active)'

    const clazz = isFocus ?
        { borderBottom: focusColor }
        : !!getValues()[inputName] ?
            isError ? 
                { borderBottom: errorColor }
                : { borderBottom: focusColor }
            : { borderBottom: baseColor }

    return (
        <div
            className="form-textarea__wrapper"
            style={clazz}>
                            <span className="object__wrapper-anim"></span>
            <textarea
                {...register(`${inputName}`)}
                onBlur={() => setIsFocus(false)}
                onFocus={() => setIsFocus(true)}
                name={name}
                autoComplete="off"
                required
                maxLength={259} />
            <label htmlFor="text" className="label-name">
                <span style={isError ? { color: errorColor} : { color: baseColor }}
                    className="content-name">
                    {isError ? errors[inputName]?.message as string : placeholder}
                </span>
            </label>
        </div>
    )
}
