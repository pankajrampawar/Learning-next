import Link from 'next/link'

export default function egRoute() {
    
    return <div>
        This is example of a route 
        <Link className="bg-red-100" href="/" >Click here</Link> to go back
    </div>
}