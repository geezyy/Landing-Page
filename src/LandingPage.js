import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import CallToAction from './Components/CallToAction'
import Flags from './Components/Flags'
import Boxes from './Components/Boxes'
import UserReview from './Components/UserReview'

const LandingPage = () => {
  return (
    <div className=' w-screen h-[100svh]'>
        <Header/>
        <Main />
        <CallToAction/>
        <Flags/>
        <Boxes/>
        <UserReview/>
    </div>
  )
}

export default LandingPage