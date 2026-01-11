import Dexie from 'dexie'

export const db = new Dexie('farmDiary')

db.version(1).stores({
  diary: '++id, date' // simple index for queries
})