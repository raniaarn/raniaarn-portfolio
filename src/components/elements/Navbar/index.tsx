import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

export const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const router = useRouter()
  const path = router.pathname

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const skillsElement = document.getElementById('skills');
      const triggerHeight = skillsElement ? skillsElement.offsetTop : 0;

      if (currentScrollPos < triggerHeight) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`px-4 fixed top-0 z-50 w-full flex flex-col justify-center ${isTransparent ? 'bg-transparent' : 'bg-white shadow-lg'}`}>
      <div className="flex items-center py-3 px-7 mx-auto md:mx-0 md:px-20 justify-between">
        <div>
          <Link href={'/'} as={'/'} className='flex-row items-center gap-4 flex'>
            <Image
              src={'/icons/raniaarn.svg'}
              alt={'Raniaarn'}
              width={60}
              height={60}
              placeholder="blur"
              blurDataURL={'/icons/raniaarn.svg'}
            />
            <div className={`font-semibold ${isTransparent ? 'text-white' : 'text-black'}`}>
              Raniaarn
            </div>
          </Link>
        </div>

        <div className="items-center gap-16 hidden md:flex">
          <Link href={"/"} className={`${isTransparent ? 'text-white text-opacity-50 hover:text-opacity-100' : 'text-purple-800'}`}>
            Home
          </Link>
          {path === "/" && (
            <>
              <Link href={"#skills"} className={`${isTransparent ? 'text-white text-opacity-50 hover:text-opacity-100' : 'text-purple-800'}`}>
                Skills
              </Link>
              <Link href={"#projects"} className={`${isTransparent ? 'text-white text-opacity-50 hover:text-opacity-100' : 'text-purple-800'}`}>
                Project
              </Link>
              <Link href={"#contact"} className={`${isTransparent ? 'text-white text-opacity-50 hover:text-opacity-100' : 'text-purple-800'}`}>
                Contact
              </Link>
            </>
          )
          }
        </div>

      </div>
    </nav>
  );
};