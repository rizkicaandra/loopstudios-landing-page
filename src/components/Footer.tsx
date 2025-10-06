import { navbarItems } from '@/const/navbarItems';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='mt-24 bg-black p-10 lg:mt-45.5 lg:py-12'>
      <div className='flex flex-col items-center justify-center gap-10 md:flex-row lg:mx-auto lg:max-w-277.75 lg:justify-between'>
        {/* left side */}
        <div className='flex flex-col items-center justify-center gap-10 md:items-start md:justify-start md:gap-6'>
          {/* logo */}
          <div className='h-6 w-36'>
            <Image
              src={'/logo.svg'}
              alt={'logo'}
              width={144}
              height={32}
              className='h-full w-full'
            />
          </div>

          <nav>
            <ul className='font-alata text-preset-6 flex flex-col items-center justify-center gap-4 text-white md:flex-row'>
              {navbarItems.map((item) => (
                <li
                  key={item.title}
                  className='relative before:absolute before:-bottom-4 before:h-1 before:w-0 before:translate-x-1/2 before:bg-white hover:before:w-1/2 active:opacity-80'
                >
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* right side */}
        <div className='flex flex-col items-center justify-center gap-4 md:items-end md:justify-start md:gap-6'>
          <ul className='flex items-center justify-center gap-4'>
            <li>
              <a href='#'>
                <Image
                  src={'/icon-facebook.svg'}
                  alt={'icon-facebook'}
                  width={24}
                  height={24}
                  className='hover:opacity-80'
                />
              </a>
            </li>
            <li>
              <a href='#'>
                <Image
                  src={'/icon-twitter.svg'}
                  alt={'icon-twitter'}
                  width={24}
                  height={24}
                  className='hover:opacity-80'
                />
              </a>
            </li>
            <li>
              <a href='#'>
                <Image
                  src={'/icon-pinterest.svg'}
                  alt={'icon-pinterest'}
                  width={24}
                  height={24}
                  className='hover:opacity-80'
                />
              </a>
            </li>
            <li>
              <a href='#'>
                <Image
                  src={'/icon-instagram.svg'}
                  alt={'icon-instagram'}
                  width={24}
                  height={24}
                  className='hover:opacity-80'
                />
              </a>
            </li>
          </ul>

          <span className='text-preset-6 w-fit text-center text-white opacity-50'>
            © 2021 Loopstudios. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
