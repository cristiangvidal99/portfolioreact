import { Disclosure } from '@headlessui/react';
import { BriefcaseIcon, HomeIcon, MailIcon, MenuAlt1Icon, UserIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">abrir menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuAlt1Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-center sm:justify-end">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <div className="text-2xl flex flex-row justify-start items-center gap-2">
                      <Link to="/" className='text-gray-300 transition-all delay-75 p-2 hover:text-white flex justify-center items-center gap-1'>Inicio<HomeIcon width={25} /></Link>
                      <Link to="/about" className='text-gray-300 transition-all delay-75 p-2 hover:text-white flex justify-center items-center gap-1'>Sobre mí<UserIcon width={25} /></Link>
                      <Link to="/projects" className='text-gray-300 transition-all delay-75 p-2 hover:text-white flex justify-center items-center gap-1'>Proyectos<BriefcaseIcon width={25} /></Link>
                      <Link to="/contact" className='text-gray-300 transition-all delay-75 p-2 hover:text-white flex justify-center items-center gap-1'>Contacto<MailIcon width={25} /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="text-2xl flex flex-col justify-center items-start gap-5 ml-2 p-2">
              <Link to="/" className='text-gray-300 transition-all delay-75 p-2 hover:text-white flex justify-center items-center gap-1'>Inicio<HomeIcon width={25} /></Link>
              <Link to="/about" className='text-gray-300 transition-all delay-75 p-2 hover:text-white flex justify-center items-center gap-1'>Sobre mí<UserIcon width={25} /></Link>
              <Link to="/projects" className='text-gray-300 transition-all delay-75 p-2 hover:text-white flex justify-center items-center gap-1'>Proyectos<BriefcaseIcon width={25} /></Link>
              <Link to="/contact" className='text-gray-300 transition-all delay-75 p-2 hover:text-white flex justify-center items-center gap-1'>Contacto<MailIcon width={25} /></Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Nav;