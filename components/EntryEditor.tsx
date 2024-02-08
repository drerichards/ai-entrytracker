'use client'

import { updatePreviousEntry } from '@/utils/api'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'

type EntryEditorProps = {
  entry: JournalEntry | null
}

const EntryEditor = ({ entry }: EntryEditorProps) => {
  const [value, setValue] = useState(entry?.content)
  const [isLoading, setIsLoading] = useState(false)

  useAutosave({
    data: value,
    onSave: async (_value) => {
      if (entry && _value) {
        setIsLoading(true)
        await updatePreviousEntry(entry?.id, _value)
        setIsLoading(false)
      }
    },
  })

  return (
    <div className="w-[calc(100vw-215px)] h-[calc(100vh-68px)] mx-auto">
      {isLoading && <div>Loading...</div>}
      <textarea
        className="w-full h-full p-8 text-xl outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default EntryEditor
