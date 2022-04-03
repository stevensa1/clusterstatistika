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
    }
]

const Header = ({fixed}) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <div className='bg-white'>
            <nav class="container bg-white mx-auto px-10 mb-8 p-4 transition duration-200 flex items-center justify-between flex-wrap">
                <div class="flex transition duration-200 items-center flex-shrink-0 text-blue-600 hover:text-blue-800 mr-6">
                    <a href='/' className='flex items-center'>
                        <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                        <span class="font-semibold lg:text-4xl sm:text-3xl tracking-tight">Cluster Statistika</span>
                    </a>
                </div>
                <div class="block lg:hidden">
                    <button onClick={
                            () => setNavbarOpen(!navbarOpen)
                        }
                        class="flex items-center px-3 py-2 border rounded text-gray-500 border-teal-400 hover:text-white hover:border-white hover:bg-blue-800 transition duration-100 ease">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div class={
                    "w-full block flex-grow lg:flex lg:items-center text-gray-800 lg:w-auto" + (
                    navbarOpen ? " " : " hidden")}>
                    <div class="lg:mb-0 mb-3 text-md lg:text-lg lg:flex-grow">
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
    /*
    <>
    <nav className="bg-white border-gray-200 mb-4 px-2 sm:px-4 py-2.5 rounded">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <a href="/" className='flex item-center'>
                  <span className='self-center text-4xl font-semibold whitespace-nowrap'>CLUSTER</span>
                </a>
              <div className='flex lg:order-2'>
                <button type='button' className='transition duration-500 ease-in transform hover:hover:-translate-y-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Get Started</button>
                <button className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
                    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
              </div>
            </div>
            <div className={"lg:flex mt-3 flex-grow items-center transition" + (navbarOpen ? " flex" : " hidden")}
                id="example-navbar-danger">
                <ul className="flex flex-col lg:space-x-8 w-full lg:flex-row list-none lg:ml-auto">
                    <li className='nav-item'>
                        <a href="#" className="text-center block py-2 pr-4 pl-3 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white items-center" aria-current="page">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 items-center text-center">About</a>
                    </li>
              </ul>
            </div>
          </div>
        </nav>
    </> */
    /*<>
      <nav className='bg-white border-gray-200 mb-4 px-2 sm:px-4 py-2.5 rounded'>
          <div className='container flex flex-warp justify-between items-center mx-auto'>
              <a href="/" className='flex item-center'>
                  <span className='self-center text-4xl font-semibold whitespace-nowrap'>CLUSTER</span>
              </a>
              <div className='flex md:order-2'>
                  <button type='button' className='transition duration-500 ease-in transform hover:hover:-translate-y-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Get Started</button>
                  <button data-collapse-toggle="mobile-menu-4" type='button' className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' onClick={() => setNavbarOpen(!navbarOpen)}aria-controls="mobile-menu-4" aria-expanded="false">
                    <span className='sr-only'>Open main menu</span>
                    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </div>
              <div className={'justify-between items-center w-full md:flex md:w-auto md:w-auto md:order-1' + (navbarOpen ? " flex" : " hidden")} id='mobile-menu-4'>
                <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 text-lg font-medium md:mt-0 md:text-lg">
                    <li className="nav-item">
                        <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                </ul>
              </div>
          </div>
      </nav>
      </>
      */
    /*<div className = "container mx-auto px-10 mb-8">
        <div className = "border-b w-full inline-block border-blue-400 py-8">
            <div className = "md:float-left block">
                <Link href = "/">
                    <span className = "cursor-pointer font-bold text-4xl text-white">
                        CLUSTER Statistika
                    </span>
                </Link>
            </div>
            <div className = "hidden md:float-left md:contents">
                {link.map((page) => (
                   <Link key={page.name} href={`${page.url}`}>
                       <span className="md:float-right mt-2 align-middle text-white ml-6 font-medium cursor-pointer">
                           {page.name}
                       </span>
                   </Link> 
                ))}
            </div>
        </div>
    </div>*/
    )
}

export default Header
