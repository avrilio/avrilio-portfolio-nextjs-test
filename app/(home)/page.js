import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function page() {
  return (
    <div className='min-h-screen'>
      <Navbar></Navbar>
      
      <div class="hero min-h-screen bg-base-200 p-8">
        <div class="hero-content">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Hello there!</h1>
            <p class="py-6">Hi! My Name is Avrilio. Nice to Meet You.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}