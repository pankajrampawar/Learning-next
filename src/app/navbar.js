

export default function Navbar() {
    return <main className='flex justify-between mt-5 ml-8 items-center'>
        <div>
            <img src="/assets/shared/logo.svg"/>
        </div>

        <div className='flex gap-12 menu justify-center items-center p-8 w-1/2 '>
            <span>HOME</span>
            <span>DESTINATION</span>
            <span>CREW</span>
            <span>TECHNOLOGY</span>
        </div>
    </main>
}