import React from 'react'
import {Link} from 'react-router-dom'

const Docs = () => {
  return (
    <div className='docs overflow-scroll max-h-[40ch]'>
			<h2 className='font-bold text-green-300 underline' style={{fontSize:'25px'}} >Technical Documentation</h2>
			<p>Welcome to the technical documentation for LomBash V1.0, a unique and innovative portfolio concept that emulates a Bash terminal. This document outlines the different commands and functionalities that are available in LomBash V1.0</p>
			<div className='my-4'>
				<span className=' border border-blue-400 py-1 px-2 bg-gray-800 ' style={{borderRadius: '20px'}} >> cd </span>
				<p className='ml-4 my-1'>The cd command allows you to navigate to a specific section of the portfolio. To use the cd command, simply type cd [section-name], where [section-name] is the name of the section you wish to navigate to. For example, to navigate to the "About Me" section, you would type cd about.</p>
			</div>

			<div className='my-4'>
				<span className=' border border-blue-400 py-1 px-2 bg-gray-800 ' style={{borderRadius: '20px'}} >> ls </span>
				<p className='ml-4 my-1'>The ls command lists the available sections in LomBash V1.0. To use the ls command, simply type ls. This will display a list of available sections, including "About Me", "Education", "Skills", and "Contact".</p>
			</div>

			<div className='my-4'>
				<span className=' border border-blue-400 py-1 px-2 bg-gray-800 ' style={{borderRadius: '20px'}} >> help </span>
				<p className='ml-4 my-1'>The help command displays a list of available commands in LomBash V1.0, along with a brief description of how they function. To use the help command, simply type help.</p>
			</div>

			<div className='my-4'>
				<span className=' border border-blue-400 py-1 px-2 bg-gray-800 ' style={{borderRadius: '20px'}} >> social </span>
				<p className='ml-4 my-1'>The social command displays a list of contact options available in LomBash V1.0. To use the social command, simply type social. This will display a list of available contact options, including LinkedIn, Instagram, email, and GitHub.</p>
			</div>

			<div className='my-4'>
				<span className=' border border-blue-400 py-1 px-2 bg-gray-800 ' style={{borderRadius: '20px'}} >> link </span>
				<p className='ml-4 my-1'>The link command navigates to a selected contact option. To use the link command, type link [contact-option], where [contact-option] is the name of the contact option you wish to navigate to. For example, to navigate to the LinkedIn profile, you would type link linkedin.</p>
			</div>

			<h2 className='font-bold text-green-300 underline' style={{fontSize:'20px'}} >Customization</h2>
			<p>LomBash V1.0 is designed to be easily customizable. You can modify the code to suit your specific needs and preferences. We encourage you to use this code as a starting point for your own unique portfolio concept. Feel free to modify and build upon this code to create something truly unique.</p>
			<br />
			<div>

				<p className='text-gray-200 mb-2' style={{fontSize:'15px'}}>I hope you find this technical documentation helpful in using and customizing the portfolio</p>
				
				<Link className='text-blue-500' to='/'>Go to the portfolio</Link>
			</div>
		</div>
  )
}

export default Docs