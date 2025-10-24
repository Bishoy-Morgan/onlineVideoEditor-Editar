import React from 'react'
import Button from './ui/Button'

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white flex flex-col items-center ">
            <div className='text-center px-4 py-24 space-y-12'>
                <h2>
                    Inspire your creativity and create like a pro
                </h2>
                <p className='text-gray-300 text-xl'>
                    Turn you creative ideas into reality with CapCut video editor online.
                </p>
                <Button variant='secondary' className='py-4 px-8 text-xl'>
                    Sign up for free
                </Button>
            </div>
            <div className='w-[90%] px-8 border-t border-gray-500/50 py-6 '>
                <p className='text-sm'>
                    © 2023 Editar. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
