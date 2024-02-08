type EntryCardProps = {
  entry: JournalEntry
}

const EntryCard = ({ entry }: EntryCardProps) => {
  const date = new Date(entry.createdAt).toDateString()
  console.log(entry)
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5">{date}</div>
      <div className="px-4 py-5">{entry.content}</div>
      {/* <div className="px-4 py-4">{entry.analysis.mood}</div> */}
    </div>
  )
}

export default EntryCard
