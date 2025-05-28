import Footer from '@/_components/Footer'
import Header from '@/_components/Header'
import React from 'react'

function layout({children} : {children: React.ReactNode}) {
  return (
    <div>
        <Header/>
        <div className='h-[50vh]'>
        {children}
        </div>
        <Footer/>
      
    </div>
  )
}

export default layout
