'use client'

type EntryEditorProps = {
  entry: JournalEntry | null
}

const EntryEditor = ({ entry }: EntryEditorProps) => {
  return <div>{entry?.content}</div>
}

export default EntryEditor
