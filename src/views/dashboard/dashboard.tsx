import React, { FC } from 'react'
import './dashboard.css'
import { Outlet } from 'react-router-dom'
import AccountToolbar from '../../components/account-toolbar/AccountToolbar'


const Dashboard:FC = () => {

    const routes = [
        {
            name: 'Posts',
            url: '/dashboard/posts'
        },
        {
            name: 'Users',
            url: '/dashboard/users'
        },
        {
            name: 'Games',
            url: '/dashboard/games'
        }
    ]

    return (
        <div className="dashboard-container">
            <div className="dashboard-sidepanel-container">
                <div className="dashboard-sidepanel-header">
                    <h2>My Casino</h2>
                </div>
                {
                    routes.map((route, index) => (
                        <div className="sider-item-container" key={index}>
                            <a href={route.url}>{route.name}</a>
                        </div>
                    ))
                }
            </div>
            <div className="dashboard-content-container">
                <div className="dashboard-content-header">
                    <div className="account-toolbar-notifications"></div>
                    <div className="account-toolbar-container">
                        <AccountToolbar />
                    </div>
                </div>
                <div className="outlet-container">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard