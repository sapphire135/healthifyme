import React, { useState } from 'react'
import logo from './logo.png'
import Text from './Text'
import onClickLoginApi from './Api/api'

const errorMessage = 'Invalid field'

export default function SignIn() {

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(true)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    function setEmailValue(emailText) {
        validateEmail(emailText)
        setEmail(emailText)
    }

    function validateEmail(emailText) {
        var emailValidaatorRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (emailValidaatorRegex.test(emailText) === false && emailError === false) {
            setEmailError(true)
        } else if (emailValidaatorRegex.test(emailText) === true && emailError === true) {
            setEmailError(false)
        }
    }

    function setPasswordValue(passwordText) {
        validatePassword(passwordText)
        setPassword(passwordText)
    }

    function validatePassword(passwordText) {
        let passwordValidatorRegex = /(?=.{6,}$)(?=.*[A-Z])/g;
        if (passwordValidatorRegex.test(passwordText) === false && passwordError === false) {
            setPasswordError(true)
        } else if (passwordValidatorRegex.test(passwordText) === true && passwordError === true) {
            setPasswordError(false)
        }
    }

    async function onClickLogin() {
        setIsLoading(true)
        let result = await onClickLoginApi().then(res => {
            setTimeout(() => setIsLoading(false), 3000)
        })
    }

    return (
        <div className='signin'>
            {
                isLoading ?
                    <div className='loader' id='loader'>
                    </div> :
                    <div className='card'>
                        <img className='logo padding-top-30' src={logo} alt='Healthify' />
                        <h1><span>Sign in</span></h1>
                        <h1><span>Use your Healthifyme Account</span></h1>
                        <Text
                            value={email}
                            placeholder='Enter your Email'
                            onChange={(emailText) => setEmailValue(emailText)}
                            disabled={false}
                            error={emailError}
                            className={`text ${!emailError ? '' : 'border-color-error'}`}
                            errorText={errorMessage}
                            type={'text'}
                        />
                        <Text
                            value={password}
                            placeholder='Enter your Email'
                            onChange={(passwordText) => setPasswordValue(passwordText)}
                            disabled={false}
                            error={passwordError}
                            className={`text ${!passwordError ? '' : 'border-color-error'}`}
                            errorText={errorMessage}
                            type={'password'}
                            containerClassName='padding-top-30'
                        />
                        <div className='padding-top-30'>
                            <button className='button text' onClick={() => onClickLogin()}>Login</button>
                        </div>
                    </div>
            }
        </div>
    )
}