import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Home() {
  const { userId } = await auth()

  let href = userId ? '/journal' : '/new-user'

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div className="w-full max-w-[600px]">
        <h1 className="text-6xl mb-4">Journal Mood App</h1>
        <p className="text-2xl text-white/60 mb-4">
          Your friendly diary for tracking moods and discovering your emotional
          patterns
        </p>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 px-4 py-3 rounded-lg text-xl">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
