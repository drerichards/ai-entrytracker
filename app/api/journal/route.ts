import { getUserFromClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export const POST = async () => {
  const user = await getUserFromClerkID()
  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: 'Tell me about your day...',
    },
  })

  revalidatePath('/journal')

  return NextResponse.json({ data: entry })
}
