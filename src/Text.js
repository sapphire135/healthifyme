import React, { Fragment } from 'react'

const Text = ({
    value = '',
    placeholder = '',
    onChange,
    className = '',
    type = 'text',
    errorText = '',
    error = false,
    containerClassName = ''
}) => {

    const onChange_ = e => {
        let val = e.currentTarget.value
        onChange(val)
    }

    return (
        <div className={`flex column align-center ${containerClassName}`}>
            <input
                type={type}
                value={value}
                onChange={onChange_}
                placeholder={placeholder}
                className={className}
            />
            {error ?
                <div className={'error'}>
                    <div className={'flex-start'}>{errorText}</div>
                </div>
                : null}
        </div>
    )
}

export default Text