import Link from 'next/link'

export default function Home() {
  return (
    <div>
      clicking the below button will take  you to example route.
      <Link href='/egRoute' className='bg-red-200 text-black'>Click Here</Link>
    </div>
  )
}
