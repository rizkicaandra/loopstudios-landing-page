import Image from 'next/image';

const Portofolio = () => {
  const portofolio = [
    {
      id: 1,
      mobileContent: '/mobile/image-deep-earth.jpg',
      desktopContent: '/desktop/image-deep-earth.jpg',
      title: 'DEEP EARTH',
      description: 'A deep place in the heart of the earth',
    },
    {
      id: 2,
      mobileContent: '/mobile/image-night-arcade.jpg',
      desktopContent: '/desktop/image-night-arcade.jpg',
      title: 'NIGHT ARCADE',
      description: 'A story of exploration',
    },
    {
      id: 3,
      mobileContent: '/mobile/image-soccer-team.jpg',
      desktopContent: '/desktop/image-soccer-team.jpg',
      title: 'SOCCER TEAM VR',
      description: 'A story of a soccer team',
    },
    {
      id: 4,
      mobileContent: '/mobile/image-grid.jpg',
      desktopContent: '/desktop/image-grid.jpg',
      title: 'THE GRID',
      description: 'A day in the life in the grid',
    },
    {
      id: 5,
      mobileContent: '/mobile/image-from-above.jpg',
      desktopContent: '/desktop/image-from-above.jpg',
      title: 'FROM UP ABOVE VR',
      description: 'A day in the life in the grid',
    },
    {
      id: 6,
      mobileContent: '/mobile/image-pocket-borealis.jpg',
      desktopContent: '/desktop/image-pocket-borealis.jpg',
      title: 'POCKET BOREALIS',
      description: 'A day in the life in the grid',
    },
    {
      id: 7,
      mobileContent: '/mobile/image-curiosity.jpg',
      desktopContent: '/desktop/image-curiosity.jpg',
      title: 'THE CURIOUSITY',
      description: 'A day in the life in the grid',
    },
    {
      id: 8,
      mobileContent: '/mobile/image-fisheye.jpg',
      desktopContent: '/desktop/image-fisheye.jpg',
      title: 'MAKE IT FISHEYE',
      description: 'A day in the life in the grid',
    },
  ];

  return (
    <div className='mt-24 flex flex-col items-center justify-center gap-8 lg:mt-46'>
      {/* portofolio title */}
      <div className='mb-4 lg:mb-12 lg:flex lg:w-full lg:max-w-277.75 lg:items-center lg:justify-between'>
        <h3 className='text-preset-4 lg:text-preset-2 text-black'>
          OUR CREATIONS
        </h3>

        <button
          type='button'
          className='font-alata hidden h-10 w-full max-w-39.5 cursor-pointer items-center justify-center border-1 border-black tracking-widest hover:bg-black hover:text-white lg:flex'
        >
          SEE ALL
        </button>
      </div>

      {/* portofolio grid */}
      <div className='grid grid-cols-1 place-items-center justify-items-center gap-6 lg:grid-cols-4'>
        {portofolio.map((item) => (
          <div
            key={item.id}
            className='group relative h-30 w-81.75 overflow-hidden hover:cursor-pointer md:w-152 lg:h-112.5 lg:w-64'
          >
            <Image
              src={item.mobileContent}
              alt={item.title}
              width={182}
              height={125}
              className='absolute h-full w-full object-cover object-top lg:hidden'
            />

            <Image
              src={item.desktopContent}
              alt={item.title}
              width={182}
              height={125}
              className='hidden h-full w-full object-cover object-top lg:block'
            />

            <div className='absolute inset-0 bg-gradient-to-l from-black/0 to-black/60 group-hover:bg-white/70 lg:bg-gradient-to-b'></div>

            <h4 className='text-preset-5 lg:text-preset-4 absolute bottom-5 left-4 z-10 max-w-32 text-white group-hover:text-black md:left-8 lg:bottom-8 lg:left-10 lg:max-w-40'>
              {item.title}
            </h4>
          </div>
        ))}
      </div>

      <button
        type='button'
        className='font-alata flex h-10 w-full max-w-39.5 cursor-pointer items-center justify-center border-1 border-black tracking-widest hover:bg-black hover:text-white lg:hidden'
      >
        SEE ALL
      </button>
    </div>
  );
};

export default Portofolio;
