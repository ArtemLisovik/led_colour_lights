import { useEffect, useState } from 'react'

import './FormInput.scss'
import { useFormContext } from 'react-hook-form'


type FormInputProps = {
    inputName: string,
    type?: 'text' | 'email' | 'number' | 'phone',
    placeholder: string
}
export const FormInput = ({ placeholder, inputName, type = 'text' }: FormInputProps) => {
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
            className="form-input__wrapper"
            style={clazz}
            >
            <input
                {...register(`${inputName}`)}
                onBlur={() => setIsFocus(false)}
                onFocus={() => setIsFocus(true)}
                type={type}
                name={name}
                required
                autoComplete="off"
            />
            <label htmlFor="text" className="label-name">
                <span style={isError ? { color: 'red' } : { color: 'var(--color-active' }} className="content-name">
                    {isError ? errors[inputName]?.message as string : placeholder}
                </span>
            </label>
        </div>
    )
}
