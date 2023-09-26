import React from 'react'
import SectionHeading from './SectionHeading'
import Form from './Form'


export default function Contact() {
  return (
    <section className=' mb-20 sm:mb-28 w-[min(100%,38rem)] ' id='contact'>
        <SectionHeading>Contact Me</SectionHeading>
        <p className=' text-gray-700 -mt-5 text-center'>Please contact me directly at <a href="mailto:example@gmail.com" className=' underline font-medium'>example@gmail</a> or throughout this form </p>
        <Form/>
    </section>
  )
}
