import Link from 'next/link'
import Navbar from './navbar'

export default function Home() {

  const bgMobile = "/assets/home/background-home-mobile.jpg";
  const bgTablet = "/assets/home/background-home-tablet.jpg";
  const bgDesktop = "/assets/home/background-home-desktop.jpg";

  return <div>
    <img src={bgMobile} className='sm:hidden  fixed z-0 top-0 w-full h-full'/>
    <img src={bgTablet} className='hidden sm:block lg:hidden  fixed z-0 top-0 w-full h-full'/>
    <img src={bgDesktop} className='hidden lg:block fixed z-0 top-0 w-full h-full'/>

    <div className='relative z-10'>
      <Navbar/>
    </div>
  </div>
}
