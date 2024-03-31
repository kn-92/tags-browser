import { create } from 'zustand';
import { State } from './types';

import { devtools } from 'zustand/middleware';

export const useStore = create<State>()(
  devtools((set) => ({
    numberOfElements: '30',
    sort: 'popular',
    order: 'desc',
    page: 1,
    setNumberOfElements: (payload: string) => set(() => ({ numberOfElements: payload })),
    setSort: (payload: string) => set(() => ({ sort: payload })),
    setOrder: (payload: string) => set(() => ({ order: payload })),
    setPage: (payload: number) => set(() => ({ page: payload })),
  })),
);
