'use client';
import { navbarItems } from '@/const/navbarItems';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState(false);

  const handleNavigation = () => {
    setAnimation(!animation);
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 300);
  };

  return (
    <>
      <header className='relative min-h-162.5 w-full'>
        {/* bg image */}
        <div className='absolute inset-0 min-h-[400px] overflow-hidden'>
          <div className='h-full w-full transform bg-[url("/mobile/image-hero.jpg")] bg-cover bg-center bg-no-repeat md:bg-["/desktop/image-hero.jpg"] lg:bg-[url("/desktop/image-hero.jpg")] lg:bg-size-[100%_100%]'></div>
        </div>

        {/* bg overlay */}
        {/* black overlay */}
        <div className='absolute inset-0 bg-black/30 md:bg-black/40 lg:bg-black/50'></div>

        {/* logo and hamburger */}
        <div className='fixed z-10 flex w-full items-center justify-between px-6 pt-10 md:px-20 lg:items-start lg:px-41.25 lg:pt-16'>
          <Image
            src='/logo.svg'
            alt='logo'
            width={144}
            height={32}
            className='h-auto w-36 md:w-48'
          />

          <button
            type='button'
            onClick={handleNavigation}
            className='cursor-pointer hover:opacity-60 active:opacity-60 lg:hidden'
          >
            <Image
              src='/icon-hamburger.svg'
              alt='hamburger'
              width={24}
              height={20}
              className='h-auto w-6 md:w-8'
            />
          </button>

          <nav className='hidden lg:block'>
            <ul className='text-preset-6 font-alata hidden items-start gap-10 text-white lg:flex'>
              {navbarItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className='relative cursor-pointer before:absolute before:-bottom-4 before:h-1 before:w-0 before:translate-x-1/2 before:bg-white hover:before:w-1/2'
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* hero description */}
        <div className='absolute inset-0 flex min-h-49 items-center justify-center px-6 md:px-20 lg:top-20 lg:justify-start lg:px-41.25'>
          <h1 className='text-preset-3 md:text-preset-1 border-2 border-white p-6 text-white uppercase md:p-7 lg:max-w-162.5'>
            Immersive experiences that
            <br className='md:hidden' />
            deliver
          </h1>
        </div>
      </header>

      {/* mobile navigation */}
      {isOpen && (
        <nav
          className={`${animation ? 'animate-slide-right' : 'animate-slide-left'} fixed top-0 z-20 h-screen w-full bg-black px-6 pt-10 shadow-lg md:px-20 md:pt-16`}
        >
          <div className='mb-40 flex items-center justify-between'>
            <Image
              src='/logo.svg'
              alt='logo'
              width={144}
              height={32}
              className='h-auto w-36 md:w-48'
            />

            <button onClick={handleNavigation} type='button'>
              <Image
                src='/icon-close.svg'
                alt='hamburger'
                width={18}
                height={18}
                className='h-auto w-4.5 cursor-pointer hover:opacity-60 md:w-6'
              />
            </button>
          </div>
          <div className='text-preset-5 flex flex-col justify-center gap-6 text-white uppercase'>
            {
              // eslint-disable-next-line
              navbarItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className='hover:opacity-60 active:opacity-60'
                  onClick={handleNavigation}
                >
                  {item.title}
                </a>
              ))
            }
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
