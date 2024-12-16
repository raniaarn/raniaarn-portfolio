import React from 'react';
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { FaTimes } from 'react-icons/fa';
import Image from "next/image"
import { ModalProps } from '@/components/types/modalProps';
import Link from 'next/link';
import { Button } from '@/components';

export const Modal: React.FC<ModalProps> = ({ handleClose, title, description, skillsUrls, redirect, redirectOutside, imageUrl }) => {
  const ref = useRef(null)

  useOnClickOutside(ref, () => {
    handleClose()
  })

  return (
    <div className="px-4 h-screen fixed inset-0 z-50 flex backdrop-blur-sm bg-gray-800 bg-opacity-60 flex justify-center items-center">
      <div ref={ref} className="flex flex-col bg-white my-6 p-8 rounded-lg w-96">
        <div className='flex justify-between flex-row w-full mb-4 items-start'>
          <h2 className="flex text-sm font-semibold w-full items-center justify-center text-center">{title}</h2>
          <button
            className="text-lg"
            onClick={() => handleClose()}
          >
            <FaTimes className='text-purple-500' />
          </button>
        </div>
        <div className='flex flex-col gap-4 items-center'>
          <Image
            className="mt-2 shadow-sm rounded-lg mx-auto items-center object-cover w-120 h-32"
            src={imageUrl}
            alt={imageUrl}
            width={400}
            height={400} >
          </Image>
          <div className="items-start flex flex-row gap-4">
            {skillsUrls.map((skill) => (
              <Image
                key={skill}
                src={skill}
                alt={skill}
                width={30}
                height={30}
              />
            ))}
          </div>

          <p className='text-xs text-center'>{description}</p>
          <div className='flex-row flex gap-4 w-full justify-center'>
            <Link className="w-full" href={`${redirect[0]}`} target={redirectOutside ? "_blank" : "_self"}>
              <Button extendClassName="w-full"  content='Learn More' style='primary' />
            </Link>
            {redirect[1] &&
              <Link className="w-full" href={redirect[1]}>
                <Button extendClassName="w-full" content='Presentation' style='outline-light' />
              </Link>
            }
          </div>
        </div>
      </div>
    </div >
  );
};
