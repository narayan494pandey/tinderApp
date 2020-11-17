import React from 'react'
import './header.css';
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconBUtton'


export default function Header() {
    return (
        <div className="header">
        <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>

        <img
            alt="logo"
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
            className="header__logo"
        />
        </div>
    )
}
