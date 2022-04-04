import React, {useContext, useState} from 'react'

import Link from 'next/link';

const link = [
    {
        name: 'Home',
        url: '/'
    }, {
        name: 'Materi',
        url: '#'
    }, {
        name: 'Tutorial',
        url: '#'
    }, {
        name: 'Jasa Olah Data',
        url: '#'
    }, {
        name: 'Tailwind Testing',
        url: '/admindashboard'
    }
]

const Header = ({fixed}) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <div className='bg-white'>
            <nav className="container bg-white mx-auto px-10 mb-8 p-4 transition duration-200 flex items-center justify-between flex-wrap">
                <div className="flex transition duration-200 items-center flex-shrink-0 text-blue-600 hover:text-blue-800 mr-6">
                    <a href='/' className='flex items-center'>
                        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                        <span className="font-semibold lg:text-4xl sm:text-3xl tracking-tight">Cluster Statistika</span>
                    </a>
                </div>
                <div className="block lg:hidden">
                    <button onClick={
                            () => setNavbarOpen(!navbarOpen)
                        }
                        className="flex items-center px-3 py-2 border rounded text-gray-500 border-teal-400 hover:text-white hover:border-white hover:bg-blue-800 transition duration-100 ease">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div class={
                    "w-full block flex-grow lg:flex lg:items-center text-gray-800 lg:w-auto" + (
                    navbarOpen ? " " : " hidden")}>
                    <div className="lg:mb-0 mb-3 text-md lg:text-lg lg:flex-grow">
                        {
                        link.map((page) => (
                            <a className='block text-center mt-4 mr-4 w-full lg:w-auto lg:inline-block lg:mt-0 hover:text-black'
                                key={
                                    page.name
                                }
                                href={
                                    page.url
                            }>
                                {
                                page.name
                            } </a>
                        ))
                    } </div>
                    <div>
                        <button type='button' className='transition duration-500 ease-in text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Get Started</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
