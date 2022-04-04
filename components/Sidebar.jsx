import React, {useContext, useState} from 'react'

import Link from 'next/link';
/*
<div className='w-96 space-y-1 h-screen flex flex-col bg-gray-900 rounded-md'>
            <Head>
                <title>Admin Page</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className='px-6 pt-8'>
                <div className='flex flex-row items-center'>
                    <span className='items-center flex flex-grow text-white text-2xl font-bold'>ClusterAdmin</span>
                </div>
            </div>
            <div className='px-6 pt-4'>
                <div className='relative'>
                    <input className='w-full py-2 px-4 rounded-lg text-md bg-gray-800 font-light text-gray-400' type='text' placeholder='Search'/>
                </div>
            </div>
            <div className='px-6 pt-4'>
                <div className='border-gray-700 border-b'/>
            </div>
            <div className='px-6 pt-4'>
                <ul>
                    <li className='text-gray-500'>
                        <a href='#' className='inline-block w-full py-2 rounded-lg  px-4 hover:bg-gray-800 hover:text-white'>
                            Dashboard
                        </a>
                    </li>
                    <li className='text-gray-500'>
                        <a href='#' className='inline-block w-full py-2 rounded-lg  px-4 hover:bg-gray-800 hover:text-white'>
                            Artikel
                        </a>
                    </li>
                    <li className='text-gray-500'>
                        <a href='#' className='inline-block w-full py-2 rounded-lg  px-4 hover:bg-gray-800 hover:text-white'>
                            Analisa
                        </a>
                    </li>
                    <li className='text-gray-500'>
                        <a href='#' className='inline-block w-full py-2 rounded-lg  px-4 hover:bg-gray-800 hover:text-white'>
                            Dashboard
                        </a>
                    </li>
                </ul>
            </div>
        </div>
*/

const Sidebar = () => {
    const [isOpen, setisOpen] = useState(false);
    return (
        <>
        {!isOpen ?
            (
                <button>
                    <svg onClick={() => setisOpen(!isOpen)}
                        className='fixed z-30 flex items-center cursoir-pointer left-10 top-6'
                        fill='#2563EB'
                        viewBox='0 0 100 80'
                        width='40'
                        height='40'
                    >
                        <rect width="100" height="10"></rect>
                        <rect y="30" width="100" height="10"></rect>
                        <rect y="60" width="100" height="10"></rect>
                    </svg>
                </button>
            ) :
            (
                <button className='z-10 text-xl text-white fixed top-4 left-96'
                onClick={() => setisOpen(!isOpen)}
                >
                    X
                </button>
            )
        }
        <div className={`top-0 left-0 fixed w-[25vw] h-screen bg-gray-900 p-10 text-2xl text-gray-400 ${isOpen ? 'translate-x-0': '-translate-x-full'} ease-in-out duration-300 transition`}>
                Sidebar
            </div>
        </>
    )
}

export default Sidebar
