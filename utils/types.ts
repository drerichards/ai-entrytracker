interface Analysis {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  entryId: string;
  mood: string;
  summary: string;
  color: string;
  negativeMood: boolean;
}

interface JournalEntry {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  content: string;
  analysis?: Analysis | null;
}