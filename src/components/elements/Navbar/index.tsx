import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import { FaChevronDown, FaChevronUp, FaBars } from "react-icons/fa6";
import { useOnClickOutside, useWindowSize } from 'usehooks-ts'


export const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(true)
  const { width } = useWindowSize()
  const router = useRouter()
  const path = router.pathname
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const ref = useRef(null)

  const handleNavCollapse = () => setIsCollapsed(!isCollapsed)

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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useOnClickOutside(ref, () => {
    setDropdownOpen(false);
  })

  return (
    <nav className={`px-4 fixed top-0 z-50 w-full flex flex-col justify-center ${isTransparent ? 'bg-transparent' : 'bg-white shadow-lg'}`}>
      <div className="mt-2 flex items-center w-full py-3 px-7 mx-auto md:mx-0 md:px-20 justify-between">
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

        <div className={`items-center gap-16 hidden md:flex`}>
          <Link href={"/"} className={`${isTransparent ? 'text-white text-opacity-50 hover:text-opacity-100' : 'text-purple-800'}`}>
            Home
          </Link>
          {path === "/" && (
            <>
              <Link href={"#skills"} className={`${isTransparent ? 'text-white text-opacity-50 hover:text-opacity-100' : 'text-purple-800'}`}>
                Skills
              </Link>
              <div
                className={`${isTransparent ? 'text-white text-opacity-50 hover:text-opacity-100' : 'text-purple-800'}`}
                onClick={toggleDropdown}
                ref={ref}
              >
                <div className="flex items-center cursor-pointer gap-2">
                  <span>Project</span>
                  {dropdownOpen ? <FaChevronUp className="ml-2" size={12} /> : <FaChevronDown className="ml-2" size={12} />}
                </div>
                {dropdownOpen && (
                  <div ref={ref} className={`${isTransparent ? 'absolute bg-white shadow-md rounded-xl mt-2' : 'absolute bg-purple-500 shadow-md rounded-xl mt-2'}`}>
                    <Link href="#Applications" className={`${isTransparent ? 'text-sm block px-4 py-2 text-black' : 'text-sm block px-4 py-2 text-white'}`}>Apps</Link>
                    <Link href="#Design" className={`${isTransparent ? 'text-sm block px-4 py-2 text-black' : 'text-sm block px-4 py-2 text-white'}`}>Designs</Link>
                  </div>
                )}
              </div>
              <Link href={"#contact"} className={`${isTransparent ? 'text-white text-opacity-50 hover:text-opacity-100' : 'text-purple-800'}`}>
                Contact
              </Link>
            </>
          )}
        </div>

        <button className="flex md:hidden" onClick={handleNavCollapse}>
          <FaBars className={`${!isTransparent ? 'w-18 text-purple-500' : 'w-18 text-white'}`} />
        </button>

      </div>

      <div className={`fixed top-20 inset-0 flex flex-col items-center ${width > 840 && 'hidden'} ${isTransparent ? 'bg-purple-950 bg-opacity-95' : 'bg-white'} ${isCollapsed ? 'hidden' : 'flex'}`}>
        <div className='absolute top-[25%] gap-8 flex flex-col '>
          <Link onClick={handleNavCollapse} href={"/"} className={`text-2xl ${isTransparent ? 'text-white' : 'text-purple-800'}`}>
            Home
          </Link>
          {path === "/" && (
            <>
              <Link onClick={handleNavCollapse} href={"#skills"} className={`text-2xl ${isTransparent ? 'text-white' : 'text-purple-800'}`}>
                Skills
              </Link>
              <div
                className={`text-2xl ${isTransparent ? 'text-white text-opacity-100' : 'text-purple-800'}`}
                onClick={toggleDropdown}
                ref={ref}
              >
                <div className="flex items-center cursor-pointer gap-2">
                  <span>Project</span>
                  {dropdownOpen ? <FaChevronUp className="ml-2" size={18} /> : <FaChevronDown className="ml-2" size={18} />}
                </div>
                {dropdownOpen && (
                  <div className={`${isTransparent ? 'mt-2' : 'mt-2'}`}>
                    <Link onClick={handleNavCollapse} href="#Applications" className={`h-fit ${isTransparent ? 'text-xl block px-4 py-2 text-white' : 'text-xl block px-4 py-2 text-purple-800'}`}>Apps</Link>
                    <Link onClick={handleNavCollapse} href="#Design" className={`h-fit ${isTransparent ? 'text-xl block px-4 py-2 text-white' : 'text-xl block px-4 py-2 text-purple-800'}`}>Designs</Link>
                  </div>
                )}
              </div>
              <Link onClick={handleNavCollapse} href={"#contact"} className={`text-2xl ${isTransparent ? 'text-white text-opacity-100' : 'text-purple-800'}`}>
                Contact
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};