import Navbar from './navbar'

export default function Home() {

  const bgMobile = "/assets/home/background-home-mobile.jpg";
  const bgTablet = "/assets/home/background-home-tablet.jpg";
  const bgDesktop = "/assets/home/background-home-desktop.jpg";

  return <div className='h-screen xl:overflow-hidden'>
    <img src={bgMobile} className='sm:hidden  fixed z-0 top-0 w-full h-full'/>
    <img src={bgTablet} className='hidden sm:block lg:hidden  fixed z-0 top-0 w-full h-full'/>
    <img src={bgDesktop} className='hidden lg:block fixed z-0 top-0 w-full h-full'/>

    <div className='z-20 relative top-0 w-full'>
      <Navbar/>
    </div>

    <main className='relative z-10 h-full w-full flex flex-col xl:flex-row justify-evenly items-center'>
      
      <section className='flex flex-col items-center xl:items-start text-center xl:text-start gap-6 lg:gap-10 max-w-[450px] p-5'>
        <p className='text-base sm:text-lg'>SO, YOU WANT TO TRAVEL TO</p>
        <h1 className='text-7xl sm:text-8xl xl:text-9xl'>SPACE</h1>
        <p className='sm:text-sm text-xs'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </section>
      
      <section>
        <div className='bg-white aspect-square h-64 rounded-full text-black text-4xl flex justify-center items-center'>
          Explore
        </div>
      </section>
    </main>
  </div>
}
