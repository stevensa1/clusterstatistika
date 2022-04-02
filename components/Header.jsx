import React, { useContext } from 'react'

import Link from 'next/link';

const link = [
    {
        name: 'Home',
        url: '#'
    },
    {
        name: 'Materi',
        url: '#'
    },
    {
        name: 'Tutorial',
        url: '#'
    }

]

const Header = () => {
  return (
    <div className = "container mx-auto px-10 mb-8">
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
    </div>
  )
}

export default Header