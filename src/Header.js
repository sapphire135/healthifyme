import React from 'react'
import logo from './logo.png'

export default function Headers() {
    return (
        <header className="App-header">
        <img className='logo' src={logo} alt='Healthify'/>
        <text className='bar'>|</text>
        <text>Accounts</text>
        </header>
    )
}