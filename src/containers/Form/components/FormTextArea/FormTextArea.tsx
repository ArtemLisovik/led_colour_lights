import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import './FormTextArea.scss'

type FormTextAreaProps = {
    inputName: string,
    placeholder: string
}

export const FormTextArea = ({ placeholder, inputName }: FormTextAreaProps) => {
    const [isFocus, setIsFocus] = useState(false)

    const { getValues, setValue, register, formState: { errors } } = useFormContext()
    const { name, onBlur, onChange } = { ...register(`${inputName}`) }

    const isError = (errors[inputName]?.message as string)?.length > 0 ? true : false

    const clazz = isFocus ?
        { borderBottom: '1px solid var(--color-active)' }
        : !!getValues()[inputName] ?
            isError ? 
                { borderBottom: '1px solid red' }
                : { borderBottom: '1px solid var(--color-active)' }
            : { borderBottom: '1px solid rgba(0, 0, 0, 0.5)' }

    return (
        <div
            className="form-textarea__wrapper"
            style={clazz}>
            <textarea
                {...register(`${inputName}`)}
                onBlur={() => setIsFocus(false)}
                onFocus={() => setIsFocus(true)}
                name={name}
                autoComplete="off"
                required
                maxLength={259} />
            <label htmlFor="text" className="label-name">
                <span style={isError ? { color: 'red' } : { color: 'var(--color-active' }}
                    className="content-name">
                    {isError ? errors[inputName]?.message as string : placeholder}
                </span>
            </label>
        </div>
    )
}
