import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import './Input.scss'


type InputProps = {
    inputName: string,
    type?: 'text' | 'email' | 'number' | 'phone',
    placeholder: string
}
export const Input = ({ placeholder, inputName, type = 'text' }: InputProps) => {
    const [isFocus, setIsFocus] = useState(false)

    const { getValues, setValue, register, formState: { errors } } = useFormContext()
    const { name, onBlur, onChange } = { ...register(`${inputName}`) }

    const isError = (errors[inputName]?.message as string)?.length > 0 ? true : false

    const baseColor = '1px solid rgba(0, 0, 0, 0.5)'
    const focusColor = '1px solid green'
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
            className="form-input__wrapper"
            style={clazz}
            >
            <span className="object__wrapper-anim"></span>
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
                <span style={isError ? { color: 'red' } : { color: baseColor }} className="content-name">
                    {isError ? errors[inputName]?.message as string : placeholder}
                </span>
            </label>
        </div>
    )
}
