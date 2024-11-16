import React from 'react'
import Appusing from './components/Appusing'
import Clients from './components/Clients'
import Customize from './components/Customize'
import Data from './components/Data'
import Hero from './components/Hero'
import Logo from './components/Logo'
import Plan from './components/Plan'
import Project from './components/Project'
import Work from './components/Work'
import Extension from './components/Extension'
import Header from './components/Header'

function page() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Project/>
      <Extension/>
      <Customize/>
       <Plan/>
       <Work/>
      <Data/>
      <Logo/>
      <Appusing/>
      <Clients/>
    </div>
  )
}

export default page
