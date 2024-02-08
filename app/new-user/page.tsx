import { prisma } from '@/utils/db'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const createNewUser = async () => {
  try {
    const user = await currentUser()
    if (!user || !user.id || user.emailAddresses.length === 0) {
      console.error('No user found or user data is incomplete.')
      return
    }

    const match = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
    })

    if (!match) {
      await prisma.user.create({
        data: {
          clerkId: user.id,
          email: user.emailAddresses[0].emailAddress,
        },
      })
    }

    redirect('/journal')
  } catch (error) {
    console.error('Error creating new user:', error)
  }
}

const NewUser = async () => {
  await createNewUser()
  return <div className="text-white text-4xl">Loading...</div>
}

export default NewUser
