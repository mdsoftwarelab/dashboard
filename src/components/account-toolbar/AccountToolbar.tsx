import React, { FC } from "react";
import './AccountToolbar.css'
import { useAuth } from "../../utils/AuthProvider";
import { ReactComponent as UserIcon } from './../../assets/icons/user.svg';

const AccountToolbar:FC = () => {
    const { logout } = useAuth()

    return (
        <div className="account-toolbar">
            <div className="account-toolbar-profile">
                <p>Welcome, Dean the man!</p>
            </div>
            <div className="account-toolbar-settings">
                <UserIcon height={30} fill="var(--text-default)"/>
            </div>
            <div className="account-toolbar-logout">
                <button className="btn-primary-sm" onClick={logout}>logout</button>
            </div>
        </div>
    )
}

export default AccountToolbar