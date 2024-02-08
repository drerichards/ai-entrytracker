import EntryEditor from '@/components/EntryEditor'
import { getUserFromClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

interface JournalEntryPageProps {
  params: {
    id: string
  }
}

const getEntry = async (id: string) => {
  const user = await getUserFromClerkID()
  const entry = await prisma.journalEntry.findUnique({
    where: {
      // userId_idpassed to have a uniq combo of keys for one user to many entries
      // ensures entry is user's
      userId_id: {
        userId: user.id,
        id,
      },
    },
  })

  return entry
}

const JournalEntryPage = async ({ params }: JournalEntryPageProps) => {
  const entry = await getEntry(params.id)

  return (
    <div>
      <EntryEditor entry={entry} />
    </div>
  )
}

export default JournalEntryPage
