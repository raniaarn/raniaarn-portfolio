import { Button } from '@/components/elements';
import Image from 'next/image'
import Link from 'next/link';
import { useWindowSize } from 'usehooks-ts';

export const AboutMeSection = () => {
  const { width } = useWindowSize()

  return (
    <div id='home-header' className={`pt-32 px-4 md:pt-40`}>
      <div className='flex-col my-auto lg:flex-row flex items-end gap-4 max-w-[1200px] mx-auto px-8 md:px-20'>
        <div className='flex-col flex items-center md:items-start w-full h-full gap-2'>
          <div className="flex-row flex gap-2 items-center justify-center">
            <div className="text-4xl font-semibold text-white">
              Hi!
            </div>
            <Image
              className='animate-wiggle'
              src={'/images/blinks.png'}
              alt={'Raniaarn'}
              width={40}
              height={40} >
            </Image>
          </div>
          <h1 className={`text-4xl font-semibold text-white text-center md:text-left`}>
            I'm <span className='text-purple-400'>Rania Maharani Narendra</span>
          </h1>
          <p className='text-white w-full text-sm mx-4 pb-4 md:mr-24 md:mx-auto xl:mx-0 text-justify pt-2'>
            Currently pursuing my undergraduate studies at the Faculty of Computer Science at the University of Indonesia. My academic and non academic journeys fueled my passion for UI/UX, Graphic Design, and Software Development.
          </p>
          <div className='flex-row pb-6 md:pb-16 flex gap-8 w-full justify-center md:justify-start'>
            <Link href="#contact">
              <Button content='Contact Me' style='primary' />
            </Link>
            <Link href="https://docs.google.com/document/d/17k2KLO9s-rpLuWoOd6blPUE32Nf_ERBrk_zPkjxWEiY/preview" target='blank'>
              <Button content='View CV' style='outline' />
            </Link>
          </div>
        </div>
        <div className='mx-auto relative bottom-0 w-[70%] md:w-[50%] max-w-96 aspect-[4.2/5] overflow-hidden'>
          <Image
            src={'/images/portrait2.png'}
            alt={'Raniaarn'}
            layout="fill"
          >
          </Image>
        </div>
      </div>
    </div>
  )
}

export default AboutMeSection;