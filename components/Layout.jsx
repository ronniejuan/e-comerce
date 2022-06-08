import React from 'react';
import Head from 'next/head'; // is the same thing at html -> give us some metadata about our website.
 
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">

      <Head>
        <title>
          New Store
        </title>
      </Head>
        
      <header>
          <Navbar />
      </header>

      <main className='main-container'>
        {children}
      </main>


    <footer>
      <Footer />
    </footer>
    
    </div>
  )
}

export default Layout