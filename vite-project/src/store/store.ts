import { create } from "zustand";
import { State } from "./types";

import { devtools } from "zustand/middleware";

// export const useStore = create<State>((set) => ({
//   numberOfElements: "",
//   setNumberOfElements: (newNumber: string) =>
//     set(() => ({ numberOfElements: newNumber })),
// }));

export const useStore = create<State>()(
  devtools((set) => ({
    numberOfElements: "",
    setNumberOfElements: (newNumber: string) =>
      set(() => ({ numberOfElements: newNumber })),
  }))
);
