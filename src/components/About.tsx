import Image from 'next/image';

const About = () => {
  return (
    <section
      className='lg: mx-6 mt-24 flex flex-col items-center justify-center gap-12 md:mx-20 lg:relative lg:mx-auto lg:mt-40 lg:max-w-277.75 lg:flex-row'
      id='about'
    >
      {/* image about */}
      <div className='w-full' aria-label='about'>
        <Image
          src={'/mobile/image-interactive.jpg'}
          alt='about'
          width={398}
          height={224}
          className='h-auto w-99.5 md:hidden'
        />

        <Image
          src={'/tablet/image-interactive.png'}
          alt='about'
          width={610}
          height={400}
          className='hidden h-auto w-full md:block lg:hidden'
        />

        <Image
          src={'/desktop/image-interactive.jpg'}
          alt='about'
          width={731}
          height={500}
          className='hidden h-125 w-182.75 lg:block'
        />
      </div>

      {/* company description */}
      <div className='flex flex-col items-center justify-center gap-4 px-5 text-center md:gap-6 md:px-0 lg:absolute lg:right-0 lg:-bottom-1 lg:min-h-79.25 lg:max-w-135.25 lg:items-end lg:justify-end-safe lg:bg-white lg:pl-22 lg:text-start'>
        <h2 className='text-preset-4 md:text-preset-2 uppercase md:px-17 lg:px-0'>
          The leader in interactive VR
        </h2>

        <p className='font-alata text-preset-6 leading-6 text-black opacity-50'>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default About;
