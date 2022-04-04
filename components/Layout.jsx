import React from 'react'
import {Header} from './';

const Layout = ({children}) => {
    return (
        <>
            <div className='sticky position top-0'>
                <Header/>
            </div>
            {children} </>
    )
}

export default Layout
