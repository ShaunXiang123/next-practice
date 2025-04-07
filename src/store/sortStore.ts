import { create } from 'zustand'
import { SortValue } from '@/types/global'

interface SortState {
  sort: SortValue
  setSort: (by: SortValue) => void
}

const useSortStore = create<SortState>((set) => ({
  sort: 'latest',
  setSort: (val) => set(() => ({ sort: val })),
}))


export default useSortStore
