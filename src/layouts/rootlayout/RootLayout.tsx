import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../marketingLayout/components/Heading'

export default function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
