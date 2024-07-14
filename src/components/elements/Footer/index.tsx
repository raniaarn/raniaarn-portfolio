import Link from 'next/link';
import React from 'react';
import { FaGithub, FaEnvelope, FaInstagram, FaLinkedin, FaBehance, FaMedium, FaDribbble } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer id='contact' className='w-full bottom-0 z-50 py-6 bg-white justify-center items-center gap-2.5 inline-flex px-4 md:px-0 text-center flex-col'>
      <div className="text-black text-sm text-base font-bold">Contact Me</div>
      <div className='flex-row flex gap-4 text-2xl'>
        <Link href="mailto:raniamn03@gmail.com">
          <FaEnvelope className='hover:text-purple-500'/>
        </Link>
        <Link href="https://instagram.com/raniamhrnn" target='blank'>
          <FaInstagram className='hover:text-purple-500'/>
        </Link>
        <Link href="https://github.com/raniaarn" target='blank'>
          <FaGithub className='hover:text-purple-500'/>
        </Link>
        <Link href="https://medium.com/@raniaarn" target='blank'>
          <FaMedium className='hover:text-purple-500'/>
        </Link>
        <Link href="https://linkedin.com/in/raniaarn" target='blank'>
          <FaLinkedin className='hover:text-purple-500'/>
        </Link>
        <Link href="https://www.behance.net/raniaarn" target='blank'>
          <FaBehance className='hover:text-purple-500'/>
        </Link>
        <Link href="https://dribbble.com/Raniaarn" target='blank'>
          <FaDribbble className='hover:text-purple-500'/>
        </Link>
      </div>
    </footer>
  )
}